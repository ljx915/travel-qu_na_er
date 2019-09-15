module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/travel-qu_na_er/'
  : './',
  // publicPath为project-name，根目录地址为上传的地址
  devServer: {
    port: 8081,     // 更改端口
    proxy: {
      '/api':{
        target: 'http://localhost:8081',
        changeOrigin:true,
        pathRewrite: {
            '^/api': '/mock/'
        }
      }
    }
  }
}