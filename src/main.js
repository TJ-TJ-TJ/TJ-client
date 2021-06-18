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
// 高德离线地图
// import VueAMap from 'vue-amap';   //引入高德


// Vue.use(VueAMap)
Vue.use(List);
Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://8.131.61.141:3000/v1'
axios.defaults.baseURL = 'http://tj.testw.top/v1'
// VueAMap.initAMapApiLoader({
//   key: '3cb5838683de37cca0d00bdcd3d4c6ad',
//   //插件集合
//   plugin: [
//     'AMap.Geolocation',  //定位空间，用来获取和展示用户主机所在的经纬度位置
//     ' AMap.Autocomplete ',  //输入提示插件
//     ' AMap.PlaceSearch ', //POI搜索插件
//     ' AMap.Scale ',   //右下角缩略图插件，比例尺
//     ' AMap.OverView ', //地图鹰眼插件
//     ' AMap.ToolBar ',  //地图工具条
//     ' AMap.MapType ',  //类别切换空间，实现默认图层与卫星图，实施交通层之间切换的控制
//     ' AMap.PolyEditor ', //编辑 折线多边形
//     ' AMap.CircleEditor ',
//     "AMap.Geocoder"     //地图编码
//   ]
// });

// VueAMap.initAMapApiLoader({
//   // 高德Key
//   key:'3cb5838683de37cca0d00bdcd3d4c6ad',
//   // 插件集合(插件按需引入)
//   plugin:['AMap.Autocomplete','AMap.PlaceSearch','AMap.Scale','AMap.OverView','AMap.ToolBar','AMap.MapType','AMap.PokyEditor','AMap.CircleEditor','AMap.MarkerClusterer'],
//   v: '1.4.4',
//   uiVersion: '1.0'//ui版本
// })

Vue.prototype.$axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
