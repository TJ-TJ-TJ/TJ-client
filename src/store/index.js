import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      starDate:'',
      endDate:''
  },
  mutations: {
    hotelStarDate(state,starDate){
      state.starDate = starDate
    },
    hotelEndDate(state,endDate){
      state.endDare = endDate
    }
  },
  actions: {
  },
  modules: {
  }
})
