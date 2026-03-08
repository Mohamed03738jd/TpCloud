import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,       // <-- active `test`, `expect` globalement
    environment: 'jsdom' // <-- nécessaire pour React
  }
});