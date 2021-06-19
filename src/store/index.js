import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    startDate:'',
    endDate:''
  },
  mutations:{
    hotDate(state,startDate){
      state.startDate = startDate
    },
    hotEndDate(state,endDate){
      state.endDate = endDate
    }
  },
  actions:{}
})
