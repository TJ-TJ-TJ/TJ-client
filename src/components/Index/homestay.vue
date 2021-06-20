<template>
  <div class="homestay-Index">
    <!-- 搜索框 -->
    <van-search
      v-model="searchValue"
      show-action
      placeholder="搜索北京的景点、地标、房源"
      @click="searchLink"
    >
      <template #action>
        <div @click="cancalBtn">取消</div>
      </template>
      <template #left>
        <div class="bourn" @click="cityLink">
          <span>目的地</span>
          <br />
          <span class="city">{{$store.state.city.slice(0,2)}}</span>
        </div>
        <div class="search-time" @click="searchTimes">
          <span>住{{$store.state.starDate}}</span>
          <br />
          <span>离{{$store.state.endDate}}</span>
        </div>
      </template>
    </van-search>
    <!-- 条件查询栏 -->
    <div class="dropdown" id="dropDownRef" ref="dropDownRef">
      <van-dropdown-menu>
        <van-dropdown-item title="价格/钻级">
          <!-- 价格筛选 -->
          <div class="price-section">
            <!-- 价格筛选标题 -->
            <div class="section-title">
              <span v-if="maxPrice < 1000"
                >价格区间￥{{ minPrice }}-￥{{ maxPrice }}</span
              >
              <span v-else>价格区间￥{{ minPrice }}-不限</span>
              <van-slider
                v-model="value"
                range
                @change="sliderChange"
                :step="50"
                :min="0"
                :max="1050"
                bar-height="5px"
                active-color="#FF9645"
              />
              <!-- 价格区间选择 -->
              <div class="price-select">
                <!-- 价格tag标签选项栏 -->
                <van-row gutter="24" ref="valueRef1">
                  <van-col
                    span="6"
                    v-for="(item, index) in valueSelect1"
                    :key="index"
                  >
                    <van-tag
                      color="#F8F8F8"
                      v-if="item[0] !== 0"
                      @click="priceFirst(item)"
                      >￥{{ item[0] }}-{{ item[1] }}</van-tag
                    >
                    <van-tag color="#F8F8F8" v-else @click="priceSecond(item)"
                      >￥100以下</van-tag
                    >
                  </van-col>
                </van-row>
                <van-row gutter="24" ref="valueRef2">
                  <van-col
                    span="6"
                    v-for="(item, index) in valueSelect2"
                    :key="index"
                  >
                    <van-tag
                      color="#F8F8F8"
                      v-if="item[0] !== 1000"
                      @click="priceThirdly(item)"
                      >￥{{ item[0] }}-{{ item[1] }}</van-tag
                    >
                    <van-tag color="#F8F8F8" v-else @click="priceFourthly(item)"
                      >￥1000以上</van-tag
                    >
                  </van-col>
                </van-row>
              </div>
            </div>
            <div class="steel-grade">
              <div class="steel-title">
                <span class="steel-item">
                  钻级
                </span>
                <span class="steel-explain">
                  钻级说明
                </span>
              </div>
              <div class="steel-tag">
                <van-tag round type="primary">
                  <span>二钻</span><br />
                  <span>经济</span>
                </van-tag>
                <van-tag round type="primary">
                  <span>三钻</span><br />
                  <span>舒适</span>
                </van-tag>
                <van-tag round type="primary">
                  <span>四钻</span><br />
                  <span>豪华</span>
                </van-tag>
                <van-tag round type="primary">
                  <span>五钻</span><br />
                  <span>奢华</span>
                </van-tag>
              </div>
            </div>
            <div class="foot-base">
              <van-button round color="#F3F4F6" class="empty">清空</van-button>
              <van-button round color="#FF9645" class="examine"
                >查看房源</van-button
              >
            </div>
          </div>
        </van-dropdown-item>
        <!--  -->
        <van-dropdown-item v-model="value1" :options="option1" />
        <!-- 地区 -->
        <van-dropdown-item title="怀柔风景区"> </van-dropdown-item>

        <van-dropdown-item title="筛选"> </van-dropdown-item>
      </van-dropdown-menu>
      <!-- 滑动轮播 -->
      <div class="scroball">
        <ul>
          <li v-for="(item, index) in 20" :key="index">
            <van-tag round>连住优惠</van-tag>
          </li>
        </ul>
      </div>
    </div>
    <!-- 民宿列表 -->
    <!-- <v-touch
      @swipeup="upTouch"
      @swipedown="downTouch"
      style="touch-action: pan-y!important"
    > -->
    <div class="header-continer">
      <div class="header-stay" v-for="item in result" :key="item._id" @click="skipBtn(item._id)">
        <van-swipe :autoplay="0" @change="carRoll">
          <van-swipe-item v-for="(image, index) in item.swiper" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">
              {{ current + 1 }}/{{ item.swiper.length }}
            </div>
          </template>
        </van-swipe>
        <!-- <div class="header-comment"> -->
          <!-- <strong class="comment-grade">4.5分</strong> -->
          <!-- <span>十大打阿斯顿打撒阿三大苏打算</span> -->
        <!-- </div> -->
