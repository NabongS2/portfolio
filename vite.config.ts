import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // 빌드할 때만 github 리포지토리 이름(/portfolio/)을 base로 사용하고, 로컬에서는 '/' 사용!
  base: command === 'build' ? '/portfolio/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))