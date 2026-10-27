// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Divesh's Thottil Vizha (cradle ceremony) invitation
export default defineConfig({
  site: 'https://divesh.shanraj.com',
  trailingSlash: 'never',
  // `compile` optimises <Image> at build time and ships static .webp files
  adapter: cloudflare({ imageService: 'compile' }),
});
