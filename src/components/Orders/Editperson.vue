<template>
  <div class="edit_person" :style="{ height: inerheight }">
    <van-nav-bar
      title="编辑入住人"
      class="titles"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="list">
      <van-field
        v-model="user_iden"
        name="证件号码"
        label="证件号码"
        type="digit"
        placeholder="请填写正确的证件号码"
        :rules="[{ required: true, message: '请填写用' }]"
      />
      <van-field
        v-model="username"
        name="真实姓名"
        label="真实姓名"
        placeholder="请填写入住人真实姓名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <div class="bott">
        <van-button color="#ff9645" size="large" @click="save">
          确定</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_iden: "",
      username: "",
      reg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      inerheight: "",
    };
  },
  methods: {
    md() { //对身份证进行加密
      return function (value) {
        value = String(value);
        return value.replace(/(?<=\d{3})\d{12}(?=\d{2})/, "************");
      };
    },
    onClickLeft() {
      this.$router.back();
    },
    set_person() {
      // 编辑入住人的操作  接口
    },
    save() {
      //保存入住人
    },
  },
  created() {
    this.user_iden = this.$route.params.user_iden;
    this.username =this.$route.params.uname ;
    this.inerheight = window.innerHeight + "px";
  },
};
</script>
<style lang="scss">
.edit_person {
  height: 100%;
  background-color: #f7f9fb;
  .list {
    background-color: #fff;
  }
  .titles {
    margin-bottom: 20px;
    i {
      color: #ff9645;
    }
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
}
</style>