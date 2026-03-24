import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // 将 SCSS 直接作为输入
        style: path.resolve(__dirname, 'lib/style.scss')
      },
      output: {
        // 这样会生成 style.css
        assetFileNames: 'style.css',
        // 这里的 entry 只是为了满足 Vite 必须有 JS 的要求
        entryFileNames: 'ignore-this.js'
      }
    }
  }
});