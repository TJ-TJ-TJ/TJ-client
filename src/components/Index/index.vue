<template>
  <div class="Index-view">
    <!-- 头部标题 -->
    <div class="test-scroll-wrap">
<div class="headerTitle">
      <span class="titleLogo">途家民宿</span>
      <!-- <div>
        <van-icon name="wap-nav" size="30" />
      </div> -->
    </div>
    <!-- 背景图 -->
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator" ref="indecatorRef">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </template>
    </van-swipe>
    <!-- 搜索订单卡片 -->
    <div class="cardSearch">
      <van-cell-group>
        <van-cell class="current-location">
          <div class="current-city">
            <!-- 定位地点 -->
            <span>
              {{local}}
            </span>
          </div>
          <!-- 定位按钮 -->
          <div class="currentBtn">
            <span @click="getLocation()">
              我的位置
            </span>
          </div>
        </van-cell>
      </van-cell-group>
      <!-- 选择日期 -->
      <van-cell-group class="option-date">
        <van-cell @click="show = true">
          <div class="option-dateDiv">
            <span>入住</span>
            <span class="star-date">{{ starDate }}</span>
          </div>
          <div>
            <span class="allTime">共{{ putDate }}晚</span>
          </div>
          <div>
            <span>离店</span>
            <span class="end-date">{{ endDate }}</span>
          </div>
        </van-cell>
        <!-- 日期选择 -->
        <van-calendar
          color="#FF9645"
          v-model="show"
          type="range"
          @confirm="onConfirm"
          @select="onCalfirm"
          :style="{ height: '100%' }"
        >
          <!-- 日期选择标题 -->
          <template #title>
            <div class="date-continer">
              <span class="clear-empty" @click="dateEmpty">清空</span>
              <span class="checkDate">{{checkDate}}</span>
              <span class="sumDate">共{{sumDate}}晚</span>
              <span class="leaveDate">{{leaveDate}}</span>
            </div>
          </template>
        </van-calendar>
      </van-cell-group>
      <!-- 选择价格人数 -->
      <van-cell-group class="price-person">
        <van-row>
          <van-col span="16">
            <van-cell @click="showPopup">
              <div>
                <span>{{ priceSum }}</span>
              </div>
            </van-cell>
          </van-col>
          <van-col span="8" @click="peoNumShow = true">
            <van-cell>
              <div>
                <span>{{ peoNumData }}</span>
              </div>
            </van-cell>
          </van-col>
        </van-row>
      </van-cell-group>
      <!-- 搜索关键字 -->
      <van-cell-group class="keywordSearch" @click="keyword">
        <van-cell>
          <span v-if="$store.state.searchData!=''">关键字/位置/民宿名</span>
          <span v-else>{{store.state.searchData}}</span>
        </van-cell>
      </van-cell-group>
      <!-- 关键地点搜索 -->
      <div class="dataTag">
<!--        <van-tag-->
<!--          round-->
<!--          type="primary"-->
<!--          v-for="(item, index) in keywordCity"-->
<!--          :key="index"-->
<!--          >{{ item }}</van-tag-->
<!--        >-->
      </div>
      <!-- 搜索按钮 -->
      <van-button color="linear-gradient(to right, #FA8D1E, #FCAF3F)" @click="searchBtn">
        开始搜索
      </van-button>
    </div>
    <!-- 滑动轮播 -->
    <div class="scroball">
      <ul>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
        <li>
          <img
            src="https://pic.tujia.com/upload/resourcespic/day_210329/202103291824074567.png"
            alt=""
          /><br />
          <span>房东入住</span>
        </li>
      </ul>
    </div>
    <!-- 瀑布流民宿数据 -->
    <div class="waterfall">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <!-- <van-cell v-for="item in waterList" :key="item" :title="item" /> -->
        <div class="homestay">
