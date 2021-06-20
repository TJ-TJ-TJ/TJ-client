<template>
  <div class="navbar">
    <van-nav-bar title="房屋详情"    placeholder >
    <span  class="back" slot="left" @click="zhuye">
      <img  src="/icon/mob-TjHeader-header-left.png" alt="">
      <img slot="left" class="last" src="/icon/mob-TjHeader-header-logo.png" alt="">

     <div class="back"></div>
    </span>


    </van-nav-bar>

  </div>
</template>

<script>
export default {
  


  data() {

  },
  methods: {
    zhuye() {
      console.log("55")
    }
  }
  
}
</script>

<style lang="scss">
.navbar {
  z-index: 200000;

  .back {
   img {
     height: 18px;
     height: 15px;
     margin-left: 8px;
     

   }
  //  .last {
  //    margin-left: 0;
  //  }
   

  }
  // .back{
  //   display: inline-block;
  //   // width: 8px;
  //   // height: 5px;
  //   background-image: url('/icon/mob-TjHeader-header-logo.png');
  // }
    // img {
    //   width: 18px;
    //   height: 15px;
    // }

}
</style>