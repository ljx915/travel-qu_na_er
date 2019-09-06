module.exports = {
  devServer: {
    port: 8081,     // 更改端口
    proxy: {
      '/api':{
        target: 'http://localhost:8081',
        pathRewrite: {
            '^/api': '/mock/'
        }
      }
    }
  }
}