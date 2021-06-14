<template>
  <div class="details">
    <nav-bar></nav-bar>
    <!-- <scroll-tab v-show="show">
      
    </scroll-tab> -->
    <sw-ipe></sw-ipe>
    <act-ion></act-ion>
    <intro-duce></intro-duce>
    <hous-scource></hous-scource>
    <facil-ities></facil-ities>
    <land-lord></land-lord>
    <com-ment></com-ment>
    <not-ice></not-ice>
    <foo-ter></foo-ter>
  </div>
</template>

<script>
import navbar from "@/components/details/navbar";
import scrolltab from "@/components/details/scrolltab";
import swipe from "@/components/details/swipe";
import introduce from "@/components/details/introduce";
import HousScource from "@/components/details/houssource";
import FacilIties from "@/components/details/facilities";
import landLord from "@/components/details/landlord";
import comMent from "@/components/details/comment";
import notIce from "@/components/details/notice";
import action from "@/components/details/action";
import FooTer from "@/components/details/footer";
export default {
  data() {
    return {};
  },
  components: {
    "nav-bar": navbar,
    "scroll-tab": scrolltab,
    "sw-ipe": swipe,
    "intro-duce": introduce,
    HousScource,
    FacilIties,
    landLord,
    comMent,
    notIce,
    FooTer,
    "act-ion": action,
  },
};
</script>
<style lang="scss"></style>
