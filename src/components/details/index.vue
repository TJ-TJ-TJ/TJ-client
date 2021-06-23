<template>
  <div class="details">
    <!-- <button @click="qingq">请求</button> -->
    <nav-bar></nav-bar>
    <sw-ipe :swiper="swiper"></sw-ipe>
    <scroll-tab :allDate="allDate"></scroll-tab>

    <!-- <intro-duce></intro-duce>
    <hous-scource></hous-scource>
    <facil-ities></facil-ities>
    <land-lord></land-lord>
    <com-ment></com-ment>
    <not-ice></not-ice> -->
    <foo-ter></foo-ter>
    <act-ion :prices="prices"></act-ion>
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
      swiper: "",
      allDate: undefined,
      prices: undefined,
    };
  },
  beforeCreate() {
    console.log(this.$store.state);
  },
  mounted() {
      const startdate = Math.min.apply(null,this.$store.state.dataDate)
      const enddate = Math.max.apply(null,this.$store.state.dataDate)
      this.$axios.get(`/details/is?start=${startdate}&end=${enddate}&rid=${this.$route.query.id}`).then(result=>{
      this.$store.commit("setIsReserve",result.data.ok)
    })
    this.$axios.get(`/details/?rid=${this.$route.query.id}`).then(result=>{
      const data = result.data.result;
      this.allDate = data;
      console.log(data);
      this.swiper = data.swiper;
      const { price, new_price, r_name, params, owner } = data;

      // console.log(price,new_price)
      this.prices = {
        price,
        new_price,
        uid: this.$route.query.id,
        fm: this.swiper[0].url[0],
        bt: r_name,
        fbt: params,
        owner: owner,
      };
      // console.log(this.prices)
      // console.log(this.$route)
      // console.log(this.prices);
    });
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
