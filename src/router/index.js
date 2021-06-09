import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/order',
    name: 'Order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order" */ '../components/Orders/index.vue')
  },
  {
    path: '/order_edit',
    name: 'oder_erit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order_edit" */ '../components/Orders/OrderEdit.vue')
  },
  {
    path: '/msg',
    name: 'msg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order_edit" */ '../components/Orders/Message.vue')
  },
]
// path: '/about',
// name: 'About',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
