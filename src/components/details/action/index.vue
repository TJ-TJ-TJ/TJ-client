<template>
  <div class="action">
    <van-tabbar fixed border z-index="100">
      <van-goods-action safe-area-inset-bottom class="goods">
        <van-goods-action-icon
          class="kefu"
          icon="chat-o"
          text="聊天"
          badge="5"
        />
        <van-goods-action-icon class="phone" icon="phone-o" text="电话" /><span class="shux">|</span>
        <!-- <span class="shux">|</span>
       <div class="price">￥262 <span id="price2">/晚￥328</span> </div> -->
        <div class="pric">
          <span class="price">￥449</span>
          <span class="price2">/晚 <s>￥500</s> </span>
        </div>

        <van-goods-action-button color="#ff9645" class="btn">
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
