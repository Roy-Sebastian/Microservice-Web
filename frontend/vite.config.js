import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/auth': {
        target: 'http://localhost:3000', // Auth service
        changeOrigin: true,
        secure: false,
      },
      '/api/posts': {
        target: 'http://localhost:4000', // Post service
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
