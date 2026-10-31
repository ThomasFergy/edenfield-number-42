#!/usr/bin/env bash
# Release the website.
#
# Tags the current main as site-vX.Y.Z and pushes the tag. GitHub Actions then
# builds that exact tag, deploys it to GitHub Pages and creates a GitHub Release.
# Nothing else is committed or changed by this script.
#
#   scripts/release.sh patch        1.0.0 -> 1.0.1   wording, phone, times, photo swaps
#   scripts/release.sh minor        1.0.0 -> 1.1.0   a new section or feature
#   scripts/release.sh major        1.0.0 -> 2.0.0   a redesign
#   scripts/release.sh 1.0.0        explicit version (needed for the very first release)
#
# Options:  --dry-run  show what would happen, tag nothing
#           -y, --yes  skip the confirmation prompt
set -euo pipefail

PREFIX="site-v"

usage() { sed -n '2,16p' "$0" | sed 's/^# \{0,1\}//'; }
die() { echo "✗ $*" >&2; exit 1; }

BUMP="" DRY=0 YES=0
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY=1 ;;
    -y|--yes) YES=1 ;;
    -h|--help) usage; exit 0 ;;
    patch|minor|major) BUMP="$arg" ;;
    [0-9]*.[0-9]*.[0-9]*) BUMP="$arg" ;;
    *) usage; exit 1 ;;
  esac
done
[ -n "$BUMP" ] || { usage; exit 1; }
if [[ "$BUMP" == [0-9]* && ! "$BUMP" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then die "Version must look like 1.2.3"; fi

cd "$(cd "$(dirname "$0")/.." && pwd)"

# --- safety checks -----------------------------------------------------------
[ "$(git rev-parse --abbrev-ref HEAD)" = "main" ] || die "Releases are made from main (you are on $(git rev-parse --abbrev-ref HEAD))."
[ -z "$(git status --porcelain)" ] || die "You have uncommitted changes. Commit or stash them first."
git fetch --quiet origin main --tags || die "Could not reach GitHub (git fetch failed)."
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] || die "main and origin/main differ. Push (or pull) first so you release what is on GitHub."

ALREADY=$(git tag --points-at HEAD -l "${PREFIX}*")
[ -z "$ALREADY" ] || die "This commit is already released as $ALREADY."

# --- work out the version ------------------------------------------------------
LAST=$(git tag -l "${PREFIX}*" --sort=-v:refname | head -n1)
if [[ "$BUMP" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  NEXT="$BUMP"
  if [ -n "$LAST" ] && [ "$(printf '%s\n%s\n' "${LAST#"$PREFIX"}" "$NEXT" | sort -V | tail -n1)" != "$NEXT" ]; then
    die "$NEXT is not newer than the latest release ($LAST)."
  fi
else
  [ -n "$LAST" ] || die "No earlier release found. For the first release run: scripts/release.sh 1.0.0"
  IFS=. read -r MA MI PA <<<"${LAST#"$PREFIX"}"
  case "$BUMP" in
    major) NEXT="$((MA + 1)).0.0" ;;
    minor) NEXT="$MA.$((MI + 1)).0" ;;
    patch) NEXT="$MA.$MI.$((PA + 1))" ;;
  esac
fi
TAG="${PREFIX}${NEXT}"
if git rev-parse -q --verify "refs/tags/$TAG" >/dev/null; then die "Tag $TAG already exists."; fi

# --- what is going out ---------------------------------------------------------
RANGE="HEAD"; [ -z "$LAST" ] || RANGE="$LAST..HEAD"
CHANGES=$(git log --pretty='  %h %s' "$RANGE" -- website .github)
[ -n "$CHANGES" ] || die "No website changes since ${LAST:-the start}. Nothing to release."

echo "Release ${TAG}  (previous: ${LAST:-none})"
echo "Changes since ${LAST:-the start}:"
echo "$CHANGES"
echo

# --- checks --------------------------------------------------------------------
echo "Running lint and build…"
LOG=$(mktemp)
if ! (
  cd website
  [ -d node_modules ] || npm ci
  npm run lint
  npm run build
) >"$LOG" 2>&1; then
  cat "$LOG" >&2
  rm -f "$LOG"
  die "Lint or build failed. Fix the problems above, commit, and try again."
fi
rm -f "$LOG"
echo "✓ Checks passed"
echo

if [ "$DRY" = 1 ]; then
  echo "Dry run: would tag $TAG at $(git rev-parse --short HEAD) and push it. Nothing changed."
  exit 0
fi

if [ "$YES" != 1 ]; then
  read -r -p "Tag and publish $TAG now? [y/N] " ANSWER
  [[ "$ANSWER" =~ ^[Yy]$ ]] || die "Cancelled."
fi

# --- tag and push ----------------------------------------------------------------
git tag -a "$TAG" -m "Website ${NEXT}" -m "$CHANGES"
if ! git push origin "$TAG"; then
  git tag -d "$TAG" >/dev/null
  die "Push failed; local tag removed. Nothing was released."
fi

REPO_URL=$(git remote get-url origin | sed -E 's#^git@github.com:#https://github.com/#; s#\.git$##')
echo
echo "✓ Released $TAG. GitHub is now building and deploying it."
echo "  Progress: $REPO_URL/actions"
echo "  Release:  $REPO_URL/releases/tag/$TAG"
