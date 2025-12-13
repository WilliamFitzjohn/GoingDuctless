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
  }
})