<!--          <div class="homestay-item">-->
<!--            <img-->
<!--              src="https://pic.tujia.com/upload/qualifiedpics/day_190822/thumb/201908220023388144_360_480.jpg"-->
<!--              alt=""-->
<!--            />-->
<!--            <van-tag round class="preference">优选PRO</van-tag>-->
<!--            <van-icon name="like-o" />-->
<!--            <div class="text-description">-->
<!--              <p>三钻 2居4床 4人</p>-->
<!--              <p>古北水镇🌸花开半夏复式叠拼观景loft</p>-->
<!--              <van-rate-->
<!--                size="10px"-->
<!--                gutter="20px"-->
<!--                v-model="rateValue"-->
<!--                color="#fff"-->
<!--                disabled-->
<!--              />-->
<!--              <span>￥1180</span>-->
<!--            </div>-->
<!--          </div>-->
          <div class="homestay-item" v-for="(item,i) in result" :key="i">
            <img
              :src="item.swiper"
              alt=""
            />
            <van-tag round class="preference">{{item.con_title}}</van-tag>
            <div class="text-introduce">
              <span class="city">{{item.location.slice(4,10)}}</span>
              <p>{{item.r_name}}</p>
              <span class="class">{{item.params.attr}} · {{item.params.house}}居{{item.params.bed}}床{{item.params.person_count}}人</span><br />
              <span class="price">
                ¥{{item.new_price}}
              </span>
              <span class="originalPrice">
                ¥{{item.price}}
              </span>
              <van-tag round type="danger">已减¥{{item.price-item.new_price}}</van-tag>
            </div>
          </div>
        </div>
      </van-list>
    </div>
    <!-- 价格弹出层 -->
    <van-popup v-model="showPrice" position="bottom" :style="{ height: '50%' }">
      <div class="continer">
        <div>
          <span>价格/星级</span>
          <van-icon name="cross" @click="empty" />
        </div>
        <div class="continer-card">
          <div class="price-section">
            <span v-if="maxPrice < 1000"
              >价格区间￥{{ minPrice }}-￥{{ maxPrice }}</span
            >
            <span v-else>价格区间￥{{ minPrice }}-不限</span>
          </div>
          <div class="price-slider">
            <!-- 价格滑块 -->
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
          </div>
          <!-- 价格区间选择 -->
          <div class="price-select">
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
        <!-- 功能按钮 -->
        <div class="btnSet">
          <van-button type="default" @click="emptyBtn">清空</van-button>
          <van-button color="#FF9645" @click="affirmBtn">确认</van-button>
        </div>
      </div>
    </van-popup>
    <!-- 人数弹出层 -->
    <van-popup
      style="border-radius:0;"
      v-model="peoNumShow"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <div class="peoNumContiner">
        <div class="title">
          <van-icon name="cross" @click="peoNumShow = false" />
          <div class="title-text">
            <span>
              选择入住人数
            </span>
          </div>
        </div>
        <div
          class="peoNumItem"
          v-for="(item, index) in peoNum"
          :key="index"
          @click="peoNumBtn(item[0])"
        >
          <span>{{ item[0] }}</span>
          <van-icon v-if="peoNumData == item[0]" name="success" />
        </div>
      </div>
    </van-popup>
    <!-- 搜索框弹出 -->
    <van-search
      v-model="searchValue"
      v-show="searchShow"
      show-action
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <div>搜索</div>
      </template>
      <template #left>
        <div class="bourn">
          <span>目的地</span>
          <br />
          <span class="city">北京</span>
        </div>
        <div class="search-time">
          <span>住6.30</span>
          <br />
          <span>离11.30</span>
        </div>
      </template>
    </van-search>
    </div>
     <table-bar></table-bar> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图
      images: [
        "https://pic.tujia.com/upload/resourcespic/day_210609/202106091432152901.jpg",
        "https://pic.tujia.com/upload/resourcespic/day_210521/202105212103212518.jpg",
        "https://pic.tujia.com/upload/resourcespic/day_210521/202105212103212518.jpg",
        "https://pic.tujia.com/upload/resourcespic/day_210521/202105212103212518.jpg",
      ],
      // 时间弹出层
      show: false,
      // 入住时间
      starDate: "",
      // 离店时间
      endDate: "",
      // 价格选择隐藏
      showPrice: false,
      // 人数弹出层隐藏
      peoNumShow: false,
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
        [1000, "不限"],
      ],
      // 价格显示
      priceSum: "价格等级不限",
      // 优选评论
      rateValue: 5,
      // 选择人数
      peoNum: [
        ["1人"],
        ["2人"],
        ["3人"],
        ["4人"],
        ["5人"],
        ["6人"],
        ["7人"],
        ["8人"],
        ["9人"],
        ["10人+"],
        ["不限人数"],
      ],
      // 主页人数
      peoNumData: "人数不限",
      // 天数
      putDate: 1,
      // 关键地点搜索数据
      waterList: [],
      loading: false,
      finished: true,
      // 搜索框弹出层
      searchShow: false,
      // 搜索内容
      searchValue: "",
      // 入住日期
      checkDate:'入住日期',
      // 间隔时间
      sumDate:0,
      // 离店日期
      leaveDate:'离店日期',
      dataDate:[],
      result:{},
    //  地址
      local:''
    };
  },
  created() {
    let date = new Date();
    this.starDate = `${date.getMonth() + 1}月${date.getDate()}日`;
    this.endDate = `${date.getMonth() + 1}月${date.getDate() + 1}日`;
    this.$store.commit('hotelStarDate',this.starDate)
    this.$store.commit('hotelEndDate',this.endDate)
    let that = this;
    this.$nextTick(_ => {
      document.querySelector('.test-scroll-wrap').onscroll = function() {
        // let dom = document.documentElement.scrollTop;
        let dom = this.scrollTop;
        if (dom > 520) {
          that.searchShow = true;
        } else {
          that.searchShow = false;
        }
      };
    })
    this.getIndexList()
    this.getLocation()
  },
  watch:{
    local(val){
      console.log(val)
      this.$store.commit('cityData',val)
    }
  },
  methods: {
    // 地理位置获取
    getLocation() {
      const self = this;

      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true

          enableHighAccuracy: true,

          // 设置定位超时时间，默认：无穷大

          timeout: 0,
        });

        geolocation.getCurrentPosition();

        AMap.event.addListener(geolocation, "complete", onComplete);

        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息

          console.log("定位成功信息：", data);
          self.local=data.addressComponent.province+data.addressComponent.district
        }

        function onError(data) {
          // 定位出错

          console.log("定位失败错误：", data);

          // 调用ip定位

          self.getLngLatLocation();
        }
      });
    },

    getLngLatLocation() {
      let that=this
      AMap.plugin("AMap.CitySearch", function() {
        var citySearch = new AMap.CitySearch();

        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息

            console.log("通过ip获取当前城市：", result);

            //逆向地理编码

            AMap.plugin("AMap.Geocoder", function() {
              var geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode

                city: result.adcode,

              });
              // console.log(geocoder)

              var lnglat = result.rectangle.split(";")[0].split(",");
              geocoder.getAddress(lnglat, function(status, data) {
                if (status === "complete" && data.info === "OK") {
                  // result为对应的地理位置详细信息
                  // this.local=data
                  console.log(data.regeocode.addressComponent.province);
                  that.local=data.regeocode.addressComponent.province
                }
              });
            });
          }
        });
      });
    },
    // 请求数据
    async getIndexList(){
      const {data:res} = await this.$axios.get('index/list?page=1&count=100')
      this.result = res.result
      console.log(this.result)
    },
    // 轮播图
    onChange(index) {
      let div = this.$refs.indecatorRef.querySelectorAll("div");
      for (var k = 0; k < div.length; k++) {
        div[k].style.backgroundColor = "gray";
        // console.log(div[k])
      }
      div[index].style.backgroundColor = "white";
    },
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    // 起始时间和结束时间
    onConfirm(date) {
      const [start, end] = date;
      date[0].setHours(12)
      date[1].setHours(12)
      console.log(date)
      this.putDate =
        parseInt(date[1].getTime() / 1000 / 60 / 60 / 24)-
        parseInt(date[0].getTime() / 1000 / 60 / 60 / 24);
      this.show = false;
      this.starDate = this.formatDate(start);
      this.endDate = this.formatDate(end);
      // var res = parseInt(date[1].getTime()/1000/60/60/24)
      let data = []
      // for(let i = 0;i<=this.putDate;i++){
        data.unshift(date[0].getTime());
        data.unshift(date[1].getTime());
      // }
      // console.log(data)
      this.dataDate = data
      // 点击开始搜索再保存先写在这date[0].getTime()
      this.$store.commit("hotelStarDate", this.starDate);
      // this.$store.commit("hotelStarDate", date[0].getTime());
      this.$store.commit("hotelEndDate", this.endDate);
      // this.$store.commit("hotelEndDate", date[1].getTime());
      this.$store.commit("hotDataDate",this.dataDate)
      console.log(this.$store.state)
    },
    // 控制弹出层
    showPopup() {
      this.showPrice = true;
    },
    // 关闭弹出层
    empty() {
      this.showPrice = false;
    },
    // 价格滑块控制
    sliderChange(value) {
      let arr = [...value]
      console.log(arr)
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
      if (value[1] > 1000) {
        this.maxPrice = "不限";
      }
    },
    // 价格区间选择
    priceFirst(item) {
      let arr = [...item]
      this.value = arr;
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
    },
    priceSecond(item) {
      let arr = [...item]
      this.value = arr;
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
    },
    priceThirdly(item) {
      let arr = [...item]
      this.value = arr;
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
    },
    priceFourthly(item) {
      let arr = [...item]
      this.value = arr;
      this.minPrice = arr[0];
      this.maxPrice = arr[1];
    },
    // 关键字
    keyword() {
       this.$router.push("search");
    },
    // 清空按钮
    emptyBtn() {
      this.value = [0, 1050];
      this.minPrice = 0;
      this.maxPrice = "不限";
    },
    // 确认按钮
    affirmBtn() {
      this.priceSum = `￥${this.minPrice}- ${this.maxPrice}`;
      this.showPrice = false;
      this.$store.commit('priceData',[this.minPrice,this.maxPrice])
      console.log(this.$store.state)
    },
    // 选择人数
    peoNumBtn(item) {
      this.peoNumData = item;
      this.peoNumShow = false;
    },
    // 页面选择时间
    onCalfirm(date) {
      this.sumDate = 0
      this.leaveDate = '离店日期'
      let checkDateMonth = date[0].getMonth()+1
        let checkDateDate = date[0].getDate()
        this.checkDate = `${checkDateMonth}月${checkDateDate}日`
      if(date[1]!==null){
        let leaveDateMonth = date[1].getMonth()+1
        let leaveDateDate = date[1].getDate()
        this.leaveDate = `${leaveDateMonth}月${leaveDateDate}日`
        let timea = date[0].getTime() / 1000 / 60 / 60 / 24;
        let timeb = date[1].getTime() / 1000 / 60 / 60 / 24;
        this.sumDate = timeb-timea
      }
    },
    // 选择时间清空
    dateEmpty(){
      this.sumDate = 0
      this.leaveDate = '离店日期'
      this.checkDate = '入住日期'
    },
    //开始搜索
    searchBtn(){
      this.$router.push('/stay')
    }
    // 瀑布流更新数据
    // onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }

    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000);
    // },
  },
};
</script>

