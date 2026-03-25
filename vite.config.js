import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import {createHtmlPlugin} from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
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
