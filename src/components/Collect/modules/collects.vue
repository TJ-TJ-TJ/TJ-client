<template>
  <div class="historyIndex">
    <!-- 没有收藏状态 -->
    <van-empty v-if="result.length==0"
    description="暂无收藏"
    image="https://fe.tujiacdn.com/mob/static/img/empty_favorite.44731802.png">
      <van-button color="#ff9645" round type="danger"  size="normal" @click="$router.push('/')" class="bottom-button">
        随便去逛逛
      </van-button>
    </van-empty>
    <!-- 有收藏状态 -->
    <div v-else class="collectBox">
      <div class="cotainer" v-for="item in result" :key="item.rid">
        <div class="cotainer-item" @click="$router.push('/details?id='+item.rid)">
          <van-image
              width="90%"
              radius="10px"
              lazy-load
              :src="item.img[0]"
          >
            <template #default>
              <div class="imageMsg">
                <div class="msg-title">
                  <span class="city">
                    {{item.title}}
                  </span>
                  <span class="message">
                    {{item.params.attr}} · {{item.params.house}}居{{item.params.bed}}床{{item.params.person_count}}人
                  </span>
                </div>
                <div class="msg-price">
                    <span class="newprice">{{item.new_price}}</span>
                    <span class="price">{{item.price}}</span>
                    <span class="discout"></span>
                    <span class="discout" v-if="item.con_title!==''">{{item.con_title}}</span>
                </div>
              </div>
            </template>
          </van-image>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: []
    }
  },
  created() {
    this.collectList()
  },
  methods: {
    async collectList() {
      const {data: ret} = await this.$axios.get('/profile/collect', {token:window.localStorage.getItem('token')})
      this.$toast.loading('加载中')
      if(ret.result.length === 0) {
        return this.$toast('您还没有任何收藏')
      }
      this.result = ret.result
    }
  }
}
</script>

<style lang="scss">
.historyIndex{
.bottom-button {
  width: 30vh;
}
.collectBox {
  .cotainer{
  margin-top: 2vh;
  width: 100%;
  .cotainer-item{
    text-align: center;
    position: relative;
    .van-image{
      .imageMsg{
        width: 100%;
        //height: 5vh;
        //background-color: red;
        .msg-title{
          margin-top: 10px;
          font-size: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .city{
            background: #3f4954;
            border-radius: 2px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #fff;
            line-height: 14px;
            display: inline-flex;
            margin-right: 4px;
            padding: 1px 2px;
            box-sizing: content-box;
          }
        }
        .msg-name{
          display: flex;
          span{
            line-height: 22px;
            font-size: 18px;
            margin-top: 8px;
            overflow: hidden;
            font-family: PingFangSC-Medium,Helvetica Neue,Arial,sans-serif;
            font-weight: 500;
          }
        }
        .msg-offers{
          display: flex;
          margin-top: 5px;
          span{
            color: rgb(255, 102, 102);
            background-color: rgba(255, 102, 102, 0.1);
            justify-content: center;
            margin-right: 5px;
            padding: 0 4px;
            font-size: 10px;
            border-radius: 2px;
          }
        }
        .msg-price{
          display: flex;
          span{
            margin-right: 10px;
          }
          .newprice{
            font-size: 20px;
            color: var(--tjc-theme-price,#ff9645);
          }
          .price{
            text-decoration: line-through;
            font-weight: 500;
            font-size: 12px;
            color: #999;
            line-height: 30px;
          }
          .discout{
            color: rgb(255, 255, 255);
            margin-top: 5px;
            border-radius: 7px;
            background-image: linear-gradient(
                    -270deg
                , rgb(251, 74, 74) 1%, rgb(255, 102, 102) 99%);
            height: 16px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            font-size: 10px;
            padding: 0 5px;
          }
        }
      }
    }
    // 图片内内容
    //.position{
    //  position: absolute;
    //  z-index: 1;
    //  top: 0;
    //}
  }
}
}
}
.txt {
  font-size: 11px;
  color: #999;
  text-align: center;
  margin-top: 5vh;
}
</style>
