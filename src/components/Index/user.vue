<template>
  <div class="userIndex">
    <div class="title">
      <div class="backImg"></div>
      <van-image
        round
        width="6rem"
        height="6rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <van-icon name="setting" size="2rem"/>
      <div class="price">
        <div>
          <span>积分</span>
          <br />
          <span class="price-span">0分</span>
        </div>
        <div>
          <span>积分</span>
          <br />
          <span class="price-span">0分</span>
        </div>
        <div>
          <span>积分</span>
          <br />
          <span class="price-span">0分</span>
        </div>
      </div>
      <div class="my-order">
        <span class="myOrder">我的订单</span>
        <span>查看全部</span>
      </div>
    </div>
    <div class="head">
      <div class="container">
        <div class="head-item">
          <van-image
            width="3rem"
            height="3rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <br />
          <span>
            开具发票
          </span>
          <br />
          <span>历史发票</span>
        </div>
        <div class="head-item">
          <van-image
            width="3rem"
            height="3rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <br />
          <span>
            开具发票
          </span>
          <br />
          <span>历史发票</span>
        </div>
        <div class="head-item">
          <van-image
            width="3rem"
            height="3rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <br />
          <span>
            开具发票
          </span>
          <br />
          <span>历史发票</span>
        </div>
        <div class="head-item">
          <van-image
            width="3rem"
            height="3rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <br />
          <span>
            开具发票
          </span>
          <br />
          <span>历史发票</span>
        </div>
        <div class="head-item">
          <van-image
            width="3rem"
            height="3rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <br />
          <span>
            开具发票
          </span>
          <br />
          <span>历史发票</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.userIndex {
  width: 100%;
  height: 100vh;
  background-color: #f1fafc;
  .title {
    position: relative;
    background-color: #ffffff;
    height: 38vh;
    .backImg {
      width: 100%;
      height: 30vh;
      background-image: url(https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989393657.jpg);
      clip-path: polygon(100% 0%, 0% 0%, 0% 0%, 0% 80%, 100% 35%);
    }
    .van-image {
      position: absolute;
      top: 16vh;
      left: 6vw;
      box-shadow: 5px 5px 10px #888888;
    }
    .van-icon{
      position: absolute;
      top: 10vh;
      right: 10vw;
    }
    .price {
      // height: 5rem;
      text-align: center;
      width: 60vw;
      display: flex;
      justify-content: space-between;
      // background-color: red;
      position: absolute;
      right: 0;
      top: 20vh;
      .price-span {
        font-weight: bold;
        font-size: 18px;
      }
    }
    .my-order {
      margin: 0 auto;
      margin-top: 4vh;
      width: 90%;
      display: flex;
      justify-content: space-between;
      line-height: 22px;
      
      .myOrder {
        font-size: 22px;
        font-weight: bold;
      }
    }
  }
  .head {
    width: 100%;
    height: 60vh;
    background-color: #ffffff;
    margin-top: 2vh;
    .container {
    display: flex;
    flex-wrap: wrap;
      .head-item {
        text-align: center;
        width: 20vw;
        // height: 18vh;
        // background-color: red;
        margin: 0 0 0 0;
        margin-left: 10vw;
        margin-top: 4vh;
      }
    }
  }
}
</style>
