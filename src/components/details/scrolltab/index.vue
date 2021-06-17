<template>
  <div class="scrolltab">
    <van-tabs
      scrollspy
      sticky
      color="#ff9645"
      title-active-color="#ff9645"
      v-model="activeName"
     
    >
      <van-tab :title="'概览'" name="a">
        <intro-duce></intro-duce>
      </van-tab>
      <van-tab :title="'房源'" name="b">
        <you-hui></you-hui>
        <da-te  @dateshow='cs($event)'></da-te>
        <calen-dar :titls='ss' ref="calend"></calen-dar>
        <hous-scource></hous-scource>
      </van-tab>
      <van-tab :title="'设施'" name="c">
        <facil-ities></facil-ities>
      </van-tab>
      <van-tab :title="'房东'" name="d">
        <land-lord></land-lord>
      </van-tab>
      <van-tab :title="'点评'" name="e">
        <com-ment></com-ment>
      </van-tab>
      <van-tab :title="'须知'" name="f">
        <not-ice></not-ice>
      </van-tab>
      <van-tab :title="'周边'" name="g">
        <!-- <map-around></map-around> -->
        <map-img></map-img>
        <map-tabs></map-tabs>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import swipe from "@/components/details/swipe";
import introduce from "@/components/details/introduce";
import HousScource from "@/components/details/houssource";
import FacilIties from "@/components/details/facilities";
import landLord from "@/components/details/landlord";
import comMent from "@/components/details/comment";
import notIce from "@/components/details/notice";
// import map from "@/components/details/map";
import mapImg from "@/components/details/mapimg";
import mapTabs from "@/components/details/maptabs";
import youHui from "@/components/details/youhui";

import DaTe from "@/components/details/date";
import calenDar from "@/components/details/calendar";
export default {
  data() {
    return {
      activeName: "a",
      ss: ''
    };
  },
  components: {
    // "sw-ipe": swipe,
    "intro-duce": introduce,
    HousScource,
    FacilIties,
    landLord,
    comMent,
    notIce,
    // FooTer,
    // "map-around": map,
    mapImg,
    mapTabs,
    youHui,
    DaTe,
    calenDar

  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件
  },
  methods: {
    cs(c) {

      console.log(this.$refs)
      this.$refs.calend.show=c
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      // let offsetTop = document.querySelector(".van-sticky").offsetTop
      let stick = document.querySelector(".van-sticky");


      if (scrollTop>='300') {
        // console.log(scrollTop)
        stick.classList.add("hsueh");
      } else if (scrollTop <= "300") {
        stick.classList.remove("hsueh");
      }
      },

      show(e) {
        console.log(e)
        console.log(tit)
      }
    
  },
};
</script>


<style lang="scss">
.scrolltab {
  .van-sticky {
    display: none;
  }
  .hsueh {
    display: block;
  }
}
</style>