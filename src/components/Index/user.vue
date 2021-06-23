<template>
  <div class="userIndex">
    <div class="title">
      <div class="backImg">
        <div v-show="!userInfo.uname" class="uname-container">
          <span @click="goLogin" class="uname">
            注册/登录
          </span>
          <br>
          <span class="unameMsg">
            注册预定返积分
          </span>
        </div>
        <div v-show="userInfo.uname" class="uname-container">
          <span class="uname">
             {{userInfo.uname}}
          </span>
        </div>
      </div>
      <van-image
        v-if="!userInfo.token"
        round
        width="5rem"
        height="5rem"
        class="headimg"
        src="/img/defaultHead.png"
      />
       <van-image
       @click="goEdit"
        v-else
        round
        width="5rem"
        height="5rem"
        class="headimg"
        :src="userInfo.headImg"
      />
      <div @click="goEdit" class="icon">
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
    </div>
    <div class="head">
      <div class="container">
        <div class="head-item">
          <van-image
            width="1rem"
            height="1rem"
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
            width="1rem"
            height="1rem"
            src="icon/history.png"
          />
          <br />
          <span class="fontTitle" @click="$router.push('/collect')">
            浏览历史
          </span>
          <br />
          <!-- <span>历史发票</span> -->
        </div>
        <div class="head-item">
          <van-image
            width="1rem"
            height="1rem"
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
            width="1rem"
            height="1rem"
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
            width="1rem"
            height="1rem"
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
        userInfo:{
          token:window.localStorage.getItem('token'),
          phone:window.localStorage.getItem('phone'),
          uname:window.localStorage.getItem('uname'),
          headImg:window.localStorage.getItem('headImg'),
        }
    }
  },
  methods:{
    //去登录
    goLogin(){
      this.$router.push({path:'login'});
    },
    goEdit(){
      if(!this.userInfo.token){
        return this.$router.push({path:'login'})
      }
      this.$router.push({path:'setting'})
    },
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
    height: 35vh;
    .backImg {
      width: 100%;
      height: 30vh;
      background-image: url('/img/back.png');
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
      height: 3rem;
      width: 3rem;
      background-color: #3E4852;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 10vh;
      right: 10vw;
      border-radius: 50%;
      box-shadow: 1px 1px 7px black;
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
        font-size: 16px;
      }
    }
    .my-order {
      margin: 0 auto;
      margin-top: 4vh;
      width: 90%;
      line-height: 22px;
      display: flex;
      justify-content: flex-end;
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
        .van-image{
          margin-bottom: 10px;
        }
      }
    }
  }
  .fontTitle{
    // font-weight: bold;
    font-weight: 400;
    font-size: 14px;
  }
  .fontMsg{
    color: #B9B9B8;
    font-size: 10px;
    font-weight: 500;
  }
  .price-title{
    color:#9F9A98;
    font-size: 12px;
    margin-bottom: 5px;
  }
  .uname-container{
    color: #fff;
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
.headimg img{
  width: 105%;
  height: 105%;
}
</style>
