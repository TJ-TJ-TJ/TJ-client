<template>
  <div class="add_person" :style="{height:outheight}">
    <van-nav-bar :title="titles" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color='rgb(102, 102, 102)' />
      </template>
    </van-nav-bar>

    <div class="content">
      <van-field disabled name="证件类型" label="证件类型" placeholder="身份证" :rules="[{ required: true, message: '请填写证件类型' }]" right-icon="arrow" />
      <van-field v-model="user_iden" name="证件号码" label="证件号码" placeholder="请填写正确的证件号码" :rules="[{ required: true, message: '请填写用' }]" />
      <van-field v-model="username" name="真实姓名" label="真实姓名" placeholder="请填写入住人真实姓名" :rules="[{ required: true, message: '请填写用户名' }]" />
    </div>
    <div class="msg">
      <div class="head">
        <span class="img"></span>
        <div>
          <p>信息真实完整，免费得到住宿意外险</p>
          <span>途家住宿意外险，最高理赔21万</span>
        </div>
      </div>
      <div>

      </div>
    </div>
    <div class="warn">
      根据公安局酒店经营管理条例，预订经营性质的酒店/民宿，需要提供当前账户的实名身份信息。当前账户的实名身份信息只用于必要的身份核实，途家民宿会为您严格保密。
    </div>
    <div class="bott">
      <van-button color="#ff9645" size="large" @click="save"> 确定</van-button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showpover: true,
      outheight: "",
      titles: "添加入住人",
      username: "",
      user_iden: "",
      pattern: /\d{6}/,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }, // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");
        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    save() {
      if (this.username != "" && this.user_iden != "") {
        let userinfo = {
          uname: this.username,
          user_iden: this.user_iden,
        };
        let obj = JSON.parse(sessionStorage.getItem("check_person"));
        console.log(obj)
        obj.push(userinfo);
        sessionStorage.setItem("check_person", JSON.stringify(obj));
        this.$router.push("/check_person");
      }
    },
  },
  mounted() {
    this.outheight = window.innerHeight + "px";
    if (this.$route.query.go == "edit") {
      this.titles = "编辑入住人";
    } else {
      this.titles = "添加入住人";
    }
  },
};
</script>
<style lang="scss">
.add_person {
  width: 100%;
  background-color: #f7f9fb;
  .content {
    margin: 15px 0;
  }
  .bott {
    background-color: #fff;
    padding: 10px;
    width: 100%;
    display: flex;
    border: 0 !important;
    position: fixed;
    bottom: 0;
    button {
      width: 95%;
      border-radius: 5px;
      border-color: 0;
    }
  }
  .warn {
    padding: 20px;
    line-height: 15px;
    font-family: PingFangSC-Regular;
    font-size: 11px;
    color: #999;
    text-align: left;
  }
  .msg {
    display: flex;
    flex-direction: column;
    .head {
      width: 85%;
      margin: 0 auto;
      border-radius: 6px;
      .img {
        display: inline-block;
        background-image: url(https://fe.tujiacdn.com/mob/static/img/page-unitOrder.7d75bdbc.png);
        background-position: 0 0;
        width: 40px;
        height: 40px;
        background-size: 115.5px 107px;
      }
      padding: 20px 10px;
      display: flex;
      justify-content: space-around;
      background-color: #f0f3f6;
      div {
        p {
          margin-bottom: 5px;
          line-height: 1;
          font-size: 14px;
          color: #333;
          font-weight: 600;
        }
        span {
          color: #333;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>