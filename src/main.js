import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar,Tab, Tabs,Button,Badge,Icon } from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(Badge)
Vue.use(NavBar)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Button);
Vue.use(Icon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
