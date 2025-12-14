import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Replace with your repo name if different
  server: {
    allowedHosts: [
      'going.fitzjohn.dev',
      'goingductless.ca',
      'www.goingductless.ca'
    ]
  },
  build: {
    // Inline CSS smaller than 4KB to eliminate render-blocking requests
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  }
})
