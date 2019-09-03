module.exports = {
  devServer: {
    port: 8080,     // 更改端口
    proxy: {
      '/api':{
        target: 'http://localhost:8080',
        pathRewrite: {
            '^/api': '/mock/'
        }
      }
    }
  }
}