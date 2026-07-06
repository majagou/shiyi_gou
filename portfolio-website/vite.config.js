import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.VITE_DEPLOY_TARGET === 'github' ? '/shiyi_gou/' : '/',
  plugins: [react(), tailwindcss()],
})