<!--        <div class="header-moods">-->
<!--          <span>怀柔风景区人气榜 No.1</span>-->
<!--        </div>-->
        <div class="header-user">
          <van-image
            round
            width="2rem"
            height="2rem"
            src="https://pic.tujia.com/upload/customeravatar/day_190818/thumb/201908182139522553_90_90.jpg"
          />
          <van-icon name="like" color="#FFFFFF" size="1.5rem">
            <span>111</span>
          </van-icon>
          <van-icon name="chat" color="#FFFFFF" size="1.5rem">
            <span>111</span>
          </van-icon>
        </div>
        <div class="foot-comment">
          <div class="foot-title">
            <van-tag color="#3F4954">近圈中心1,2公里</van-tag>
            <span class="aaa">{{ item.params.attr }} · {{item.params.house}}居{{item.params.bed}}床{{item.params.person_count}}人</span>
          </div>
          <div class="foot-msg">
            <span>
            {{ item.r_name }}
            </span>
          </div>
          <div class="foot-tag">
            <van-tag type="primary" v-for="(i,index) in item.label.base" :key="index">{{i}}</van-tag>
          </div>
          <div class="foot-price">
            <div class="price-num">
              <span class="price">￥{{item.new_price}}</span>
              <span class="price-unit">/晚</span>
              <span class="price-original" v-if="item.price!=item.new_price">￥{{item.price}}</span>
              <van-tag round color="#FD5858" v-if="item.price!=item.new_price">{{parseInt(item.price/(item.price-item.new_price))}}.0折，连住优惠</van-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </v-touch> -->
    <!-- 时间选择组件 -->
    <calender ref="calenderRef"/>
  </div>
</template>

