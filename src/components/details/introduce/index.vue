<template>
  <div class="introduce">
    <!-- <div class="xian"></div> -->
    <!-- <van-divider /> -->
    <!-- <van-cell value="内容" /> -->
    <!-- <div class="describe">
    天津西青大学城幕围电影主题大床房
    天津西青大学城幕围电影主题大床房
    </div> -->

    <div class="discount">特惠价格！已优惠125元</div>

    <van-cell-group class="grub">
      <div class="van-cell__title ">
        森岚·逸云「玖号房」 家庭房丨踏青丨台球丨桌游丨红螺寺丨慕田峪长城丨轰趴
        <span v-for="(val, index) in goodtime" :key="index">
          <img src="/icon/diamondLevel.png" alt=""
        /></span>
      </div>
      <div class="lable">
        <span v-for="(val, i) in label.base" :key="i" class="lablelist">{{
          val
        }}</span>
        <span v-for="k in label.play" :key="k" class="lablelist2">{{ k }}</span>
      </div>
      <div class="listinfo">
        <span class="pingfen">4.9</span>
        <span class=".zan">超赞</span>
        <span class="pingyu">"房东超赞"</span>
        <span class="pinglun">89条评论></span>
      </div>
      <div class="listinfo2">
        <div class="leftlist">
          <div class="dizhi">
            石景山区, 北京石景山区鲁谷大街与京源路交叉口紫御长安
          </div>
          <div class="ditie">
            <img src="/icon/position_subway.png" alt="" />
            近地铁站.距离八角游乐园地铁站直线距离443m，步行约9min
          </div>
          
        </div>
        <div class="rightlist"><span>地图</span> <span>周边></span></div>
        
      </div>
    </van-cell-group>
    <div class="xbx"></div>
    <div v-for="k in 50" :key="k">dsadsas</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,

      goodtime: 3,
      label: {
        base: ["实拍", "可做饭", "宽松取消", "行李寄存", "立即确认"],
        play: ["山景房", "有麻将机"],
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.introduce {
  .grub {
    padding: 12px 16px;
  }
  .discount {
    background-image: url("/icon/big_promotion_bg.png");
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    font-size: 16px;
    color: #fff;
    font-weight: 600;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .van-cell__title {
    margin: 0 0 6px;
    font-weight: 700;
    font-size: 20px;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
    span {
      img {
        width: 12px;
      }
    }
  }
  .lable {
    display: flex;
    flex-flow: row wrap;
    max-height: 47px;
    overflow: hidden;
    margin-bottom: 12px;

    .lablelist {
      font-size: 10px;
      padding: 2px 4px;
      border-radius: 2px;
      margin: 4px 4px 0 0;
      color: rgb(255, 150, 69);
      background: rgba(255, 150, 69, 0.15);
    }
    .lablelist2 {
      font-size: 10px;
      padding: 2px 4px;
      border-radius: 2px;
      margin: 4px 4px 0 0;
      color: rgb(23, 210, 188);
      background: rgba(23, 210, 188, 0.1);
    }
  }
  .listinfo {
    height: 30px;
    background: #f5f7fa;
    border-radius: 5px;
    padding: 0 12px;
    line-height: 30px;
    font-size: 12px;

    .pingfen {
      font-size: 18px;
      color: #333;
      font-weight: 700;
      margin-left: 2px;
    }
    .zan {
      color: #333;
      font-weight: 700;
    }
    .pinglun {
      float: right;
      color: #ff9645;
    }
    .pingyu {
      color: #666;
    }
  }
  .listinfo2 {
    margin-top: 8px;
    height: 58px;
    background: #f5f7fa;
    border-radius: 5px;
    padding: 0 12px;
    line-height: 30px;
    font-size: 12px;
    // display: flex;
    // justify-content: space-between;
    .leftlist {
      float: left;
      height: 58px;
      width: 253px;
     
      .dizhi {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ditie {
        white-space: nowrap;
        overflow: hidden;
        // text-overflow: ellipsis;
        
        img {
          width: 10px;
          height: 10px;
        }
      }
    }
    .rightlist {
      float: right;
      line-height: 58px;
      text-align: center;
      color: #ff9645;
    }
  }
  .xbx {
    height: 5px;
    // background-color: #333;
    border-bottom: 10px solid rgb(233, 228, 228);
  }
  // .describe {
  //   font-weight: 700;
  //   font-size: 20px;
  //   color: #333;
  //   text-align: center;
  //   line-height: 24px;
  //   overflow: hidden;
  //   margin-bottom: 6px;
  // }
  //  .xian {
  //    border-bottom: 1px solid black;
  //  }
}
</style>
