<template>
  <div class="Index-view">
    <!-- 头部标题 -->
    <div class="headerTitle">
      <span class="titleLogo">途家民宿</span>
      <div>
        <van-icon name="wap-nav" size="30" />
      </div>
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
              北京丰台
            </span>
          </div>
          <!-- 定位按钮 -->
          <div class="currentBtn">
            <span>
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
            <span class="allTime">共几晚</span>
          </div>
          <div>
            <span>离店</span>
            <span class="end-date">{{ endDate }}</span>
          </div>
        </van-cell>
        <van-calendar v-model="show" type="range" @confirm="onConfirm" />
      </van-cell-group>
      <!-- 选择价格人数 -->
      <van-cell-group class="price-person">
        <van-row>
          <van-col span="16">
            <van-cell @click="showPopup">
              <div>
                <span>{{priceSum}}</span>
              </div>
            </van-cell>
          </van-col>
          <van-col span="8">
            <van-cell>
              <div>
                <span>人数不限</span>
              </div>
            </van-cell>
          </van-col>
        </van-row>
      </van-cell-group>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图
      images: [
        "https://pic.tujia.com/upload/resourcespic/day_210521/202105212103212518.jpg",
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
      // 价格显示
      priceSum:'价格等级不限'
    };
  },
  methods: {
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
      this.show = false;
      this.starDate = this.formatDate(start);
      this.endDate = this.formatDate(end);
      this.$store.commit("hotelStarDate", this.starDate);
      this.$store.commit("hotelEndDate", this.endDate);
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
      this.minPrice = value[0];
      this.maxPrice = value[1];
      if (value[1] > 1000) {
        this.maxPrice = "不限";
      };
    },
    // 价格区间选择
    priceFirst(item) {
      this.value = item;
      this.minPrice = item[0];
      this.maxPrice = item[1];
    },
    priceSecond(item) {
      this.value = item;
      this.minPrice = item[0];
      this.maxPrice = item[1];
    },
    priceThirdly(item) {
      this.value = item;
      this.minPrice = item[0];
      this.maxPrice = item[1];
    },
    priceFourthly(item) {
      this.value = item;
      this.minPrice = item[0];
      this.maxPrice = item[1];
    },
    // 清空按钮
    emptyBtn(){
      this.value = [0,1050]
      this.minPrice = 0
      this.maxPrice = 1059
    },
    // 确认按钮
    affirmBtn(){
      this.priceSum = `￥${this.minPrice}- ${this.maxPrice}`
      this.showPrice = false
    }
  },
};
</script>

<style lang="scss">
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
    height: 50vh;
    margin-left: 5vw;
    background-color: #fff;
    margin-top: 10vh;
    position: absolute;
    top: 18vh;
    border-radius: 18px;
    box-shadow: 0px 30px 30px -10px #f0f0f0;
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
                font-size: 12px;
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
        .van-button:nth-child(1){
          border-radius: 20px;
          width: 30vw;
          display: inline-flex;
          justify-content: center;
        }
        .van-button:nth-child(2){
          border-radius: 20px;
          width: 55vw;
          margin-left: 5vw;
          display: inline-flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
