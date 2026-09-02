import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import {createHtmlPlugin} from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react({ compiler: true }),
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