<script>
import calender from './calender.vue'
export default {
  data() {
    return {
      // 搜索内容
      searchValue: "",
      // 条件筛选
      value1: 0,
      switch1: false,
      switch2: false,
      //   条件筛选数据
      option1: [
        { text: "推荐排序", value: 0 },
        { text: "距离近→远", value: 1 },
        { text: "好评优先", value: 2 },
        { text: "点评数多→少", value: 3 },
        { text: "低价优先", value: 4 },
        { text: "高价优先", value: 5 },
      ],
      // 价格滑条
      value: [0, 150],
      minPrice: 0,
      maxPrice: 150,
      // 价格区间
      valueSelect1: [
        [0, 100],
        [100, 200],
        [200, 300],
        [300, 400],
      ],
      valueSelect2: [
        [400, 600],
        [600, 800],
        [800, 1000],
        [1000, 1050],
      ],
      // 轮播图片
      images: [
      ],
      // 轮播图指示器
      current: 0,
      // 入住
      // starDate:'',
      // 离店
      // endDate:''
      result:{}
    };
  },
  components:{
    calender
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll, true);  
    // 监听（绑定）滚轮 滚动事件
  },
  created() {
    this.getStayList()
  },
  updated(){
    this.starDate = this.$refs.calenderRef.checkDate
    console.log('刷新')
  },
  methods: {
    // 页面跳转
    skipBtn(id){
      this.$router.push('/details?'+id)
    },
    // 返回
    cancalBtn(){
      this.$router.push('/')
    },
    // 获取数据请求
    async getStayList(){
      const {data:res} = await this.$axios.post('search/find',{
        "wd":this.$store.state.city.slice(0,1),
        "page": 1,
        "count": 10,
        "minPrice": this.$store.state.searchData.minPrice || 0,
        "maxPrice": this.$store.state.searchData.maxPrice || 2000,
        "star": [1,2,3,4],
      })
      this.result=res.result
      console.log(this.result)
    },
    // 选择时间
    searchTimes(){
      console.log(this.$store.state.starDate)
      this.$refs.calenderRef._data.show = true
      console.log(this.$refs.calenderRef)

    },
    // 搜索跳转
    searchLink(){
      this.$router.push('/search')
    },
    // 监听滚动
    handleScroll(){
            // 页面滚动距顶部距离
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                      document.body.scrollTop
                      // console.log(scrollTop)
            var scroll = scrollTop - this.i;
            this.i = scrollTop;
            if(scroll<0){
                // console.log()
                this.$refs.dropDownRef.style.display = 'block'
                // document.getElementById('dropDownRef').style.transform = 'translateY(0)'
                // this.$refs.dropDownRef.style.transform = 'translateY(0)'
                
            }else if(scroll>0 && scrollTop>80){
                // console.log(this.$refs.dropDownRef)
                 this.$refs.dropDownRef.style.display = 'none'
                // document.getElementById('dropDownRef').style.transform = 'translateY(-100px)'
                //  this.$refs.dropDownRef.style.transform = 'translateY(-100px)'
                //  this.$refs.dropDownRef.style.top = '-7vh'
                //  this.$refs.dropDownRef.transition = '2s'
                // console.log(this.$refs.dropDownRef.style)

            }
        },
    //目的地跳转
    cityLink(){
      this.$router.push('/city')
    },
    // 价格滑块控制
    sliderChange(value) {
      let arr = [...value];
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
      if (value[1] > 1000) {
        this.maxPrice = "不限";
      }
    },
    // 价格区间选择
    priceFirst(item) {
      let arr = [...item];
      this.value = arr;
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
    },
    priceSecond(item) {
      let arr = [...item];
      this.value = arr;
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
    },
    priceThirdly(item) {
      let arr = [...item];
      this.value = arr;
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
    },
    priceFourthly(item) {
      let arr = [...item];
      this.value = arr;
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
    },
    // 清空按钮
    emptyBtn() {
      this.value = [0, 1050];
      this.minPrice = 0;
      this.maxPrice = "不限";
    },
    // touch上滑和下滑事件
    // upTouch() {
    //   console.log("1");
    // },
    // downTouch() {
    //   console.log("2");
    // },
    // 轮播图指示器
    carRoll(index) {
      this.current = index;
    },
  },
};
</script>

<style scope>
.homestay-Index .van-search {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
.homestay-Index .bourn {
  background-color: #f7f8fa;
  margin-right: 1vw;
}
.homestay-Index .bourn span:nth-child(1) {
  font-size: 10px;
  color: #999;
  line-height: 14px;
}
.homestay-Index .bourn .city {
  font-family: PingFangSC-Medium;
  font-weight: 500;
  font-size: 12px;
  padding-right: 2px;
  color: #333;
  margin-left: 1vw;
  text-align: center;
}
.homestay-Index .search-time {
  background-color: #f7f8fa;
  margin-right: 1vw;
  width: 66px;
  border-right: 1px solid #fff;
  color: #999;
  font-size: 10px;
  text-align: center;
}
.homestay-Index .date-continer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 5vh;
}
.homestay-Index .date-continer .checkDate {
  margin-left: 13vw;
  font-size: 21px;
  color: #999;
}
.homestay-Index .date-continer .sumDate {
  content: "";
  height: 1px;
  color: #ff9645;
  -webkit-font-smoothing: antialiased;
}
.homestay-Index .date-continer .leaveDate {
  margin-right: 13vw;
  font-size: 21px;
  color: #999;
}
.homestay-Index .dropdown {
  position: fixed;
  top: 7vh;
  width: 100%;
  z-index: 1;

  /* 过渡 */
  transition: transform .3s;
  
}

