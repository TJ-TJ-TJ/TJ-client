import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://tj.testw.top/v1'
axios.defaults.validateStatus = status => true
Vue.prototype.$axios = axios


Vue.config.productionTip = false
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjYwYzBlZDVjY2U1NTAwMDA4MDAwNDdhOSIsImlzTG9naW4iOnRydWUsImxvZ2luVHlwZSI6InBob25lIn0sImV4cCI6MTYyNDg4OTQ0OSwiaWF0IjoxNjI0Mjg0NjQ5fQ.JJSijr3FbK5MsnJTeZMhwUwGE3ITL3mIeCwAPEbr59pUMDUT8SX20uhHYXL1zGI0Mh442YD5Mj8CLAfNUxCa1kEGlJEN4MBKr9nJVIMl43YNHSmvaYp0gXIg70pgLvz3oX9SiwE2OVcqYCTF7iHxUUsRy-A5yjfPRVBXfF9b8qA'
  return config;
}, function (error) {
  console.log(error, '-------------error 全局响应烂贱妾')
  // 对请求错误做些什么
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  if(res.data.code==408){
    Toast.fail('登录信息已失效,请重新登录')
    setTimeout(_=>{
      router.push('/login')
      throw '错误'
    },2000)
  }
  return res

}, function (error) {
  // 对响应错误做点什么
  console.log('我是响应拦截器 失败', error)
  // return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
