<template>
  <div class="search-Index">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="hot-search">
      <div class="title">
        <span class="title-search">热门搜索</span>
        <span class="radio" @click="radioBtn">{{radioStatus}}</span>
      </div>
      <div class="search-continer" style="overflow: hidden;" ref="continerRef">
        <van-tag>怀柔风景区</van-tag>
        <van-tag>古北水镇</van-tag>
        <van-tag>天安门广场</van-tag>
        <van-tag>十渡风景区</van-tag>
        <van-tag>延庆休闲度假区</van-tag>
        <van-tag>金海湖</van-tag>
        <van-tag>怀柔风景区</van-tag>
        <van-tag>怀柔风景区</van-tag>
        <van-tag>怀柔风景区</van-tag>
        <van-tag>怀柔风景区</van-tag>
        <van-tag>怀柔风景区</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      radioStatus:'展开'
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
    },
    onCancel() {
    //   console.log("取消");
    this.$router.push('/')
    },
    radioBtn(){
        if(this.radioStatus == '展开'){
        this.$refs.continerRef.style.overflow = ''
        this.radioStatus = '收起'
        }else{
        this.$refs.continerRef.style.overflow = 'hidden'
        this.radioStatus = '展开'
        }
    }
  },
};
</script>

<style lang="scss">
.search-Index {
  form {
    .van-search {
      width: 100%;
      position: fixed;
      top: 0;
    }
  }
  .hot-search {
    margin-top: 12vh;
    .title {
      width: 90%;
      margin-left: 5%;
      height: 3vh;
      display: flex;
      justify-content: space-between;
      // background-color: red;
      border-left: 4px solid #ff9645;
      .title-search {
        margin-left: 3vw;
        font-weight: 500;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333;
      }
      .radio {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 10px;
        color: #666;
        line-height: 20px;
        margin-right: 5px;
      }
    }
    .search-continer {
      width: 90%;
      margin-top: 2vh;
      margin-left: 5%;
      height: 10vh;
    //   background-color: red;
      flex-wrap: wrap;
      .van-tag {
        font-size: 12px;
        background-color: rgb(255, 244, 236);
        border-radius: 14px;
        display: inline-block;
        padding: 6px 12px;
        color: #000;
        margin-left: 3vw;
        margin-top: 1vh;
      }
    }
  }
}
</style>
