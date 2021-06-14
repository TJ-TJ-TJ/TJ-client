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
export default {
  data() {
    return {
      activeName: "a",
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
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件
  },
  methods: {
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