import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {createHtmlPlugin} from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin()
  ],
  server: {
    port: 8080,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: '/index.html',
    },
  },
  base: './'
})
