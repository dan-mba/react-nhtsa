import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {minifyHtml} from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    minifyHtml()
  ],
  server: {
    port: 8080,
  },
  build: {
    outDir: 'docs'
  },
  base: './'
})
