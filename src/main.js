import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vant from "vant";
import "vant/lib/index.css";
import VueSocketIO from "vue-socket.io";
import ClientSocketIO from "socket.io-client";
import axios from "axios";
import TableBar from "./components/tableBar.vue"; //全局的底部tablebar组件

import { Lazyload } from "vant";
import { List } from "vant";
// vue-touch
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });
Vue.component("table-bar", TableBar); // 直接使用即可 <table-bar></table-bar>
Vue.use(Vant);
Vue.use(List);
Vue.use(Lazyload);
axios.defaults.baseURL = "http://tj.testw.top/v1";

// axios.defaults.headers.common["token"] =
//   "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjYwYzBmMzIzY2U1NTAwMDA4MDAwNDdiMCIsImlzTG9naW4iOnRydWUsImxvZ2luVHlwZSI6Im1haWwifSwiZXhwIjowLCJpYXQiOjE2MjQxMDU4Mzh9.U2E3KnH1MR8u1wbQvvmGjmB4s7b5ZCZz4J49kw_zr9AIv1p7vyG28nkDeobRPgsMwmiavVe6PrLsooFhETkkbskXwGn-eTHsb_fDJP5izANCXhi-iTy352d1GWNyN-pvLSxPlXE_clW3qFuARyUJFNvJ5V3gtMvhlJeq48cVTGo";
Vue.prototype.$axios = axios;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: ClientSocketIO.connect("http://localhost:9000", {
      autoConnect: false,
      transports: ["websocket"],
      auth: {
        imgPath: 1,
        uid: sessionStorage.getItem("uid") || 1, //用户的uid
        uname: sessionStorage.getItem("username") || 1,
      },
    }), //连接服务端
  })
);

//获取年月日 格式 ` 2020-01-01`
Vue.prototype.$getDate = () => {
  let now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  m >= 10 ? "" : (m = "0" + (now.getMonth() + 1));
  d >= 10 ? "" : (d = "0" + now.getDate());
  return `${y}-${m}-${d}`;
};

//获取时间    格式 ` 00:00`
Vue.prototype.$getTime = () => {
  let now = new Date();
  let hh = now.getHours();
  let mm = now.getMinutes();
  // hh == 00 ? hh = 24 : ''
  hh >= 10 ? "" : (hh = "0" + hh);
  mm >= 10 ? "" : (mm = "0" + mm);
  return `${hh}:${mm}`;
};

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
