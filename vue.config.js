module.exports = {
    // 服务器设置
    devServer: {
        port: 9999,
        host: '0.0.0.0',
        contentBase: './dist',
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true,
        // 服务器代理
        proxy: {
            '/api': { // 这边的/api是配置默认请求的api ，这还需要在axios实例对象中设置
                target: 'XXX', //服务器代理的baseUrl
                ws: false,
                changeOrigin: true,
                pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
                    '^/api': ''
                }
            },
        },
    }
}