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

Releases are tagged `site-vX.Y.Z`; the latest one is what is live. See the Releases tab on GitHub for what changed in each.

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

## Deploying

The site is published to GitHub Pages **only from release tags** (`site-vX.Y.Z`), never straight from `main`.
See [`../RELEASING.md`](../RELEASING.md) for how to make a release (`scripts/release.sh`), roll back, and the one-time GitHub setup.

It also builds unchanged on Netlify, Vercel or Cloudflare Pages (build command `npm run build`,
output directory `dist`, base directory `website`).
