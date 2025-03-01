import { fileURLToPath, URL } from 'node:url'
import {viteMockServe} from 'vite-plugin-mock'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // svg图标
    createSvgIconsPlugin({
      // 扫描的文件夹路径
      iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
      // svg组件名称
      symbolId: 'icon-[name]',
    }),
    viteMockServe()
  ],
  //解析less
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/global.less";',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  
})
