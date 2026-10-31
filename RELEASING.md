# Releasing the website

The live site is whatever **release tag** was deployed last. Nothing goes live just by pushing to `main`.

```
work on main  ->  commit + push  ->  scripts/release.sh patch  ->  GitHub builds the tag and publishes it
```

## Make a release

1. Commit your changes and push `main` as normal. (`CI` runs lint and a build on every push, but does not deploy.)
2. Run the release script from the repo root:

   | Command | Version change | Use for |
   | --- | --- | --- |
   | `scripts/release.sh patch` | 1.0.0 → 1.0.1 | wording, phone, times, photo swaps |
   | `scripts/release.sh minor` | 1.0.0 → 1.1.0 | a new section or feature |
   | `scripts/release.sh major` | 1.0.0 → 2.0.0 | a redesign |
   | `scripts/release.sh 1.0.0` | explicit | the very first release |

   Add `--dry-run` to see what would happen without tagging anything, and `-y` to skip the confirmation.

The script checks that you are on `main`, that the tree is clean, that you have pushed, and that there are website changes since the last release. It then runs lint and a build, shows you what is going out, asks to confirm, and pushes the tag `site-vX.Y.Z`.

3. Watch **Actions** on GitHub. When "Deploy website" goes green the site is live. A **GitHub Release** with auto-generated notes is created for the tag.

## Roll back

If a release is wrong, redeploy an earlier tag:

GitHub → **Actions → Deploy website → Run workflow** → enter the old tag (for example `site-v1.0.0`).

That rebuilds that exact tag and publishes it. Then fix forward on `main` and release again. (No GitHub Release is created for a rollback.)

## One-time GitHub setup

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. **Settings → Environments → github-pages → Deployment branches and tags:** add a tag rule `site-v*`
   (otherwise GitHub refuses to deploy from a tag with "not allowed to deploy to github-pages due to environment protection rules").
3. Optional: protect `site-v*` tags (Settings → Rules → Rulesets) so released tags cannot be moved or deleted.

## Notes

- Tags are prefixed `site-v` so the LaTeX menus and the rest of the repo never trigger a site deploy.
- `website/index.html` currently has `noindex, nofollow` so search engines ignore the site. Remove that tag in a release when the site should be found on Google.
- The first release to a custom domain needs `base: '/'` in `website/vite.config.ts`.
