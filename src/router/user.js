var arr = [
    {
        path:'/setting',
        name:'setting',
        component: () => import(/* webpackChunkName: "user_setting" */ '../components/user/setting.vue')
    },
    {
        path:'/login',
        name:'login',
        component: () => import(/* webpackChunkName: "user_login" */ '../components/user/login.vue')
    },
    {
        path:'/editSelfData',
        name:'editSelfData',
        component: () => import(/* webpackChunkName: "user_edit" */ '../components/user/editSelfData.vue')
    }
]
export default arr