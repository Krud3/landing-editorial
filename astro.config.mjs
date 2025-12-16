// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.emhm.app',
  integrations: [sitemap()],
  vite: {
    plugins: [
      tailwindcss()
    ],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname
      }
    }
  },
});