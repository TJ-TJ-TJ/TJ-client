<template>
 <div class="details">

    <nav-bar></nav-bar>
  <sw-ipe></sw-ipe>
  <intro-duce></intro-duce>


 
 </div>
  
 
</template>




<script>
  import navbar from '@/components/details/navbar'
  import swipe from '@/components/details/swipe'
  import introduce from '@/components/details/introduce'
export default {

  data() {
    return {};
  },
 components: {
   'nav-bar': navbar,
   'sw-ipe': swipe,
   'intro-duce': introduce

 }
  
}
</script>
<style lang="scss">

</style>