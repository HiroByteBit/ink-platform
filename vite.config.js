import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ - Force fresh build
export default defineConfig({
  plugins: [react()],
  base: './',
})
