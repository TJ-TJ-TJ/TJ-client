import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg_info:{//私聊对象的信息 格式  默认是客服的信息 从消息列表等地方跳转时需重新赋值传参
      be:{
        uid:1234,
        head_img:'http://localhost:9000/images/客服头像.jpg',
        uname:'阿达萨达三大'
      },//聊天对方的基本信息 头像 名称 id
      msgArr:[], //携带过去的最新的15条消息 
      sid:'',// 聊天对方的id
      uid:"1", //用户的uid
    },
    starDate: "",
    endDate: "",
    dataDate: [],
    searchData: {},
    priceData: [],
    city: "",
    startDate:'',
    endDate:''
  },
  mutations: {
    update_msginfo(state, data) {
      state.msg_info = data;
    },
    // 时间开始
    hotelStarDate(state, starDate) {
      state.starDate = starDate;
    },
    // 时间结束
    hotelEndDate(state, endDate) {
      state.endDate = endDate;
    },
    // 时间毫秒
    hotDataDate(state, dataDate) {
      state.dataDate = dataDate;
    },
    // 搜索列
    searchData(state, searchData) {
      state.searchData = searchData;
    },
    //  价格
    priceData(state, priceData) {
      state.priceData = priceData;
    },
    //  城市
    cityData(state, city) {
      state.city = city;
    },
    hotDate(state,startDate){
      state.startDate = startDate
    },
    hotEndDate(state,endDate){
      state.endDate = endDate
    }
  },
  actions: {},
  modules: {},
});