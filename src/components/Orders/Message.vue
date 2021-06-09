<template>
  <div class="msg_center">
    <van-nav-bar title="聊天消息" left-arrow @click-left="onClickLeft" />
    <div class="msglist" v-if='kw==""'></div>

    <div class='product' v-else>
      <div class="div">
        <img :src="product.img" alt="">
        <div>
          <div>
            {{product.title}}
          </div>
          <p>
            {{product.title2}}
          </p>
        </div>
        <button class="btn">发送房屋</button>
      </div>
    </div>
    <!-- 消息区 -->
    <div class="mess_age">
      <div v-for="(item,i) in data" :key='i' :class="item.user==item.local?'right':'left'">
        <!-- 消息部分 -->
        <div class="msg">
          <!-- 如果消息是文本类型就显示文本 否则1显示语音 -->
          <div v-if='item.type==="text"'>
            你好
          </div> <!-- 三角 -->
          <div v-else class="dialog" @click='start_audio(i)' :class='{audioPlay:i==active}'>
            <span> {{item.time}}"&nbsp;</span>
            <audio :src="item.audio">
            </audio>
            <div id="done"></div>
            <div id="dtwo"></div>
            <div id="dthree"></div>
            <div id="dfour"></div>
          </div>
          <div class="tri">
          </div>
        </div>
        <!-- 头像 -->
        <div class="imgSrc">
          <img :src="item.imgsrc" alt="">
        </div>
      </div>
    </div>

    <div class="mess_foot">
      <div>
        <van-icon name="volume-o" size='30' @touchstart='send_audio' />
        <input type="text">
      </div>
      <div>
        <van-icon name="smile-o" size='30' />
        <van-button type="default" size='small'>发送</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "###",
      kw: "",
      product: {
        img: "https://pic.tujia.com/upload/qualifiedpics/day_210313/thumb/202103130127386354_221_221.jpg",
        title:
          "古北水镇～观景  Loft复式大客厅（空调+地暖+免费接送+管家式服务）",
        title2: "整套 2居3床4人",
      },
      data: [
        {
          name: "ycl",
          user: "用户",
          local: "用户",
          audio: "",
          time: "0",
          type: "text",
          imgsrc: "https://staticfile.tujia.com/IM/Images/Avatar/user.png",
        },
        {
          name: "ycl1",
          user: "老板",
          local: "商家",
          time: "16",
          type: "mp3",
          imgsrc:
            "https://pic.tujia.com/upload/landlordstorelogo/day_210426/thumb/202104261551514528_90_90.jpg",
        },
        {
          name: "ycl1",
          user: "老板",
          local: "商家",
          type: "text",
          imgsrc:
            "https://pic.tujia.com/upload/landlordstorelogo/day_210426/thumb/202104261551514528_90_90.jpg",
        },
        {
          name: "ycl1",
          user: "老板",
          local: "商家",
          time: "16",
          audio: "",
          type: "text",
          imgsrc:
            "https://pic.tujia.com/upload/landlordstorelogo/day_210426/thumb/202104261551514528_90_90.jpg",
        },
        {
          name: "ycl1",
          user: "用户",
          local: "用户",
          time: "20",
          audio: "",
          type: "mp3",
          imgsrc: "https://staticfile.tujia.com/IM/Images/Avatar/user.png",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 开始播放录音的方法
    start_audio(i) {
      if (this.active == i) {
        this.active = "###";
      } else {
        this.active = i;
      }
    },
    //发送语音
    send_audio(e) {},
  },
  mounted() {
    this.kw = 2;
  },
};
</script>
<style lang="scss">
.msg_center {
  background: white;
  .van-icon {
    color: #333;
  }
  .mess_age {
    background-color: #f7f9fb;
    height: 90vh;
    .dialog {
      text-align: right;
      height: 26px;
      display: flex;
      align-items: center;
      padding: 2px 5px !important;
    } //消息框右边的样式
    .left {
      display: flex;
      margin-left: 35px;
      justify-content: flex-end;
      align-items: center;
      padding: 15px 0;
      img {
        width: 35px;
        height: 35px;
        margin: 0 8px;
        border-radius: 50%;
      }
      .msg {
        position: relative;
        left: 5px;
        display: flex;

        justify-content: space-between;
        div {
          background-color: #fbcd64;
          padding: 8px;
          border-radius: 5px;
        }
        .tri {
          font-size: 0;
          margin: 0;
          padding: 0;
          position: relative;
          top: 10px;
          left: -1px;
          width: 0;
          height: 0;
          background-color: #f7f9fb;
          border: 8px solid transparent;
          border-left: 8px solid #fbcd64;
        }
      }
    }
    //消息框左边的样式
    .right {
      display: flex;
      padding: 15px 0;
      justify-content: flex-end; //从末尾排序
      flex-direction: row-reverse; //然后翻转
      align-items: center;
      align-items: center;
      margin-left: 8px;
      img {
        width: 35px;
        height: 35px;
        margin: 0 5px;
      }
      .msg {
        position: relative;
        right: 5px;
        display: flex;
        flex-direction: row-reverse;
        div {
          background-color: #fff;
          padding: 8px;
          border-radius: 5px;
        }
        .tri {
          font-size: 0;
          margin: 0;
          padding: 0;
          position: relative;
          top: 10px;
          width: 0;
          height: 0;
          background-color: #f7f9fb;
          border: 8px solid transparent;
          border-right: 8px solid #fff;
        }
      }
    }
  }
  //语音播放的动画
  @keyframes yuying {
    0% {
      height: 0%;
    }

    20% {
      height: 50%;
    }

    50% {
      height: 100%;
    }

    80% {
      height: 50%;
    }

    100% {
      height: 0%;
    }
  }
  #done,
  #dtwo,
  #dthree,
  #dfour {
    width: 2px;
    border-radius: 50px;
    margin: 0 2px;
    padding: 0 !important;
    background-color: rgb(230, 95, 230);
    vertical-align: middle;
    display: inline-block;
  }

  .audioPlay {
    #done {
      animation: yuying 0.6s infinite 0.15s;
      -webkit-animation: yuying 0.6s infinite 0.15s;
    }
    #dtwo {
      animation: yuying 0.6s infinite 0.3s;
      -webkit-animation: yuying 0.6s infinite 0.3s;
    }
    #dthree {
      animation: yuying 0.6s infinite 0.45s;
      -webkit-animation: yuying 0.6s infinite 0.45s;
    }
    #dfour {
      animation: yuying 0.6s infinite 0.6s;
      -webkit-animation: yuying 0.6s infinite 0.6s;
    }
  }
  #done {
    margin-left: 2px;
    height: 50%;
  }
  #dtwo {
    height: 100%;
  }
  #dthree {
    height: 70%;
  }
  #dfour {
    height: 40%;
  }
  //如果是从商品界面跳转过来则可以直接发送商品
  .product {
    border-top: 1px solid rgb(219, 216, 216);
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 6%);
    .div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 20px;
      background-color: #fff;
      img {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 50px;
        -ms-flex: 0 0 50px;
        flex: 0 0 50px;
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      div {
        width: 54.66667vw;
        overflow: hidden;
        line-height: 16px;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        font-weight: 400;
        color: #333;
      }
      p {
        margin-top: 6px;
        font-size: 11px;
        font-weight: 300;
        color: #999;
      }
      .btn {
        padding: 5px;
        line-height: 12px;
        font-size: 12px;
        border: 0.5px solid #ff9645;
        -webkit-border-radius: 4px;
        background-color: #ffffff;
        border-radius: 4px;
        color: #ff9645;
      }
      .btn:active {
        background-color: #f3f3f3;
      }
    }
  }
  .mess_foot {
    width: 100vw;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    & > div:first-child {
      display: flex;
      align-items: center;
      width: 70%;
    }
    & > div:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 30%;
    }
    input {
      width: calc(100% - 30px); //意思是父级元素减去30px的宽度
      margin: auto 10px;
      height: 35px;
      z-index: 100;
      line-height: 35px;
      padding-left: 5px;
      border: 0.5px solid #dadada;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      background: #f7f9fb;
      -webkit-appearance: none;
    }
    button {
      margin-left: 1vw;
    }
  }
}
</style>