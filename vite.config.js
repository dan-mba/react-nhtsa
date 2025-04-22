import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {createHtmlPlugin} from 'vite-plugin-html';

const ReactCompilerConfig = { /* ... */ };

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
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
