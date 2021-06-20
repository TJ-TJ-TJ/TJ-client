<template>
  <div class="action">
    <van-tabbar fixed border z-index="100">
      <van-goods-action safe-area-inset-bottom class="goods">
        <van-goods-action-icon
          class="kefu"
          icon="chat-o"
          text="聊天"
          badge="5"
          @click="liaotian"
        />
        <van-goods-action-icon class="phone" icon="phone-o" text="电话" /><span class="shux">|</span>
        <!-- <span class="shux">|</span>
       <div class="price">￥262 <span id="price2">/晚￥328</span> </div> -->
        <div class="pric">
          <span class="price">￥{{jiage.new_price}}</span>
          <span class="price2">/晚 <s>￥{{jiage.price}}</s> </span>
        </div>

        <van-goods-action-button color="#ff9645" class="btn" @click="yuding">
          <img src="/icon/detailv2_shand.png" alt="" />
          立即预定
        </van-goods-action-button>
        <!-- <van-button color="linear-gradient(90deg,#fa8c1d,#fcaf3f)" class="btn">
  预定当前房源
</van-button> -->
      </van-goods-action>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  props: {
    prices: {
      type: Object,
      require: true,
      default: ()=> {
        return {};
      }
    }
  },
  data() {
    return {
      jiage: this.prices
    };
  },
  watch: {
    prices(val) {
      this.jiage = val
    } 
  },
  methods: {
    liaotian()  {
      this.$router.push({
        name: '/msg',
        params: {
          uid: jiage.uid,
          head_img: jiage.owner.img,
          uname: jiage.owner.uanme
        }
      })
    },
    yuding() {
 
    }

  },
  // mounted() {
  //   console.log(this.$router.push)
  // }
  
}
</script>

<style lang="scss">
.action {
  .goods {
    // .kefu {

    // }
    .phone {
      margin-right: 10px;
      
    }

    .shux {
      color: rgb(226, 220, 220);
      margin-right: 5px;

    }
    .pric {


      margin-right: 30px;
      .price {
        color: #ff9645;
        font-weight: 700;
        font-size: 18px;
      }
      .price2 {
        font-size: 12px;
        color: #666;
      }
    }

    .btn {
      height: 50px;

      img {
        width: 14px;
        height: 17px;
     
    
      }
    }
    .van-goods-action-button--last {
      margin-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .van-goods-action-button--first {
      margin-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
