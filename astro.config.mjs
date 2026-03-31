// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mrekole.fr',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
