<template>
  <div class="introduce">
    <van-action-sheet v-model="show" title="标题">
      <div class="content">内容</div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
.introduce {
  .content {
    padding: 16px 16px 160px;
  }
}
</style>
