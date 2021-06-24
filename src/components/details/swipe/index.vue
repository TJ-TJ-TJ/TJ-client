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
      <van-swipe-item v-for="(item, index) in swipers" :key="index" >
        <img :src="item.url[0]" alt="" />
      </van-swipe-item>

      <template #indicator>
        <div class="custom-indicator" >{{lei}}</div>
      </template>
    </van-swipe>
   <!-- <button @click="showarr">点击</button> -->
    <van-icon name="like-o" 
    class="like "
    @click="like"
    ref="likes"
    :class="{'van-icon-like': islike,'likes': islike }"
     />
  </div>
</template>

<script>
export default {
//  props:['swiper','collHistory'],
 props: {
   swiper: {
     type: Object,
     require: true
   },
   collhistory: {
     type: Object,
     require: true
   },
   iscollect: {
     type: Boolean,
     require: true
   }

 },
  data() {
    return {
      // current: [this.swiper[0].class_name,this.swiper[1].class_name, this.swiper[2].class_name, this.swiper[3].class_name, this.swiper[4].class_name,this.swiper[5].class_name],
      // current:['封面','厨房','客厅','洗手间','卧室'],
      lei: "封面",
      likedate: false,
      likelist: this.collhistory,
      swipers: this.swiper,
      islike: true
      // images: [
      //   "https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312248918_700_467.jpg",
			// 	"https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312248918_700_467.jpg",
			// 	"https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312248918_700_467.jpg",
			// 	"https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312248918_700_467.jpg",
			// 	"https://pic.tujia.com/upload/landlordunit/day_190414/thumb/201904141312248918_700_467.jpg",
      // ],
      //  images: '',
      //  swiper: ''
    };
  },
  watch: {

    swiper: {
      deep: true,
      handler:function(nval,oldval) {
        this.$nextTick(()=> {
          this.swipers = nval
        })
      }
    },
    collhistory: {
      deep: true,
      handler: function(val) {
        console.log(val)
        this.likelist = val

      }

    },
    iscollect: {
      handler(nval) {
        this.islike = nval
      }
    }
  },
  mounted() {
    // console.log(this.collHistory)

    //   this.axios.get('/details/?rid=60c164a7074200005d003192').then(result=>{
    //   const data = result.data.result;
    //   this.swiper = data.swiper[0].url[0];
    //   // console.log(data.swiper)
    //   // console.log(this.swiper)
    //   this.swiper = data.swiper





  



    // })
    // console.log(this.swiper)
    // this.swiper.forEach(ele => {
    //   // console.log(ele.url)
    //   this.images = ele.url[0]
      
    // });
    // let tp;
    // for(let i in this.swiper) {
    //   // console.log(this.swiper[i].url[0])
    //   tp = this.swiper[i].url[0]
     
    // }
    //  console.log(tp)
    // for(let i =0; i< this.swiper.length; i++) {
    //   console.log(this.swiper[i])
    // }

    // this.swiper.forEach(ele => {
    //   this.images=ele
    
    // });
    // console.log(this.images)
  },
  // watch: {
  //   swiper(val){
  //     this.swiper = val
  //   }

  // },
  methods: {
    onChange(index) {
      let mx=this.swipers.map(item=> {
       return item.class_name
      })
      this.lei = mx[index];
    },
   like() {
     console.log(this.$refs.likes)
     this.$refs.likes.classList.toggle('van-icon-like')
     this.$refs.likes.classList.toggle('likes')
      this.likedate = !this.likedate;
     if(this.likedate) {
       console.log("a")
       this.$axios.post('/profile/collect',this.likelist).then(result=>console.log(result))

     }else {
       console.log("s")
       console.log(this.$route.query.id)
      this.$axios.delete('/profile/collect',{
        data: {rid: this.$route.query.id}
      }).then(result => console.log(result))


     }

  }

    // showarr() {
    //   // console.log(this.swiper)
    //   // console.log(this.images)
    // }
  },
  computed: {

    // mioashu() {
    //   console.log(this.swiper)
    //     let mx;
    //   for(let i in this.swiper[]) {
    //     // console.log(this.swiper[i])
    //      mx= this.swiper[i]

    //   }
    //   console.log(mx)

    //   return "ss"
      
   
      
    // }

    // miaoshu () {
    //   this.swiper.map(item=> {
    //    return item.class_name
    //   })
    // }
 
  }
};
</script>

<style lang="scss">
.swipe {
   position: relative;
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
  .like {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #fff;
    font-size: 25px;

  }
  .likes {
    color: red;

  }

  
}
</style>
