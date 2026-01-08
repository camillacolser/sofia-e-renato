import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use '/' for custom domains. If using username.github.io/repo, use '/repo/'
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});