// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';

import icon from 'astro-icon';
import node from '@astrojs/node';

/** @type {any} */
let tailwind = tailwindcss();

export default defineConfig({
  vite: {
      plugins: [
          tailwind
      ]
  },

  integrations: [icon(), preact()],

  adapter: node({
    mode: 'standalone'
  }),

  server: {
    host: '0.0.0.0',
    port: 9812
  }

});