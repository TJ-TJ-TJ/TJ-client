<template>
  <div class="action">
    <van-tabbar fixed border z-index="100">
      <van-goods-action safe-area-inset-bottom class="goods">
        <van-goods-action-icon
          class="kefu"
          icon="chat-o"
          text="聊天"
          :badge="$store.state.unread_msg"
          @click="liaotian"
        />
        <!-- 实时的未读消息 -->
        <van-goods-action-icon class="phone" icon="phone-o" text="电话" /><span class="shux">|</span>
        <!-- <span class="shux">|</span>
       <div class="price">￥262 <span id="price2">/晚￥328</span> </div> -->
        <div class="pric">
          <span class="price">￥{{jiage.new_price}}</span>
          <span class="price2">/晚 <s class="xhx">￥{{jiage.price}}</s> </span>
        </div>

        <van-goods-action-button color="#ff9645" 
        class="btn"
         @click="yuding"
         ref="btndisable"
         >
          <img src="/icon/detailv2_shand.png" alt="" />
          立即预定
        </van-goods-action-button>
        <!-- <van-button color="linear-gradient(90deg,#fa8c1d,#fcaf3f)" class="btn">
  预定当前房源
</van-button> -->
      </van-goods-action>
    </van-tabbar>
  </div>
</template>

<script>
import { createLogger } from 'vuex';
export default {
  props: {
    prices: {
      type: Object,
      require: true,
      default: ()=> {
        return {};
      }
    }
  },
  data() {
    return {
      jiage: this.prices
    };
  },
  watch: {
    prices(val) {
      this.jiage = val
    } 
  },
  methods: {
    liaotian()  {
      console.log(this.jiage);
      this.$router.push({
        name: 'msg',
        params: {
          uid: this.jiage.owner.sid,
          head_img: this.jiage.owner.img,
          uname: this.jiage.owner.uname
        }
      })
    },
     async yuding() {
        const toast = this.$toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          selector: '#custom-selector',
        });
        let {data:res} = await  this.$axios.get('/details/is',{params:{
          start:this.$store.state.dataDate[0],
          end:this.$store.state.dataDate[1],
          rid:this.jiage.uid
        }})
        if(res.ok==1){
          this.$store.commit('setOrderCommitInfo',this.jiage)
          this.$router.replace({path:'/order_edit'})
          this.$toast.clear()
        }else {
          this.$toast.fail(res.msg)
          this.$toast.clear()
        } 







 
    }

  },

  created() {
    // console.log('---------xxxxxxxxxx-----------');
    // console.log(this.$router.push)
    // console.log(this.$store.state.nigh)
    // console.log(this.$store.state.night)
      const startdate = Math.min.apply(null,this.$store.state.dataDate)
      const enddate = Math.max.apply(null,this.$store.state.dataDate)
      this.$axios.get(`/details/is?start=${startdate}&end=${enddate}&rid=${this.$route.query.id}`).then(result=>{
      // this.$store.commit("setIsReserve",result.data.ok)
      console.log(result.data.ok)
      // console.log('------------------------------------')
       this.$nextTick(()=>{
        
          if(this.$store.state.reserve != 1){
            
          console.log(this.$refs.btndisable)
          this.$refs.btndisable.disabled = true
          this.$refs.btndisable.color = '#a9a9a9'


    }
      }) 
    })
  
  // console.log(this.$store.state.reserve)
     

  
  }
  
}
</script>

<style lang="scss">
.action {
  .goods {
    // .kefu {

    // }
    .phone {
      margin-right: 10px;
      
    }

    .shux {
      color: rgb(226, 220, 220);
      margin-right: 5px;

    }
    .pric {


      margin-right: 30px;
      .price {
        color: #ff9645;
        font-weight: 700;
        font-size: 18px;
      }
      .price2 {
        font-size: 12px;
        color: #666;
        .xhx {
          text-decoration: line-through;
        } 
      }
    }

    .btn {
      height: 50px;

      img {
        width: 14px;
        height: 17px;
     
    
      }
    }
    .van-goods-action-button--last {
      margin-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .van-goods-action-button--first {
      margin-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
