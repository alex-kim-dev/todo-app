import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/todo-app/' : '/',

  root: 'src',

  build: {
    emptyOutDir: true,
    sourcemap: true,
  },

  plugins: [react()],
}));
