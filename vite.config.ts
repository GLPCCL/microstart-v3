import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/microstart-v3/',
  server: {
    port: 5173,
    host: true
  }
})