import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})



