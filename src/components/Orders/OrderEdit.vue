<template>
  <div class="order_edit">
    <van-nav-bar title="订单填写" left-text="." left-arrow @click-left="onClickLeft" @click-right="onClickRight" class="header" />
    <div class="order_info">
      <div class="head">
        <img src="" alt="">
        <div>
          <p>哈哈</p>
          <span></span>
        </div>
      </div>
      <div class="body"></div>
      <div class="foot"></div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {},
    onClickRight() {},
  },
};
</script>
<style lang="scss">
.order_edit {
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
  .order_info{
    display: flex;
    flex-direction: column;
  }
}
</style>