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
      <van-swipe-item v-for="(image, index) in images" :key="index" >
        <img :src="image" alt="" />
      </van-swipe-item>

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
      current: ['封面',"房子", "厨卫", "客厅", "卧室"],
      lei: "封面",
      images: [
        'https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141311372140_700_467.jpg',
				'https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141311447584_700_467.jpg',
				'https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312248918_700_467.jpg',
				'https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312151027_700_467.jpg',
				'https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141311384624_700_467.jpg',
      ],
    };
  },
  methods: {
    onChange(index) {
      this.lei = this.current[index];
    },
  },
};
</script>

<style lang="scss">
.swipe {
  .my-swipe .van-swipe-item {
    
    
    img {
      width: 100%;
 
    }
  }
  .custom-indicator {
    position: absolute;
    color: #fff;
    border-radius: 35px;
    right: 35px;
    bottom: 35px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  
}
</style>
