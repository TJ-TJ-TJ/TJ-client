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
  mounted() {
    console.log(this.$socket);
    if(
         !!window.localStorage.getItem('token') 
      || !!window.localStorage.getItem('uid') 
      
    ){
      this.$socket.open()
    }
  },
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
