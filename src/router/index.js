import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index/index.vue'
import Search from '../components/Index/search.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Index},
  {path:'/search',component:Search}
]

const router = new VueRouter({
  routes
})

export default router
