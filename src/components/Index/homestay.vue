<template>
  <div class="homestay-Index">
    <!-- 搜索框 -->
    <van-search
      v-model="searchValue"
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
    <!-- 条件查询栏 -->
    <div class="dropdown">
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
      <div class="header-stay">
        <van-swipe :autoplay="0" @change="carRoll">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">
              {{ current + 1 }}/{{ images.length }}
            </div>
          </template>
        </van-swipe>
        <div class="header-comment">
          <strong class="comment-grade">4.5分</strong>
          <span>十大打阿斯顿打撒阿三大苏打算</span>
        </div>
      </div>
    </div>
    <!-- </v-touch> -->
  </div>
</template>

<script>
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
        "https://pic.tujia.com/upload/landlordunit/day_201204/thumb/202012041616075755_700_467.jpg",
        "https://pic.tujia.com/upload/landlordunit/day_201206/thumb/202012061156088910_700_467.jpg",
        "https://pic.tujia.com/upload/landlordunit/day_201206/thumb/202012061156016274_700_467.jpg",
        "https://pic.tujia.com/upload/landlordunit/day_201204/thumb/202012041616062264_700_467.jpg",
      ],
      // 轮播图指示器
      current: 0,
    };
  },
  methods: {
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

<style lang="scss">
.homestay-Index {
  // 搜索框
  .van-search {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
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
    .sumDate {
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
  .dropdown {
    position: fixed;
    top: 7vh;
    width: 100%;
  }
  .price-section {
    width: 100%;
    height: 50vh;
    background-color: #fff;
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
  .van-slider {
    width: 85vw;
    margin-left: 5vw;
    margin-top: 2vh;
  }
  .section-title {
    span {
      margin-left: 3vw;
    }
  }
  .steel-grade {
    width: 90vw;
    height: 20vh;
    // background-color: red;
    margin-top: 20vh;
    margin-left: 3vw;
    .steel-title {
      display: flex;
      justify-content: space-between;
      .steel-item {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 14px;
        color: #333;
      }
      .steel-explain {
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #999;
        letter-spacing: 0;
        text-align: right;
        margin-right: 4px;
      }
    }
    .steel-tag {
      display: flex;
      flex-wrap: wrap;
      .van-tag {
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
        span {
          font-family: PingFangSC-Medium;
          font-weight: 500;
          text-align: center;
          color: #333;
        }
      }
    }
  }
  .foot-base {
    width: 100%;
    height: 7vh;
    position: fixed;
    bottom: 0;
    left: 0;
    //   background-color: red;
    border-top: 1px solid #f3f6f9;
    box-shadow: 0px 50px 50px 5px #000;
    .empty {
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
    .examine {
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
  }
  .scroball {
    width: 100%;
    overflow: auto;
    height: 5vh;
    position: fixed;
    top: 60;
    // background-color: red;
    line-height: 4vh;
    ul {
      white-space: nowrap;

      li {
        // float: left;
        display: inline-block;
        margin-left: 1vw;
        .van-tag {
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
          box-shadow: 0 2px 14px 0 rgb(0 2 4 / 8%);
          border-radius: 13px;
          background-size: cover;
        }
      }
    }
  }
  // 民宿列表样式
  .header-continer {
    width: 100%;
    // height: 20vh;
    // background-color: red;
    margin-top: 20vh;
    .header-stay {
      width: 90%;
      // height: 20vh;
      margin-left: 5%;
      // background-color: red;
      position: relative;
      .van-swipe {
        height: 34vh;
        .van-swipe-item {
          img {
            width: 100%;
          }
        }
      }
      .header-comment {
        display: flex;
        align-items: center;
        background-color: hsla(0, 0%, 100%, 0.9);
        border-radius: 10px;
        height: 17px;
        width: 40vw;
        padding: 1px 8px 0;
        // justify-content: center;
        position: absolute;
        bottom: 2vh;
        left: 4vw;
        .comment-grade {
          font-size: 10px;
          display: inline-block;
          width: 9vw;
          border-right: 1px solid #dadada;
        }
        span {
          font-size: 10px;
          display: inline-block;
          margin-left: 5px;
          padding-left: 5px;
          position: relative;
          color: #666;
          flex: 1;
          //   .文本强制不合法，不换行
          white-space: nowrap;
          //   2.文本溢出显示省略号
          text-overflow: ellipsis;
          //   3.溢出部分隐藏
          overflow: hidden;
        }
      }
    }
  }
  // 轮播图指示器样式
  .custom-indicator {
    position: absolute;
    right: 3vw;
    bottom: 2vh;
    padding: 2px 10px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
  }
}
</style>
