import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    startDate:'',
    endDate:''
  },
  mutations:{
    hotelStarDate(state,startDate){
      state.startDate = startDate
    },
    hotelEndDate(state,endDate){
      state.endDate = endDate
    }
  },
  actions:{}
})
