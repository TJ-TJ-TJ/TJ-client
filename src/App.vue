<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  async created() {
    let user_info = [
      { uname: "余成林", user_iden: 411522200010063611, person_show: true },
      { uname: "高武杰", user_iden: 411522200010063611, person_show: false },
    ]; //  假定的 入住人信息
    sessionStorage.setItem("check_person", JSON.stringify(user_info)); //不能直接传递数组或者对象 可以存储字符串
  },
  methods: {
   
  },
  created() {
    // this.updatemsg(); //更改总未读消息
  },
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
