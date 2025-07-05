import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Опции CSS-модулей
      scopeBehaviour: 'local', // или 'global'
      generateScopedName: '[name]__[local]___[hash:base64:5]', // опционально
      // Другие настройки...
    },
  },
})
