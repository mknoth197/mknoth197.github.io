// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkSmartypants from 'remark-smartypants';

// If you ever rename the repo or move to a project page, update these two lines.
// For a user site (username.github.io), site = 'https://username.github.io' and base is omitted.
const SITE = 'https://mknoth197.github.io';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // remark-smartypants ships unified types that don't line up with Astro's stricter
    // Root-node remark types; the plugin is correct at runtime, so cast past the mismatch.
    remarkPlugins: [/** @type {any} */ (remarkSmartypants)],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      wrap: true,
    },
  },
});
