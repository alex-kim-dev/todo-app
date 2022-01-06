import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/todo-app/' : '/',

  root: 'src',

  build: {
    emptyOutDir: true,
    sourcemap: true,
  },

  plugins: [react()],
}));
