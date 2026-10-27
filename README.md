# divesh.shanraj.com

Thottil Vizha (cradle ceremony) invitation for Divesh. Single page Astro site on Cloudflare Workers.

- Edit names, date, time, address and map link in `src/data/event.ts`
- `npm install` then `npm run dev`
- Deploy: `npm run deploy` (custom domain `divesh.shanraj.com` is set in `wrangler.jsonc`)

If you change the map link, regenerate `src/assets/location-qr.svg` from the new URL.
