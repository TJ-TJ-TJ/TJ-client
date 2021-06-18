var arr =[{
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
    path: '/order_pay', //订单支付页
    name: 'oder_pay',
    component: () => import(/* webpackChunkName: "order_pay" */ '../components/Orders/orderPay.vue')
  },
  {
    path: '/check_person', //选择入住人页
    name: 'check_person',
    component: () => import(/* webpackChunkName: "order_edit" */ '../components/Orders/Checkperson.vue')
  },
  {
    path: '/add_person', //添加入住人页
    name: 'add_person',
    component: () => import(/* webpackChunkName: "add_person" */ '../components/Orders/Addperson.vue')
  },
  {
    path: '/msg', //聊天私聊界面
    name: 'msg',
    component: () => import(/* webpackChunkName: "msg" */ '../components/Message/Message.vue')
  },
  {
    path: '/msg_list', //消息列表页
    name: 'msg_list',
    component: () => import(/* webpackChunkName: "msg_list"*/ '../components/Message/Msglist.vue')
  },
  {
    path: '/table', //tablebar底部导航
    name: 'table',
    component: () => import(/* webpackChunkName: "tablebar"*/ '../components/tableBar.vue')
  }]

  export default arr