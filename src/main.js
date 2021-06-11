import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入axios
import axios from 'axios'
import { Lazyload } from 'vant';
import { List } from 'vant';
// vue-touch
import VueTouch from "vue-touch";
Vue.use(VueTouch, {name: "v-touch"});

Vue.use(List);
Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false

axios.defaults.baseURL = '/'

Vue.prototype.$http = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
