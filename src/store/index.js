import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      starDate:'',
      endDate:'',
      dataDate:[],
  },
  mutations: {
    hotelStarDate(state,starDate){
      state.starDate = starDate
    },
    hotelEndDate(state,endDate){
      state.endDate = endDate
    },
    hotDataDate(state,dataDate){
      state.dataDate = dataDate
    }
  },
  actions: {
  },
  modules: {
  }
})
