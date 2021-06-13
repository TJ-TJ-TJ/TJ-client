<template>
  <div class="houssource">
    <!-- <van-card
    
    >
      <div slot="thumb">
        <van-image
          width="82"
          height="104"
          src="https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312143092_700_467.jpg"
        />
        <span class="card-img-text">当前房源</span>
      </div>

      <template #title>
        <div class="desc">
          实拍·整套·1居1床2人·48㎡
        </div>
        <div class="arrow">></div>
        
      </template>   
    </van-card> -->

    <van-card>
      <template #thumb>
        <van-image
          width="82"
          height="104"
          src="https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312143092_700_467.jpg"
        />
        <span class="card-img-text">当前房源</span>
      </template>
      <template #title>
        <div class="card-title">
          实拍·整套·1居1床2人·48㎡
          <!-- <div class="card-arrow"><img src="/icon/aggregation-right-black.png" alt=""></div> -->
        </div>
      </template>
      <template #desc>
        <div class="card-desc">北欧风情观景大床房 （车接车送）</div>
      </template>
      <template #tags>
        <van-tag color="rgba(255, 102, 102, 0.1)" text-color="#f66"
          >今日特价减110</van-tag
        >
        <br />
        <div class="card-xuzhi">
          <img src="/icon/tanhao.png" alt="" />
          <span class="card-text">取消订单，将收取全部房费</span>
          <img src="/icon/lvshandian.png" alt="" /><span>立即确认</span>
          <van-row class="jg">
            <!-- <van-col  offset="12" span="4">
          
          <van-col offset="2" span="6">
            <s>¥1000</s><br>
          <span class="">¥989 </span>/晚 
          </van-col>
          
          <van-col offset="6" span="4"><van-button class="button" size="small" color="linear-gradient(90deg,#fa8c1d,#fcaf3f)" >预定</van-button></van-col>
        
        </van-col> -->

            <van-col class="yjg" offset="2" span="4">
              <s>¥1000</s>
            </van-col>
            <van-col offset="4" span="6">
              <span class="newjg">¥989 </span>/晚
            </van-col>
            <van-col offset="3" span="4">
              <van-button
                class="button"
                size="small"
                color="linear-gradient(90deg,#fa8c1d,#fcaf3f)"
                >预定</van-button
              >
            </van-col>
          </van-row>
        </div>
      </template>
    </van-card>

    <div class="other">房东同地址其它房源</div>

    <van-card>
      <template #thumb>
        <van-image
          width="82"
          height="104"
          src="https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312335824_700_467.jpg"
        />
        <!-- <span class="card-img-text">当前房源</span> -->
      </template>
      <template #title>
        <div class="card-title">实拍·整套·1居1床2人·48㎡</div>
      </template>
      <template #desc>
        <div class="card-desc">北欧风情观景大床房 （车接车送）</div>
      </template>
      <template #tags>
        <van-tag color="rgba(255, 102, 102, 0.1)" text-color="#f66"
          >今日特价减110</van-tag
        >
        <br />
        <div class="card-xuzhi">
          <img src="/icon/tanhao.png" alt="" />
          <span class="card-text">取消订单，将收取全部房费</span>
          <img src="/icon/lvshandian.png" alt="" /><span>立即确认</span>
          <van-row class="jg">
            <!-- <van-col  offset="12" span="4">
          
          <van-col offset="2" span="6">
            <s>¥1000</s><br>
          <span class="">¥989 </span>/晚 
          </van-col>
          
          <van-col offset="6" span="4"><van-button class="button" size="small" color="linear-gradient(90deg,#fa8c1d,#fcaf3f)" >预定</van-button></van-col>
        
        </van-col> -->

            <van-col class="yjg" offset="2" span="4">
              <s>¥1000</s>
            </van-col>
            <van-col offset="4" span="6">
              <span class="newjg">¥989 </span>/晚
            </van-col>
            <van-col offset="3" span="4">
              <van-button
                class="button"
                size="small"
                color="linear-gradient(90deg,#fa8c1d,#fcaf3f)"
                >预定</van-button
              >
            </van-col>
          </van-row>
        </div>
      </template>
    </van-card>

    <van-card>
      <template #thumb>
        <van-image
          width="82"
          height="104"
          src="https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312288527_700_467.jpg"
        />
        <!-- <span class="card-img-text">当前房源</span> -->
      </template>
      <template #title>
        <div class="card-title">实拍·整套·1居1床2人·48㎡</div>
      </template>
      <template #desc>
        <div class="card-desc">北欧风情观景大床房 （车接车送）</div>
      </template>
      <template #tags>
        <van-tag color="rgba(255, 102, 102, 0.1)" text-color="#f66"
          >今日特价减110</van-tag
        >
        <br />
        <div class="card-xuzhi">
          <img src="/icon/tanhao.png" alt="" />
          <span class="card-text">取消订单，将收取全部房费</span>
          <img src="/icon/lvshandian.png" alt="" /><span>立即确认</span>
          <van-row class="jg">
            <!-- <van-col  offset="12" span="4">
          
          <van-col offset="2" span="6">
            <s>¥1000</s><br>
          <span class="">¥989 </span>/晚 
          </van-col>
          
          <van-col offset="6" span="4"><van-button class="button" size="small" color="linear-gradient(90deg,#fa8c1d,#fcaf3f)" >预定</van-button></van-col>
        
        </van-col> -->

            <van-col class="yjg" offset="2" span="4">
              <s>¥1000</s>
            </van-col>
            <van-col offset="4" span="6">
              <span class="newjg">¥989 </span>/晚
            </van-col>
            <van-col offset="3" span="4">
              <van-button
                class="button"
                size="small"
                color="linear-gradient(90deg,#fa8c1d,#fcaf3f)"
                >预定</van-button
              >
            </van-col>
          </van-row>
        </div>
      </template>
    </van-card>

    <van-card>
      <template #thumb>
        <van-image
          width="82"
          height="104"
          src="https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141313158778_700_467.jpg"
        />
        <!-- <span class="card-img-text">当前房源</span> -->
      </template>
      <template #title>
        <div class="card-title">实拍·整套·1居1床2人·48㎡</div>
      </template>
      <template #desc>
        <div class="card-desc">北欧风情观景大床房 （车接车送）</div>
      </template>
      <template #tags>
        <van-tag color="rgba(255, 102, 102, 0.1)" text-color="#f66"
          >今日特价减110</van-tag
        >
        <br />
        <div class="card-xuzhi">
          <img src="/icon/tanhao.png" alt="" />
          <span class="card-text">取消订单，将收取全部房费</span>
          <img src="/icon/lvshandian.png" alt="" /><span>立即确认</span>
          <van-row class="jg">
            <!-- <van-col  offset="12" span="4">
          
          <van-col offset="2" span="6">
            <s>¥1000</s><br>
          <span class="">¥989 </span>/晚 
          </van-col>
          
          <van-col offset="6" span="4"><van-button class="button" size="small" color="linear-gradient(90deg,#fa8c1d,#fcaf3f)" >预定</van-button></van-col>
        
        </van-col> -->

            <van-col class="yjg" offset="2" span="4">
              <s>¥1000</s>
            </van-col>
            <van-col offset="4" span="6">
              <span class="newjg">¥989 </span>/晚
            </van-col>
            <van-col offset="3" span="4">
              <van-button
                class="button"
                size="small"
                color="linear-gradient(90deg,#fa8c1d,#fcaf3f)"
                >预定</van-button
              >
            </van-col>
          </van-row>
        </div>
      </template>
    </van-card>

    <div class="bianxian"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    getContainer() {
      return document.querySelector(".houssource");
    },
  },
};
</script>


