import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    startDate:'',
    endDate:''
  },
  mutations:{
    hotDates(state,startDate){
      state.startDate = startDate
    },
    hotEndDates(state,endDate){
      state.endDate = endDate
    }
  },
  actions:{}
})
