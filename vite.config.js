import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/todo-app/' : '/',

  root: 'src',

  publicDir: '../public',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },

  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
}));
