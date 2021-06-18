import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../components/Index/index.vue'
// import Search from '../components/Index/search.vue'
// import Stay from '../components/Index/homestay.vue'
// import mapIndex from '../components/Index/mapIndex.vue'
// import city from '../components/Index/city.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',name:'index',
  component: () => import(/* webpackChunkName: "about" */ '../components/Index/index.vue')},
  {path:'/search',name:'search',
  component: () => import(/* webpackChunkName: "about" */ '../components/Index/search.vue')},
  {path:'/stay',name:'stay',
  component: () => import(/* webpackChunkName: "about" */ '../components/Index/homestay.vue')},
  {path:'/mapIndex',name:'mapIndex',
  component: () => import(/* webpackChunkName: "about" */ '../components/Index/mapIndex.vue')},
  {path:'/city',name:'city',
  component: () => import(/* webpackChunkName: "about" */ '../components/Index/city.vue')},
  {path:'/report',name:'photo',
  component: () => import(/* webpackChunkName: "about" */ '../components/Index/report.vue')},
  {path:'/user',name:'user',
  component: () => import(/* webpackChunkName: "about" */ '../components/Index/user.vue')},
  // {path:'/form',name:'form',
  // component: () => import(/* webpackChunkName: "about" */ '../components/Index/form.vue')}
]

const router = new VueRouter({
  routes
})

export default router
