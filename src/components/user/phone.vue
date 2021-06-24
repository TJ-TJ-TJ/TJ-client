<template>
  <div>
      <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        >
            <template #title>
                <div style="font-size:16px;color:#333">手机号</div>
            </template>
            <template #left>
                <van-icon name="arrow-left" size="25" />
            </template>
         </van-nav-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>