<style lang="scss">
.houssource {
  //  .van-card__header {
  //     width: 82px;
  //    height: 104px;

  // .van-card__content {
  //   min-width: 100%;
  // }

  .card-title {
    font-size: 14px;
    color: #333;
    font-weight: 600;
    // line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    //   .card-arrow {
    //     font-size: 20px;
    //     font-weight: 10;
    //     color: #969799 !important;
    //     float: right;
    // }
    &::after {
      display: block;
      content: "";
      width: 7px;
      height: 12px;
      background-image: url("/icon/aggregation-right-black.png");
      background-size: 100% 100%;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .card-desc {
    color: #666;
    overflow: hidden;
    white-space: nowrap;
  }
  .card-xuzhi {
    img {
      width: 10px;
      height: 10px;
      margin-right: 2px;
    }
    .card-text {
      margin-right: 8px;
    }
  }
  // .price {
  //   float: left;
  //   margin-left: 75%;

  // }
  .yj {
    margin-right: 18vw;
  }
  // .jk{
  //   margin-top: 200px;
  // }
  .jg {
    margin-top: 10px;
  }
  .button {
    width: 53px;
    height: 28px;
    font-weight: 600;
  }
  .yjg {
    text-align: center;
    line-height: 30px;
  }
  .newjg {
    font-size: 14px;
    color: #ff9645;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
  }
  // .claerfloat::after {
  //   content: "";
  //   display: block;
  //   clear: both;
  //   visibility: hidden;
  // }

  // .desc::after {
  //   display: block;
  //   content: "";
  //   width: 7px;
  //   height: 12px;
  //   background-image: url('https://pic.tujia.com/upload/festatic/publicImages/aggregation-right-black.png');
  //   background-size: 100% 100%;
  //   position: absolute;
  //   right: 0;
  //   bottom: 2px;

  // }
  //     }
  //   }

  .card-img-text {
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 93%;
    height: 20px;
    background-color: rgba(51, 51, 51, 0.7);
    color: #fff;
    text-align: center;
    line-height: 20px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .other {
    font-size: 13px;
    font-weight: 600;
    color: #333;
    padding: 0 0 5px 29px;
    &::before {
      position: absolute;
      bottom: -72px;
      left: 17px;
      display: block;
      content: "";
      width: 3px;
      height: 13px;
      background: linear-gradient(135deg, #fa8c1d, #fcaf3f);
      border-radius: 3px;
    }
  }

  .bianxian {
    width: 100%;
    border-bottom: 10px solid #e9e4e4;
  }
}
</style>