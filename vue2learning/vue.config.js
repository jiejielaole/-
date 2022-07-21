const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 暂时关闭代码格式检测
  // 配置反向代理
  devServer: {
    proxy: {
      // "/api": {
      //   target: "https://i.maoyan.com",
      //   changeOrigin: true
      // },
      "/jiejie": {
        target: "https://i.maoyan.com",
        changeOrigin: true,
        pathRewrite: {
          '^/jiejie': ''
        }
      }
    }
  }
})
