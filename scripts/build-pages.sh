#!/bin/sh
# Builds the GitHub Pages site containing both designs:
#   _site/            chooser page
#   _site/classic/    first design, built from the git ref CLASSIC_REF (default: tag design-classic)
#   _site/refined/    current design, built from the working tree
# Usage: scripts/build-pages.sh            (CI)
#        CLASSIC_REF=HEAD scripts/build-pages.sh   (local test)
set -eu

BASE="${PAGES_BASE:-/edenfield-number-42}"
CLASSIC_REF="${CLASSIC_REF:-design-classic}"
ROOT=$(cd "$(dirname "$0")/.." && pwd)
OUT="$ROOT/_site"

if ! git -C "$ROOT" rev-parse --verify --quiet "$CLASSIC_REF^{commit}" >/dev/null; then
  echo "Git ref '$CLASSIC_REF' not found. Tag the first design commit, e.g.: git tag design-classic <commit>" >&2
  exit 1
fi

rm -rf "$OUT" && mkdir -p "$OUT"

echo "==> Building refined (current working tree)"
(cd "$ROOT/website" && npm ci && npm run lint && npm run build -- --base="$BASE/refined/")
cp -R "$ROOT/website/dist" "$OUT/refined"

echo "==> Building classic from $CLASSIC_REF"
WT=$(mktemp -d)
trap 'git -C "$ROOT" worktree remove --force "$WT" >/dev/null 2>&1 || true' EXIT
git -C "$ROOT" worktree add --detach "$WT" "$CLASSIC_REF" >/dev/null
(cd "$WT/website" && npm ci && npm run build -- --base="$BASE/classic/")
cp -R "$WT/website/dist" "$OUT/classic"

echo "==> Chooser page"
cp -R "$ROOT/website/chooser/." "$OUT/"
mkdir -p "$OUT/fonts"
F="$ROOT/website/node_modules/@fontsource"
cp "$F/cinzel/files/cinzel-latin-400-normal.woff2" "$F/cinzel/files/cinzel-latin-600-normal.woff2" \
   "$F/eb-garamond/files/eb-garamond-latin-400-normal.woff2" "$F/eb-garamond/files/eb-garamond-latin-400-italic.woff2" "$OUT/fonts/"

echo "Built $OUT"
