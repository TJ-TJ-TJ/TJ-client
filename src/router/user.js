var arr = [
    {
        path:'/setting',
        name:'setting',
        component: () => import(/* webpackChunkName: "user" */ '../components/user/setting.vue')
    },
    {
        path:'/login',
        name:'login',
        component: () => import(/* webpackChunkName: "user" */ '../components/user/login.vue')
    },
    {
        path:'/editSelfData',
        name:'editSelfData',
        component: () => import(/* webpackChunkName: "user" */ '../components/user/editSelfData.vue')
    }
]
export default arr