import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add base path for GitHub Pages deployment
  // Replace 'newshub' with your actual repository name
  base: '/newshub/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
