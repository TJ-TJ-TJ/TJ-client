import Vue from 'vue'

const routes = [
//获取信息页
  {
    path:'/user',
    name:'user',
    component: () => import(/* webpackChunkName: "user" */ '../components/user/user.vue')
  },
//编辑个人信息页
  {
    path:'/editSelfData',
    name:'editSelfData',
    component: () => import(/* webpackChunkName: "user" */ '../components/user/editSelfData.vue')
  },
  //设置页面
  {
    path:'/setting',
    name:'setting',
    component: () => import(/* webpackChunkName: "user" */ '../components/user/setting.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
