import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //聊天对象的信息
    msg_info:{
      uid:"", //当前用户id
      sid:"", //聊天对象id
      m_id:"",//获取的消息列表的最后一页的m_id
      pageSize:'',//当前需要获取消息的页码
      uname:""//发消息的名称
    }
  },
  mutations: {
    update_msginfo(state,data){
      state.msg_info=data
    }
  },
  actions: {
  },
  modules: {
  }
})
