import { defineConfig, formatPostcssSourceMap } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root : './',
  resolve : fileURLToPath(new URL('.src', import.meta.url))

})
