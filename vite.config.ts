import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site: https://zhannam85.github.io/  → base must be '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
