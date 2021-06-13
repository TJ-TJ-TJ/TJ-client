<template>
  <div class="scrolltab">
    <van-tabs scrollspy
    sticky
    color="#ff9645"
    title-active-color="#ff9645"
    v-model="activeName"
    v-show="show"
    >
      <van-tab :title="'概览'" name="a">
        <sw-ipe></sw-ipe>
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

export default {
  data() {
    return {
      activeName: 'a',
      show: true
    };
  },
  components: {
    
  },
};
</script>


<style lang="scss">
</style>