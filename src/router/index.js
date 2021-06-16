import Vue from 'vue'
import VueRouter from 'vue-router'
import details from '@/components/details'
// import map from "@/components/details/map";

Vue.use(VueRouter)

const routes = [
  {
    path: '/details',
    name: 'Detail',
    component: details
    
    
  },
  // {
  //   path: '/map',
  //   name: 'Dtail',
  //   component: map
    
    
  // },

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
