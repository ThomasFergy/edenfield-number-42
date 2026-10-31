import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://<user>.github.io/edenfield-number-42/ on GitHub Pages.
  // Use '/' instead when moving to a custom domain.
  base: '/edenfield-number-42/',
  plugins: [react()],
})