.homestay-Index .price-section {
  width: 100%;
  height: 50vh;
  background-color: #fff;
}
.homestay-Index .price-select {
  float: left;
  width: 84vw;
  float: left;
  margin-left: 3vw;
  height: 10vh;
  margin-top: 3vh;
}
.homestay-Index .price-select .van-row .van-col .van-tag {
  width: 100%;
  height: 3vh;
  display: inline-flex;
  justify-content: center;
  /*line-height: 3vh;*/
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #333;
  margin-top: 2vh;
  font-weight: 500;
  padding: 1px;
    /* . 文本强制不合法，不换行 */
white-space: nowrap; 
/* 2. 文本溢出显示省略号 */
text-overflow:ellipsis;
/* 3. 溢出部分隐藏 */
overflow:hidden;
}
.homestay-Index .price-section {
  width: 84vw;
  margin-left: 3vw;
  float: left;
  margin-top: 2vh;
}
.homestay-Index .price-section span {
  font-family: PingFangSC-Medium;
  font-weight: 500;
  font-size: 10px;
  color: #333;
  padding: 0 0 12px 0;
}
.homestay-Index .van-slider {
  width: 85vw;
  margin-left: 5vw;
  margin-top: 2vh;
}
.homestay-Index .section-title span {
  margin-left: 3vw;
}
.homestay-Index .steel-grade {
  width: 90vw;
  height: 20vh;
  margin-top: 20vh;
  margin-left: 3vw;
}
.homestay-Index .steel-grade .steel-title {
  display: flex;
  justify-content: space-between;
}
.homestay-Index .steel-grade .steel-title .steel-item {
  font-family: PingFangSC-Medium;
  font-weight: 500;
  font-size: 14px;
  color: #333;
}
.homestay-Index .steel-grade .steel-title .steel-explain {
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #999;
  letter-spacing: 0;
  text-align: right;
  margin-right: 4px;
}
.homestay-Index .steel-grade .steel-tag {
  display: flex;
  flex-wrap: wrap;
}
.homestay-Index .steel-grade .steel-tag .van-tag {
  margin-top: 2vh;
  width: 19vw;
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  color: #333;
  height: 5vh;
  text-align: center;
  background: #f8f8f8;
  border-radius: 25px;
  margin-left: 2vw;
  line-height: 3vh;
}
.homestay-Index .steel-grade .steel-tag .van-tag span {
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  color: #333;
}
.homestay-Index .foot-base {
  width: 100%;
  height: 7vh;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #f3f6f9;
  box-shadow: 0px 50px 50px 5px #000;
}
.homestay-Index .foot-base .empty {
  display: inline-block;
  overflow: hidden;
  margin-left: 20px;
  width: 22.66667vw;
  height: 5vh;
  text-align: center;
  line-height: 7vh;
  background: #f3f4f6;
  border-radius: 20px;
  font-family: PingFangSC-Regular;
  font-size: 15px;
  margin-top: 1vh;
  padding: 9px 0px 0px 0px;
}
.homestay-Index .foot-base .examine {
  margin-left: 10px;
  width: 64vw;
  height: 40px;
  border-radius: 20px;
  font-family: Helvetica;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  padding: 9px 0px 0px 0px;
}
.homestay-Index .scroball {
  width: 100%;
  overflow: auto;
  height: 7vh;
  position: fixed;
  top: 60;
  line-height: 6vh;
  background-color: #F5F8FA;
}
.homestay-Index .scroball ul {
  white-space: nowrap;
}
.homestay-Index .scroball ul li {
  display: inline-block;
  margin-left: 1vw;
}
.homestay-Index .scroball ul li .van-tag {
  box-sizing: content-box;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0);
  display: inline-block;
  margin-right: 10px;
  padding: 0 12px;
  height: 4vh;
  line-height: 3vh;
  background: #fff;
  box-shadow: 0 2px 14px 0 rgba(0, 2, 4, 0.08);
  border-radius: 13px;
  background-size: cover;
}
.homestay-Index .header-continer {
  width: 100%;
  float:left;
  margin-top: 20vh;
  background-color: #F2F5F7;
}
.homestay-Index .header-continer .header-stay {
  margin-bottom: 50px;
  width: 90%;
  margin-left: 5%;
  position: relative;
  z-index: 0;

}
.homestay-Index .header-continer .header-stay .van-swipe {
  height: 34vh;
  max-height: 85vh;
}
.homestay-Index .header-continer .header-stay .van-swipe .van-swipe-item img {
  width: 100%;
}
.homestay-Index .header-continer .header-stay .header-comment {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  height: 17px;
  width: 40vw;
  padding: 1px 8px 0;
  position: absolute;
  bottom: 34rem;
  left: 4vw;
}
.homestay-Index .header-continer .header-stay .header-comment .comment-grade {
  font-size: 10px;
  display: inline-block;
  width: 9vw;
  border-right: 1px solid #dadada;
}
.homestay-Index .header-continer .header-stay .header-comment span {
  font-size: 10px;
  display: inline-block;
  margin-left: 5px;
  padding-left: 5px;
  position: relative;
  color: #666;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.homestay-Index .header-continer .header-stay .header-moods {
  display: flex;
  align-items: center;
  background-color: #ff9645;
  border-radius: 10px;
  height: 17px;
  width: 40vw;
  padding: 1px 8px 0;
  justify-content: center;
  position: absolute;
  top: 2vh;
  left: 4vw;
}
.homestay-Index .header-continer .header-stay .header-moods span {
  display: inline-block;
  font-family: PingFangSC-Medium;
  line-height: 17px;
  font-size: 10px;
  font-weight: 500;
  vertical-align: top;
  color: #fff;
}
.homestay-Index .header-continer .header-stay .header-user {
  position: absolute;
  top: 2vh;
  right: 1vw;
  width: 10vw;
  height: 20vh;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.homestay-Index .header-continer .header-stay .header-user .van-icon {
  margin-top: 2vh;
}
.homestay-Index .header-continer .header-stay .header-user .van-icon span {
  font-size: 10px;
  display: block;
  padding-bottom: 0;
  text-align: center;
}
.homestay-Index .custom-indicator {
  position: absolute;
  right: 3vw;
  bottom: 2rem;
  padding: 2px 10px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #fff;
}

.homestay-Index .foot-comment {
  width: 100%;
  height: 15vh;
  margin-top: 1vh;
  /* background-color: red; */
}

.homestay-Index .foot-title {
  width: 100%;
  height: 18px;
/*. 文本强制不合法，不换行*/
white-space: nowrap;
  /*2. 文本溢出显示省略号*/
  text-overflow:ellipsis;
  /*3. 溢出部分隐藏*/
  overflow:hidden;
  /*background-color: red;*/
}

.homestay-Index .foot-title .van-tag {
  float: left;
  margin-right: 3px;
  font-size: 10px;

}

.homestay-Index .foot-title .aaa {
  float: left;
  font-size: 12px;
  white-space: nowrap;
  color: #666;
  line-height: normal;
  font-weight: 400;
}

.homestay-Index .foot-msg {
  max-height: 44px;
  width: 100%;
  overflow: hidden;
  line-height: 22px;
  font-size: 18px;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: PingFangSC-Medium, Helvetica Neue, Arial, sans-serif;
  font-weight: 500;
}

.homestay-Index .foot-tag {
  margin-top: 1vh;
}

.homestay-Index .foot-tag .van-tag {
  float: left;
  margin-right: 1vw;
  font-size: 9px;
}

.homestay-Index .foot-price {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 4vh;
  /* background-color: red; */
}

.homestay-Index .foot-price .price-num .price {
  font-size: 20px;
  /* position: relative;
  top: 1px; */
  color: #ff9645;
}

.homestay-Index .foot-price .price-num .price-unit {
  font-size: 12px;
  color: #ff9645;
}

.homestay-Index .price-original{
      margin-left: 5px;
    display: inline-block;
    text-decoration: line-through;
    font-family: PingFangSC-Medium,Helvetica Neue,Arial,sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #999;
}

.homestay-Index .van-tag{
  margin-left: 5px;
}
</style>
