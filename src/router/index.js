import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/order',
    name: 'Order',   //订单主页面
    component: () => import(/* webpackChunkName: "order" */ '../components/Orders/index.vue')
  },
  {
    path: '/order_edit', //订单编辑页
    name: 'oder_edit',
    component: () => import(/* webpackChunkName: "order_edit" */'../components/Orders/Orderedit.vue')
  },
  {
    path: '/order_detail', //订单详情页
    name: 'oder_detail',
    component: () => import(/* webpackChunkName: "order_deail" */ '../components/Orders/Orderdetail.vue')
  },
  {
    path: '/order_pay', //订单详情页
    name: 'oder_pay',
    component: () => import(/* webpackChunkName: "order_pay" */ '../components/Orders/orderPay.vue')
  },
  {
    path: '/check_person', //选择入住人
    name: 'check_person',
    component: () => import(/* webpackChunkName: "order_edit" */ '../components/Orders/Checkperson.vue')
  },
  {
    path: '/add_person', //添加入住人
    name: 'add_person',
    component: () => import(/* webpackChunkName: "add_person" */ '../components/Orders/Addperson.vue')
  },
  {
    path: '/msg', //聊天界面
    name: 'msg',
    // meta:{
    //   keepAlive:true   //默认缓存  当socket监测到有新的消息更新时 再重新加载
    // },
    component: () => import(/* webpackChunkName: "msg" */ '../components/Orders/Message.vue')
  },
  {
    path: '/msg_list', //消息列表
    name: 'msg_list',
    component: () => import(/* webpackChunkName: "msg_list"*/ '../components/Orders/Msglist.vue')
  },
  {
    path: '/map', //消息列表
    name: 'map',
    component: () => import(/* webpackChunkName: "msg_list"*/ '../components/Index/index(1).vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
