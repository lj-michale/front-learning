import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import mockServer from 'vite-plugin-mock-server'
import { viteMockServe } from "vite-plugin-mock"
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
    vue(),
    viteMockServe({
        mockPath: './mock', // mock文件所在文件夹
        localEnabled: true, // 是否应用于本地
        prodEnabled: false, // 是否应用于生产
        supportTs: true, // 打开后 可以读取 ts 文件模块 请注意 打开后将无法监视.js 文件
        watchFiles: true, // 监视文件更改 这样更改mock的时候，不需要重新启动编译
      }
    )
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  base: './', // 设置打包路径
  server: {
    host: 'localhost', // 服务启动地址 默认： '127.0.0.1'
    port: 3001, // 服务启动端口 默认值： 3001
    https: false,
    open: true, // 启动时打开浏览器
    // 设置代理，根据我们项目实际情况配置
    proxy: { // 跨域代理
      '/api': { // 请求接口，/api 是替换关键字，会替换api/* 目录下的请求接口函数中的url地址然后进行拼接
        target: 'http://127.0.0.1:8089/api',  // 实际请求的服务器地址 上面的 “/api” 在axios里就是指向这个实际的地址
        changeOrigin: true, // 是否允许跨域
        ws: false,  // webStock 请求
        rewrite: (path) => path.replace(/^\/api/, '') // 处理替换的函数 api是替换的关键字
      },
      '/han': {  // 这是第二个代理地址，和上面的是一样的
        target: 'https://api.vvhan.com/api/',
        changeOrigin: true, // 是否允许跨域
        ws: false,
        rewrite: (path) => path.replace(/^\/han/, '')
      }
    }
  },
  build: {
  },
})
