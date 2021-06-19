<template>
  <div class="details">
       <!-- <button @click="qingq">请求</button> -->
    <nav-bar></nav-bar>
     <sw-ipe  :swiper="swiper"></sw-ipe>
     <scroll-tab ></scroll-tab>

    <!-- <intro-duce></intro-duce>
    <hous-scource></hous-scource>
    <facil-ities></facil-ities>
    <land-lord></land-lord>
    <com-ment></com-ment>
    <not-ice></not-ice> -->
    <foo-ter></foo-ter> 
    <act-ion></act-ion>
 
  </div>
</template>

<script>
import navbar from "@/components/details/navbar";
import scrolltab from "@/components/details/scrolltab";
import swipe from "@/components/details/swipe";
// import introduce from "@/components/details/introduce";
// import HousScource from "@/components/details/houssource";
// import FacilIties from "@/components/details/facilities";
// import landLord from "@/components/details/landlord";
// import comMent from "@/components/details/comment";
// import notIce from "@/components/details/notice";
import action from "@/components/details/action";
import FooTer from "@/components/details/footer";
export default {
  data() {
    return {
      swiper: ''
    };
  },
  mounted() {
    this.axios.get('/details/?rid=60c164a7074200005d003192').then(result=>{
      // console.log(result.data.result)
      const data = result.data.result;
      this.swiper = data.swiper;




  



    })

  },
  components: {
    "nav-bar": navbar,
    "scroll-tab": scrolltab,
    "sw-ipe": swipe,
    // "intro-duce": introduce,
    // HousScource,
    // FacilIties,
    // landLord,
    // comMent,
    // notIce,
    FooTer,
    "act-ion": action,
  },
  // methods: {
  //   qingq() {

  //     this.axios.get('/details/?rid=60c164a7074200005d003192').then(result=>{
  //       console.log(result)
  //     })

  //   }
  // }
};
</script>
<style lang="scss"></style>
