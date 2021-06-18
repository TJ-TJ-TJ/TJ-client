import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //聊天对象的信息
    msg_info:{
      newarr:[] // 携带的基本信息
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
