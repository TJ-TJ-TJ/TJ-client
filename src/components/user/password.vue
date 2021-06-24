<template>
           <div style="position:absolute;top:0px;right:0;width:100vw;height:100vh">
               <van-nav-bar
                        left-text="返回"
                        left-arrow
                        @click-left="onClickLeft"
                    >
                    <template #title>
                        <div style="font-size:16px;color:#333">设置</div>
                    </template>
                    <template #left>
                        <van-icon name="arrow-left" size="25" />
                    </template>
                </van-nav-bar>
           </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push({path:'/setting'})
        },
    },
    mounted() {
    },
    beforeDestroyed() {
        // this.show=false
    },
}
</script>

<style>

</style>