<template>
  <div id="app">
    
  </div>
</template>

<script>
export default {
  created() {
    console.log('--------------------')
    this.$axios.post('/profile/collect').then(val => console.log('响应.then', val))
  }
}
</script>

<style lang="scss">
  
</style>
