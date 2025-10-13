import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/font-pairing-studio/', // Replace 'font-pairing-studio' with your GitHub repo name
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
