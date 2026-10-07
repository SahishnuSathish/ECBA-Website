import { defineConfig } from 'astro/config';

// BASE_PATH lets the same build serve from a sub-path (e.g. GitHub Pages: /ECBA-Website).
export default defineConfig({
  site: process.env.SITE_URL || 'https://sites.utexas.edu',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
