// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        '3a5e-2603-9001-73f0-9180-78da-2995-b1bc-f9d6.ngrok-free.app',
        'localhost'
      ]
    }
  }
});