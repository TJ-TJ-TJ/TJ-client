<template>
  <div class="cityIndex">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-index-bar v-for="(i, index) of indexList" :key="index" z-index="0">
      <van-index-anchor :index="i.initial" />
      <van-cell v-for="(item, code) of i.list" :key="code" :title="item.name" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexList: [],
      value: '',
    };
  },
  created() {
    this.cityJSON();
  },
  methods: {
    cityJSON() {
      this.$axios.get("json/city.json").then((res) => {
        console.log(res);
        this.indexList = res.data.city;
      });
    },
    onSearch(val) {
      console.log(val);
    },
    onCancel() {
      console.log('取消');
    },
  },
};
</script>

<style lang="scss">
.cityIndex {
    .van-index-bar{
        .van-index-anchor{
            background-color: #f1f6f6;
        }
    }
    .van-search{
        width: 100%;
        position: fixed;
        top: 0;
        height: 5vh;
        z-index: 1;
    }
}
</style>
