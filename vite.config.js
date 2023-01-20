import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/ts/app.tsx',
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'resources/ts/') },
    ],
  },
})
