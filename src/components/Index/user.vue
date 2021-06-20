<template>
  <div class="userIndex">
    <div class="title">
      <div class="backImg">
        <div class="uname-container">
          <span class="uname">
            注册/登录
          </span>
          <br>
          <span class="unameMsg">
            注册预定返积分
          </span>
        </div>
      </div>
      <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="icon">
        <van-icon name="icon/edit.png" size="1.5rem" ref="spanRef"/>
      </div>
      <div class="price">
        <div>
          <span class="price-title">红包</span>
          <br />
          <span class="price-span">0个</span>
        </div>
        <div>
          <span class="price-title">积分</span>
          <br />
          <span class="price-span">0</span>
        </div>
        <div>
          <span class="price-title">余额</span>
          <br />
          <span class="price-span">￥0</span>
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
            
            src="icon/bill.png"
          />
          <br />
          <span class="fontTitle">
            开具发票
          </span>
          <br />
          <span class="fontMsg">历史发票</span>
        </div>
        <div class="head-item">
          <van-image
            
            src="icon/history.png"
          />
          <br />
          <span class="fontTitle">
            浏览历史
          </span>
          <br />
          <!-- <span>历史发票</span> -->
        </div>
        <div class="head-item">
          <van-image
            
            src="icon/msg.png"
          />
          <br />
          <span class="fontTitle">
            常用信息
          </span>
          <br />
          <span class="fontMsg">入住人/地址</span>
        </div>
        <div class="head-item">
          <van-image
            
            src="icon/me.png"
          />
          <br />
          <span class="fontTitle">
            吐槽我们
          </span>
          <br />
          <!-- <span>历史发票</span> -->
        </div>
        <div class="head-item">
          <van-image
            
            src="icon/idea.png"
          />
          <br />
          <span class="fontTitle">
            意见反馈
          </span>
          <br />
          <!-- <span>历史发票</span> -->
        </div>
      </div>
    </div>
     <table-bar></table-bar> 
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
  }
};
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
      background-image: url('/img/back.jpg');
       clip-path: polygon(100% 0%,  0% 0%, 0% 80%, 100% 35%);
      //clip-path: ellipse(90% 16vh at 15% 15%);
    }
    .van-image {
      position: absolute;
      top: 16vh;
      left: 6vw;
      box-shadow: 5px 5px 10px #888888;
    }
    .icon{
      height: 2rem;
      width: 2rem;
      background-color: #3E4852;
      position: absolute;
      top: 10vh;
      right: 10vw;
      border-radius: 50%;
      padding: 7px;
      box-shadow: 1px 1px 7px black;
      text-align: center;
      line-height: 2.8rem;
    }
    .price {
      // height: 5rem;
      text-align: center;
      width: 50vw;
      display: flex;
      justify-content: space-between;
      // background-color: red;
      position: absolute;
      right: 20px;
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
  .fontTitle{
    font-weight: bold;
  }
  .fontMsg{
    color: #B9B9B8;
    font-size: 12px;
    font-weight: 500;
  }
  .price-title{
    color:#9F9A98;
  }
  .uname-container{
    color: #000;
    float: left;
    margin-top: 3vh;
    margin-left: 8vw;
    .uname{
      font-size: 20px;
      font-weight: bold;
    }
    .unameMsg{
      display: inline-block;
      margin-top: 5px;
      font-size: 5px;
    }
  }
}
</style>
