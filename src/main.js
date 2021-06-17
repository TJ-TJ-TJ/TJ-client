import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueSocketIO from 'vue-socket.io'
import ClientSocketIO from 'socket.io-client'
import axios from 'axios'
Vue.use(Vant);
Vue.prototype.$axios=axios
Vue.use(new VueSocketIO({
  debug: true,
  connection: ClientSocketIO.connect('http://localhost:9000',{
    autoConnect: false,
    transports: ['websocket'],
    auth: {
      imgPath: 1,
      uid: 1,
      uname:1
    }
  }), //连接服务端
}))
//获取年月日 格式 ` 2020-01-01`  
Vue.prototype.$getDate = () => {
  let now = new Date()
  let y = now.getFullYear()
  let m = now.getMonth() + 1
  let d = now.getDate()
  m >= 10 ? '' : m = '0' + (now.getMonth() + 1)
  d >= 10 ? '' : d = '0' + now.getDate()
  return `${y}-${m}-${d}`
}

//获取时间    格式 ` 00:00`
Vue.prototype.$getTime = () => {
  let now = new Date()
  let hh = now.getHours()
  let mm = now.getMinutes()
  // hh == 00 ? hh = 24 : ''
  hh >= 10 ? '' : hh = '0' + hh
  mm >= 10 ? '' : mm = '0' + mm
  return `${hh}:${mm}`
}

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
