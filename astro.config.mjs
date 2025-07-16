// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ashphy.github.io',
  base: 'react-vue-side-by-side',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), vue()],

  devToolbar: {
    enabled: false
  },

  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});