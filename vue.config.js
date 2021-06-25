
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  
  devServer: {
    open: true,//自动打开浏览器
    disableHostCheck: true,
    // proxy: 'http://localhost:9000',
    /*       proxy: {
            "/": {
              target: http://localhost:9000,
              changeOrigin: true, // 是否改变域名
              ws: true
              // pathRewrite: {
              //   // 路径重写
              //   "/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
              // }
            }
          }
     */
  },

  chainWebpack: config => {
   
    //production：发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
        config.entry('app').clear().add('./src/main-prod.js') //配置打包入口文件
        //使用externals设置排除项，并在index.html中引入外部CDN资源
        config.set('externals', {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          vant: 'vant',
          axios: 'axios',
          vuex:'Vuex',
          'core-js':'CoreJs'
        })
      }),
      
      //development：开发模式
      config.when(process.env.NODE_ENV === 'development', config => {
        config.entry('app').clear().add('./src/main-deve.js') //配置打包入口文件
        //使用externals设置排除项，并在index.html中引入外部CDN资源
        
        config.set('externals', {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          vant: 'vant',
          axios: 'axios',
          vuex:'Vuex',
          'core-js':'CoreJs'
        })
      })
     
  },
}
