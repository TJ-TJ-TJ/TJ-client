<template>
  <div class="OP-box">
      <van-nav-bar
      title="订单填写"
      left-text="."
      left-arrow
      @click-left="onClickLeft"
      class="header"
    />

    <div class="OP-countDownBox">
      <div style="font-size: 24px">支付时间剩余</div>
      <van-count-down style="margin: 20px 0px" :time="countDownTime">
        <template #default="timeData">
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <div>Loft复试，温馨装修</div>
      <div style="color: #999; font-size: 12px">6月15日 -- 6月16日 共1晚</div>
    </div>

    <!-- 支付方式 -->
    <div class="OP-payWay-box">
      <van-radio-group v-model="selectPayWay">
        <div class="OP-payWay-box-content">
          <div>
            <img
              width="28px"
              src="https://pic.tujia.com/upload/mobileconfig/day_190404/201904041758414443.png"
              alt=""
            />
            <div class="OP-payWay-items-left">
              <p>支付宝支付</p>
              <p style="font-size: 12px">安全支付，推荐使用</p>
            </div>
            <div class="OP-payWay-items-right">
              <van-radio name="1" checked-color="#ff9645"></van-radio>
            </div>
          </div>

          <div>
            <img
              width="28px"
              src="https://pic.tujia.com/upload/mobileconfig/day_190404/201904041811421748.png"
              alt=""
            />
            <div class="OP-payWay-items-left">
              <p>微信支付</p>
              <p style="font-size: 12px">安全支付，推荐使用</p>
            </div>
            <div class="OP-payWay-items-right">
              <van-radio name="2" checked-color="#ff9645"></van-radio>
            </div>
          </div>

          <div>
            <img
              width="28px"
              src="https://pic.tujia.com/upload/mobileconfig/day_190404/201904041813299294.png"
              alt=""
            />
            <div class="OP-payWay-items-left">
              <p>京东白条</p>
              <p style="font-size: 12px">京东安全支付</p>
            </div>
            <div class="OP-payWay-items-right">
              <van-radio name="3" checked-color="#ff9645"></van-radio>
            </div>
          </div>

          <div>
            <img
              width="28px"
              src="https://pic.tujia.com/upload/mobileconfig/day_201016/202010161807031102.png"
              alt=""
            />
            <div class="OP-payWay-items-left">
              <p>云闪付支付</p>
              <p style="font-size: 12px">云闪付支付</p>
            </div>
            <div class="OP-payWay-items-right">
              <van-radio name="4" checked-color="#ff9645"></van-radio>
            </div>
          </div>
        </div>
      </van-radio-group>
    </div>
    <van-button
      type="primary"
      color="#ff9645"
      class="submit"
      @click="orderpay"
      block
      >确认支付 ￥ 915.00</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDownTime: 200311,
      selectPayWay: "1",
    };
  },
  methods: {
    onClickLeft() {
      this.$dialog
        .confirm({
          title: "提醒",
          message: "您有一笔订单待支付，确定要离开吗",
        })
        .then(() => {
          this.$router.go(-1);
          //在将这笔订单改为 未支付状态
        })
        .catch(() => {
          return;
        });
    },
    orderpay() {
      this.$dialog
        .confirm({
          title: "提醒",
          message: "确定要支付吗",
        })
        .then(() => {
          this.$toast.success("支付成功");
          this.$router.go("/order");
        })
        .catch(() => {
          return;
        });
    },
  },
};
</script>

<style lang="scss">
p {
  margin: 0;
}
.submit {
  height: 60px;
  position: fixed;
  bottom: 0;
}
.OP-box {
  height: 100vh;
  background-color: #f8f9fb;
  .header {
    .van-icon {
      color: #ff9654 !important;
    }
    .van-nav-bar__text {
      width: 32px;
      height: 15px;
      background-image: url(https://pic.tujia.com/upload/festatic/publicImages/mob-TjHeader-header-logo.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}

.OP-countDownBox {
  padding: 25px 0px;
  background: white;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
}
.OP-countDownBox div {
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 倒计时>>>>>>>>>>>>>>>start  */
.colon {
  display: inline-block;
  margin: 0 4px;
  color: black;
  font-weight: 600;
  font-size: 24px;
}
.block {
  display: inline-block;
  min-width: 25px;
  height: 25px;
  background-color: #3f4954;
  color: #fff;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  margin: 0 10px;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
}
/* 倒计时>>>>>>>>>>>>>>>end  */

/* 支付方式>>>>>>>>>>>>>>start */

.OP-payWay-box {
  margin-top: 10px;
  padding: 0px 20px;
  background: white;
  min-height: 300px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 6%);
}
.OP-payWay-box div {
  height: 65px;
}
.OP-payWay-box-content > div {
  width: 100%;
  height: 65px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.OP-payWay-items-left {
  flex: 50%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  flex-wrap: wrap;
  padding: 10px 0px;
  box-sizing: border-box;
}
.OP-payWay-items-left p {
  width: 100%;
}
.OP-payWay-items-right {
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.van-radio__icon--checked,
.van-radio__icon {
  display: flex;
  align-items: center;
}
/* 支付方式>>>>>>>>>>>>>>end */
</style>