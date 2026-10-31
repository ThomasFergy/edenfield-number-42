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

## Deploying

`.github/workflows/deploy-website.yml` builds and publishes `website/dist` to GitHub Pages on
every push to `main`. Enable it in the repo under Settings → Pages → Source: **GitHub Actions**.
It also works unchanged on Netlify, Vercel or Cloudflare Pages (build command `npm run build`,
output directory `dist`, base directory `website`).

If you serve from a sub-path (e.g. `username.github.io/edenfield-number-42/`) rather than a
custom domain, set `base: '/edenfield-number-42/'` in `vite.config.ts`.
