# website

The Edenfield Number 42 marketing site. A static single-page site built with
**Vite + React + TypeScript**, plain CSS, and self-hosted fonts (Cinzel and EB Garamond,
matching the printed menus). There is no backend: bookings go to Booking.com or by phone.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run lint
```

## Where things are

```
src/content/site.ts   ALL copy and facts: contact details, rooms, breakfast, reviews, policies
src/components/       one component per section (Hero, Welcome, Rooms, Breakfast, Reviews, FindUs…)
src/photos/           drop real photos here (see src/photos/README.md)
src/index.css         design tokens and styles (navy + gold palette)
index.html            title, meta description, social tags, schema.org JSON-LD
```

To change wording, prices-free facts, the phone number or the booking link, edit
`src/content/site.ts` only. Components just render it.

## Photos

Until real photos are added, each image slot shows an on-brand placeholder. In dev mode the
placeholder shows the filename to use. Full list in [`src/photos/README.md`](src/photos/README.md).

## Deploying (two designs side by side)

The deploy workflow publishes both design options to one GitHub Pages site so a client can compare them:

```
/            chooser page (website/chooser/index.html)
/classic/    first design, built from the git tag `design-classic`
/refined/    current design, built from main
```

Setup, once:

1. Tag the commit that holds the first design: `git tag design-classic <commit>` and `git push origin design-classic`.
2. Enable Pages in the repo under Settings → Pages → Source: **GitHub Actions**.

The workflow `.github/workflows/deploy-website.yml` runs `scripts/build-pages.sh` on every push to `main`.
To test the whole thing locally (outputs to `_site/`):

```sh
CLASSIC_REF=HEAD scripts/build-pages.sh
```

Note the classic build uses the content as it was at the tag, so later changes to `src/content/site.ts` do not appear in it.

**When the client has chosen:** set `base` in `vite.config.ts` to the repo path (or `/` for a custom domain), replace
`scripts/build-pages.sh` with a plain `npm run build`, and publish `website/dist` directly. Delete `website/chooser/`.

It also works unchanged on Netlify, Vercel or Cloudflare Pages for a single design (build command `npm run build`,
output directory `dist`, base directory `website`).
