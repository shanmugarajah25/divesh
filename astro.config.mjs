// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';

// Divesh's Thottil Vizha (cradle ceremony) invitation
export default defineConfig({
  site: 'https://divesh.shanraj.com',
  trailingSlash: 'never',
  // `compile` optimises <Image> at build time and ships static .webp files
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [icon()],
  vite: {
    // Read by src/data/site.ts to compute years of experience
    define: { __BUILD_YEAR__: new Date().getFullYear() },
  },
});