<style lang="scss">
.test-scroll-wrap {
  z-index: 10;
  position: fixed;
  left: 0; right: 0;
  top: 0;
  bottom: 55px;
  overflow: auto;
}
// ::-webkit-scrollbar {
//   height: 2px;
// }
// ::-webkit-scrollbar-thumb {
//   border-radius: 10px;
//   width: 5px;
//   background: red;
// }
html{
  width: 100%;
  height: 100%;
}
body{
  background-color: #F5F7F9;
}
.Index-view {
  // 头部标题栏
  .headerTitle {
    width: 100%;
    height: 5vh;
    background-color: #ffffff;
    text-align: center;
    line-height: 5vh;
    //   .titleLogo {
    //     display: inline-block;
    //     background-image: url();
    //     background-size: 207px 192px;
    //   }
    div {
      width: 20px;
      height: 15px;
      // background-color: red;
      position: fixed;
      top: 0;
      right: 10px;
      padding: 5px 15px 0px 0px;
    }
  }
  // 背景图透明
  .van-swipe-item {
    display: inline-block;
    //   width: 100%;
    //   height: 278px;
    background-image: linear-gradient(to top, white, rgba(255, 0, 0, 0));
    img {
      width: 100%;
      height: 30vh;
      mix-blend-mode: overlay;
    }
  }

  // 自定义指示器样式
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 65px;
    padding: 2px 5px;
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: gray;
      float: left;
      margin-left: 5px;
    }
  }

  // 卡片样式
  .cardSearch {
    width: 90vw;
    height: 40vh;
    margin-left: 5vw;
    background-color: #fff;
    margin-top: 10vh;
    position: absolute;
    top: 18vh;
    border-radius: 18px;
    box-shadow: 0px 30px 30px -10px #f0f0f0;
    // 关键字搜索样式
    .keywordSearch {
      .van-cell {
        span {
          font-family: PingFangSC-Regular;
          color: #999;
        }
      }
    }
    // 关键地点搜索
    .dataTag {
      width: 100%;
       //height: 10vh;
      // background-color: red;

      .van-tag {
        background-color: #f1f3f5;
        color: #000;
        margin-left: 3vw;
        margin-top: 1vh;
        display: inline-flex;
        flex-wrap: wrap;
      }
    }
    .van-button {
      width: 84vw;
      margin-top: 3vh;
      margin-left: 3vw;
      border-radius: 20px;
    }
  }

  // 卡片地址
  .current-location {
    .current-city {
      width: 75%;
      height: 3vh;
      // background-color: blue;
      line-height: 3vh;
      box-sizing: inherit;
      float: left;
    }
    .currentBtn {
      width: 20%;
      margin-left: 5%;
      height: 3vh;
      // background-color: red;
      float: left;
      line-height: 3vh;
      font-family: PingFangSC-Light;
      font-weight: 300;
      font-size: 12px;
      color: #666;
    }
  }

  // 选择时间样式
  .option-date {
    .van-cell {
      height: 10vh;
      div {
        display: flex;
        // flex-direction: column ;
        justify-content: space-between;
        .star-date {
          position: absolute;
          top: 3vh;
        }
        .end-date {
          position: absolute;
          top: 3vh;
          right: 0;
        }
        .allTime {
          position: absolute;
          top: 1.5vh;
          font-size: 12px;
          right: 43%;
        }
      }
    }
  }

  // 选择价格人数样式
  .price-person {
    .van-row {
      .van-col:nth-child(1) {
        border-right: 1px solid #fbfbfc;
      }
      .van-col {
        div {
          span {
            font-family: PingFangSC-Regular;
            color: #999;
          }
        }
      }
    }
  }

  // 弹出层内容样式
  .van-popup {
    background-color: #f1f3f5;
    border-radius: 25px 25px 0px 0px;
    .continer {
      width: 90%;
      margin-left: 5%;
      margin-top: 2vh;
      div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        span {
          color: #333;
          font-family: PingFangSC-Medium;
          font-weight: 700;
        }
      }
      .continer-card {
        width: 100%;
        height: 25vh;
        background-color: #fff;
        margin-top: 3vh;
        .price-section {
          width: 84vw;
          margin-left: 3vw;
          // position: absolute;
          float: left;
          margin-top: 2vh;
          // background-color: red;
          span {
            font-family: PingFangSC-Medium;
            font-weight: 500;
            font-size: 14px;
            color: #333;
            padding: 0 0 12px 0;
          }
        }
        .price-slider {
          width: 84vw;
          float: left;
          margin-left: 3vw;
          margin-top: 2vh;
        }
        .price-select {
          float: left;
          width: 84vw;
          float: left;
          margin-left: 3vw;
          // background-color: red;
          height: 10vh;
          margin-top: 3vh;
          .van-row {
            .van-col {
              .van-tag {
                width: 100%;
                height: 3vh;
                display: inline-flex;
                justify-content: center;
                line-height: 3vh;
                font-family: PingFangSC-Regular;
                font-size: 10px;
                color: #333;
                margin-top: 2vh;
                font-weight: 500;
              }
            }
          }
        }
      }
      .btnSet {
        width: 100%;
        float: left;
        height: 10vh;
        // background-color: red;
        margin-top: 3vh;
        line-height: 8vh;
        .van-button:nth-child(1) {
          border-radius: 20px;
          width: 30vw;
          display: inline-flex;
          justify-content: center;
        }
        .van-button:nth-child(2) {
          border-radius: 20px;
          width: 55vw;
          margin-left: 5vw;
          display: inline-flex;
          justify-content: center;
        }
      }
    }
  }
  .van-popup {
    .peoNumContiner {
      height: 100%;
      background-color: #ffffff;
      .title {
        width: 100%;
        height: 5vh;
        line-height: 5vh;
        // background-color: red;
        border-bottom: 1px solid #f1f1f1;
        .title-text {
          text-align: center;
        }
        .van-icon {
          // float: left;
          position: absolute;
          line-height: 5vh;
          left: 4vw;
        }
      }
      .peoNumItem {
        width: 100%;
        height: 7vh;
        // background-color: red;
        border-bottom: 1px solid #f1f1f1;
        line-height: 7vh;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        span {
          margin-left: 4vw;
        }
        .van-icon {
          color: #ffa661;
          line-height: 7vh;
          margin-right: 4vw;
        }
      }
    }
  }
  .waterfall {
    width: 100%;

    .van-list {
      .homestay {
        height: 177vh;
        //max-height: 220vh;
        //overflow:  ;
        width: 100%;
        // background-color: red;
        // float: left;
        // margin-top: 50vh;
        // display: flex;
        // flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        // justify-content: center;
        // align-items: center;
        @media screen and (max-height: 800px){
            height: 206vh;
        }
        .homestay-item {
          position: relative;
          margin-bottom: 2vh;
          // clear:both;
          width: 45vw;
          margin-left: 3vw;
          img {
            width: 45vw;
            border-radius: 15px 15px 0px 0px;
          }
          .preference {
            position: absolute;
            // top: 0;
            top: 2vh;
            right: 28vw;
            background-color: #ffffff;
            color: #000;
            font-size: 12px;
          }
          .van-icon {
            position: absolute;
            // top: 0;
            top: 2vh;
            left: 37vw;
          }
          .text-description {
            width: 100%;
            height: 15vh;
            // background-color: black;
            position: absolute;
            z-index: 10000;
            bottom: 0vh;
            p:nth-child(1) {
              font-family: PingFangSC-Regular;
              font-size: 10px;
              color: #fff;
              line-height: 12px;
              margin-bottom: 4px;
              width: 100%;
            }
            p:nth-child(2) {
              font-family: PingFangSC-Medium;
              font-size: 14px;
              color: #fff;
              line-height: 17px;
              margin-bottom: 6px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              line-clamp: 2;
              word-break: break-all;
            }
            .van-rate {
              position: absolute;
              bottom: 5vh;
              right: 58vw;
            }
            span {
              position: absolute;
              bottom: 1vh;
              right: 2vw;
              font-family: PingFangSC-Medium;
              font-size: 12px;
              color: #fff;
            }
          }
          .text-introduce {
            // position: absolute;
            // bottom:16vh;
            //margin-top: -5px;
            width: 100%;
            //height: 15vh;
            padding: 5px;
            border-radius: 0px 0px 15px 15px;
            background-color: #ffffff;
            .city {
              display: block;
              font-size: 12px;
              color: #666;
            }
            p {
              margin-top: 0;
              margin-bottom: 0;
            }
            .class {
              // display: block;
              font-size: 12px;
              color: #666;
            }
            .price {
              font-family: PingFangSC-Medium;
              font-size: 14px;
              color: var(--tjc-theme-price, #ff9645);
            }
            .originalPrice {
              font-family: PingFangSC-Light;
              font-size: 10px;
              color: #999;
              text-decoration: line-through;
              margin-left: 2px;
            }
          }
        }
      }
    }
  }

  .scroball {
    width: 100%;
    overflow: auto;
    height: 10vh;
    float: left;
    margin-top: 36vh;
    margin-bottom: 4vh;
    // background-color: red;
    ul {
      white-space: nowrap;

      li {
        // float: left;
        display: inline-block;
        margin-left: 6vw;
        img {
          margin-left: 3vw;
          width: 32px;
        }
      }
    }
  }
  // 搜索框
  .van-search {
    position: fixed;
    top: 0;
    width: 100%;
  }

  // 搜索框左侧内容
  .bourn {
    background-color: #f7f8fa;
    margin-right: 1vw;
    span:nth-child(1) {
      font-size: 10px;
      color: #999;
      line-height: 14px;
    }
    .city {
      font-family: PingFangSC-Medium;
      font-weight: 500;
      font-size: 14px;
      padding-right: 2px;
      color: #333;
      margin-left: 1vw;
      text-align: center;
    }
  }
  .search-time {
    background-color: #f7f8fa;
    margin-right: 1vw;
    width: 66px;
    border-right: 1px solid #fff;
    color: #999;
    font-size: 10px;
    text-align: center;
  }
  .date-continer {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 5vh;
    .checkDate {
      margin-left: 13vw;
      font-size: 21px;
      color: #999;
    }
    .sumDate{
    content: "";
    // width: 40px;
    height: 1px;
    color: #ff9645;
    -webkit-font-smoothing: antialiased;
    }
    .leaveDate {
      margin-right: 13vw;
      font-size: 21px;
      color: #999;
    }
  }
  .van-calendar{
    border-radius: 0 !important;
  }
  .clear-empty{
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 16px;
    color: #666;
    line-height: 1;
  }
}
</style>
