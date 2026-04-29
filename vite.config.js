import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        principles: resolve(__dirname, 'principles.html'),
        taxonomy: resolve(__dirname, 'taxonomy.html'),
        'case-law': resolve(__dirname, 'case-law.html'),
        amendments: resolve(__dirname, 'amendments.html'),
      },
    },
  },
})
