import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      starDate:'',
      endDate:'',
      dataDate:[],
      searchData:{},
      priceData:[],
      city:''
  },
  mutations: {
    // 时间开始
    hotelStarDate(state,starDate){
      state.starDate = starDate
    },
    // 时间结束
    hotelEndDate(state,endDate){
      state.endDate = endDate
    },
    // 时间毫秒
    hotDataDate(state,dataDate){
      state.dataDate = dataDate
    },
    // 搜索列
    searchData(state,searchData){
      state.searchData = searchData
    },
  //  价格
      priceData(state,priceData){
        state.priceData = priceData
      },
  //  城市
    cityData(state,city){
      state.city = city
    }
  },
  actions: {
  },
  modules: {
  }
})
