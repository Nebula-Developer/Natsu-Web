// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';

import icon from 'astro-icon';
import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

/** @type {any} */
let tailwind = tailwindcss();

export default defineConfig({
  vite: {
      plugins: [
          tailwind
      ]
  },

  integrations: [icon(), preact()],

  adapter: vercel(),

  server: {
    host: '0.0.0.0',
    port: 9812
  }

});