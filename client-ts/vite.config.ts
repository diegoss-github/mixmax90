/// <reference types="vitest" />
/// <reference types="vite/client" />

  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  // https://vitejs.dev/config/
  export default defineConfig({
  plugins: [react()],
  server: {host: "127.0.0.1"},
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.js'
  },
});
