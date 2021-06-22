<template>
  <div class="myorder">
    <h4 class="order_title">订单列表</h4>
    <van-tabs v-model="active" class="order_list" animated color="#ff9645">
      <van-tab v-for="(item, i) of order_type" :key="i" :title="item">
        <div v-if="order.length > 0">
          <div v-for="(item, i) of order" :key="i" class="order_detail">
            <div class="order_content" @click="go_detail(item.oid,item.rid,item.price,calc(item.state),getdate(item.start_time),getdate(item.end_time))">
              <div class="detail_head">
                <p>
                  {{ item.title }}
                </p>
                <div>
                  <span>
                    {{ calc(item.state) }}
                    <!-- 订单状态 0待支付 1已支付 2 已使用 3已超时 -->
                  </span>
                </div>
              </div>

              <div
                class="detail_body"
                :style="{ backgroundImage: `url(${item.cover})` }"
              >
                <div style="display: flex">
                  <div class="text">
                    <p>{{ getdate(item.start_time) }}</p>
                    <p>{{ getzhou(item.start_time) }}</p>
                  </div>
                  <div>
                    <svg
                      t="1623141143116"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="19236"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M78.443 550.032l733.558 0-187.319 180.328c-4.795 4.796-4.79500001 12.57 0 17.367l37.627 37.627c4.796 4.795 12.57 4.79500001 17.367 0l235.807-227.011c0.272-0.229 0.541-0.465 0.797-0.721l1.259-1.259 36.367-35.009c2.567-2.568 3.746-5.99 3.564-9.352 0.188-3.369-0.991-6.8-3.562-9.372l-37.627-36.267c-0.243-0.241-0.496-0.463-0.752-0.68l-235.852-227.05c-4.796-4.797-12.57-4.797-17.367 0l-37.627 37.627c-4.795 4.795-4.795 12.569 0 17.367l185.562 178.637-731.8 0c-6.783 0-12.28 5.498-12.28 12.28000001l0 53.21299999c0 6.781 5.497 12.28 12.28 12.28z"
                        p-id="19237"
                        fill="#ff9645"
                      ></path>
                    </svg>
                  </div>
                  <div class="text">
                    <p class="p1">{{ getdate(item.end_time) }}</p>
                    <p class="p2">{{ getzhou(item.end_time) }}</p>
                  </div>
                  <div style="width: 1px; height: 35px; background: #fff"></div>
                  <div>
                    <p class="p1">支付总价</p>
                    <p class="p2">￥{{ item.price }}</p>
                  </div>
                </div>
              </div>

              <div class="detail_foot">
                <p>
                  <button type="default" @click.stop="delete_order">
                    删除
                  </button>
                  <button type="default" @click.stop="go_order">
                    再次预定
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="order_end">
            <p>已显示全部订单</p>
            <!-- <span>查看全部订单</span> -->
          </div>
        </div>
        <div v-else>
          <img
            class="order_status"
            src="https://fe.tujiacdn.com/mob/static/img/icon-norder.191ba321.png"
            alt=""
          />
          <h3>近期暂无订单</h3>
        </div>
      </van-tab>
    </van-tabs>
    <table-bar></table-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uid: "",
      active: 0,
      order_type: ["全部订单", "待支付", "已支付", "已使用",'已超时'],
      order: [],
    };
  },
  methods: {
    go_detail(oid,rid,price,state,start_time,end_time) {
      this.$router.push({ name: "oder_detail", params: { oid,rid,price,state,start_time,end_time } });
    },
    delete_order() {
      // 删除订单
      this.$dialog
        .confirm({
          title: "提示",
          message: "您确定要删除订单吗",
        })
        .then(() => {
          // 删除接口
        })
        .catch(() => {
          return;
        });
    },
    go_order() {
      this.$router.push("/order_edit");
      //再次购买订单
    },
  },
  async created() {
    this.uid = localStorage.getItem("uid");
    let obj = await this.$axios.get(`order/list?state=${this.active-1}`);
    console.log(obj);
    if (!obj) {
      return;
    } else {
      //后续是向后台获取数据
      this.order = obj.data.result ||[]
    }
  },
  async mounted() {},
  watch: {
    async active(newval,oldval) {
      let obj = await this.$axios.get(`order/list?state=${newval-1}`);
      this.order=obj.data.result||[]
    },
  },
  computed: {
    //计算订单状态
    calc(i) {
      return function (i) {
        let arr = ["待支付", "已支付", "已使用", "已超时"];
        let res = arr[i];
        return res;
      };
    },
    //计算几月几日
    getdate(i) {
      return function (i) {
        let date = new Date(parseInt(i) * 1000);
        date = `${date.getMonth() + 1}月${date.getDate()}日`;
        return date;
      };
    },
    //计算周几 几点
    getzhou(i) {
      return function (i) {
        let date = new Date(parseInt(i) * 1000);
        date = `周${date.getDay()} ${date.getHours()}时${date.getMinutes()}分`;
        return date;
      };
    },
  },
};
</script>
<style lang="scss">
.myorder {
  height: 100vh;
  background-color: #f7f9f8;
  .order_title {
    text-align: center;
    padding: 10px 0;
    background-color: #fff;
    box-shadow: 0 1px grey;
  }
  .order_list {
    text-align: center;
    .order_detail {
      margin-top: 10px;
      padding: 0 0 15px 0;
      background-color: #fff;
      .order_content {
        width: 90%;
        margin: 0 auto;
        .detail_head {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 18px 0;
          div {
            text-align: right;
            color: #ff9645;
            font-size: 18px;
          }
          p {
            width: 50%;
            height: 27px;
            line-height: 27px;
            overflow: hidden;
            font-size: 13px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .detail_body {
    width: 100%;
    height: 223px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    .text {
      height: 50%;
      display: flex;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    & > div:first-child {
      height: 60px;
      width: 100%;
      box-sizing: border-box;
      padding: 0 15px;
      background: rgba(9, 10, 14, 0.7);
      border-radius: 0 0 6px 6px;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: space-between;
      & > div:first-child {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        color: #fff;
      }
      & > div {
        color: #fff;
        font-size: 14px;
        height: 50%;
      }
      & > div:last-child {
        & > p:last-child {
          color: #ff9645;
          font-size: 20px;
        }
      }
      p1 {
        font-size: 16px;
      }
      p2 {
        font-size: 12px;
      }
    }
  }
  .detail_foot {
    display: flex;
    justify-content: flex-end;
    p {
      width: 45%;
      display: flex;
      justify-content: space-between;
      button {
        width: 73px;
        height: 28px;
        margin-top: 15px;
        border-radius: 6px !important;
        border: 1px solid #e9e9e9;
        background-color: #fff;
        font-size: 14px;
        font-weight: 100;
      }
      & > button:last-child {
        border: 1px solid #ff9645;
        color: #ff9645;
      }
      button:active {
        background-color: #f3f3f3;
      }
    }
  }
  .order_status {
    width: 365px;
    height: 265px;
    display: block;
    margin: 0 auto;
    margin-top: 80px;
  }
  .order_end {
    p {
      color: #999;
      font-size: 13px;
      line-height: 50px;
      text-align: center;
    }
    span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #ff9645;
      text-align: center;
      line-height: 14px;
      text-decoration: underline;
    }
  }
}
</style>