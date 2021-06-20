import Vue from "vue";
import VueRouter from "vue-router";
import Order from "./order"; //订单 及 消息模块的路由配置
import user from "./user"; //用户信息界面(user)
import details from '@/components/details'  //房屋详情页
Vue.use(VueRouter);


Vue.use(VueRouter)
const routes = [
  ...Order,
  ...user,
  { path: "/index", redirect: "/collects" },
    {
    path: '/table', //tablebar底部导航
    name: 'table',
    component: () => import(/* webpackChunkName: "tablebar"*/ '../components/tableBar.vue'),
  },
  {
    path: '/order',
    name: 'Order',   //订单主页面
    component: () => import(/* webpackChunkName: "order" */ '../components/Orders/index.vue')
  },
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Index/index.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Index/search.vue"),
  },
  {
    path: "/stay",
    name: "stay",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Index/homestay.vue"
      ),
  },
  {
    path: "/mapIndex",
    name: "mapIndex",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Index/mapIndex.vue"
      ),
  },
  {
    path: '/details',
    name: 'Detail',
    component: details
  },
  {
    path: "/city",
    name: "city",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Index/city.vue"),
  },
  {
    path: "/report",
    name: "photo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Index/report.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Index/user.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Collect/index.vue"),
    children: [
      {
        path: "/collects",
        name: "collects",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/Collect/modules/collects.vue"
          ),
      },
      {
        path: "/history",
        name: "history",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/Collect/modules/history.vue"
          ),
      },
    ],
  },
  // {path:'/form',name:'form',
  // component: () => import(/* webpackChunkName: "about" */ '../components/Index/form.vue')}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
    console.log(to , from);
    next()
    if(to.path=='/order_edit' || to.path=='/order_pay'){
     if(!window.localStorage.getItem('token')){
       return router.replace({path:'login'})
     }
    }
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
})
export default router;
