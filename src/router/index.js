import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index/index.vue'
import Search from '../components/Index/search.vue'
import Stay from '../components/Index/homestay.vue'
import mapIndex from '../components/Index/mapIndex.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Index},
  {path:'/search',component:Search},
  {path:'/stay',component:Stay},
  {path:'/mapIndex',component:mapIndex}
]

const router = new VueRouter({
  routes
})

export default router
