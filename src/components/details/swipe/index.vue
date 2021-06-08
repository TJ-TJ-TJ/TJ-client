<template>
  <div class="swipe">
    <van-swipe 
    class="my-swipe" 
    :autoplay="3000" 
  
    z-index="10"
    safe-area-inset-top
    loop
    touchable
    @change="onChange"
    >
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">{{ lei }}</div>
  </template>
</van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['房子','厨卫','客厅','卧室'],
      lei:''
    };
  },
  methods: {
    onChange(index) {
      this.lei = this.current[index]
    },
  },
};
</script>

<style lang="scss">
  .swipe {
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  }
</style>
