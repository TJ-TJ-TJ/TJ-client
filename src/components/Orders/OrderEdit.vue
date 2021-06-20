<template>
  <div class="order_edit">
    <van-nav-bar title="订单填写" left-text="." left-arrow  @click-left="onClickLeft" class="header" />
    <!-- 头部用户信息 -->
    <div class="order_info">
      <div class="head">
        <img style="width:60px;height:60px;border-radius:6px;" src="https://pic.tujia.com/upload/qualifiedpics/day_201130/thumb/202011301839083086_700_467.jpg" alt="">
        <div>
          <p class="title">近S1线近商圈温馨私享，悦景湾靠近天街！</p>
          <span>整套出租 | 1室1厅 | 1床 | 最多住3人</span>
        </div>
      </div>
      <div class="body">
        <div>
          <div>06月08日</div>
          <p>周二14:00-24:00</p>
        </div>
        <div style="font-weight: 600">-</div>
        <div>
          <div>06月09日</div>
          <p>周三12:00前离开</p>
        </div>
        <div>
          <span style="font-size:12px;color:#ff9654"> 共一晚<img src="https://pic.tujia.com/upload/festatic/publicImages/form_arrow_right.png" alt=""></span>
        </div>
      </div>

      <div class="foot">
        <div>
          <img src="https://pic.tujia.com/upload/festatic/crn/c_icon_correct.png" alt="">
          <div>30分钟免费取消 &nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div>
          <img src="https://pic.tujia.com/upload/festatic/crn/c_icon_lightning.png" alt="">
          <div>立即确认</div>
        </div>
      </div>

    </div>
    <!-- 波浪线部分 -->
    <div class="bottom"></div>

    <!-- 选择用户信息 -->
    <div class="check_info">
      <!-- 卡片 -->
      <div class="card">
        <header class="head">入住信息</header>
        <div class="body">
          <div class="top">
            <div>
              入住人<img style="width:16px;height:16px" src="https://pic.tujia.com/upload/festatic/publicImages/tips_warn.png" alt="">
            </div>
            <div class="right" @click="gocheck">
              添加/编辑
            </div>
          </div>
          <div class="bot">
            <!-- 待改善  可遍历形式的按钮就行了 且可更改样式 -->
            <span v-for="(item,i) in user_info" :key="i">
              <button v-if="item.person_show" @click="changeedit(i)">{{item.uname}} <van-badge color="#ff9645">
                  <div class="child" />
                  <template #content>
                    <van-icon name="success" />
                  </template>
                </van-badge></button>
              <button v-else class="fei_show" @click="changeedit(i)">
                {{item.uname}}
              </button>
            </span>
          </div>
        </div>
        <footer class="foot">
          <div class="left">
            联系电话+86
            <img style="width:6px;height:6px" src="https://pic.tujia.com/upload/festatic/publicImages/jiantou-order.png" alt="">
          </div>
          <div class="right">
            17630902513
            <div class="icon"></div>
          </div>
        </footer>
      </div>

      <div class="topic">
        <div>点评积分</div>
        <div>点评最高可获800积分，可在积分商城使用</div>
      </div>

      <div class="footer">
        <div class="title">入住提示</div>
        <p>房东确认后，可使用在线聊天工具向房东索要入住指南，快速了解入住路线、入住方式等相关事宜。</p>
        <p>入住期间如有疑问，可随时联系在线客服。</p>
        <p>有未成年人入住时，需要将其监护人的联系方式告知房东。</p>
        <div class="title">费用说明</div>
        <p><span>加人费：</span>该房源宜住人数为2人，超出宜住人数则需收取加人费¥100.00/人/晚。</p>
        <p><span>押金说明：</span>免押入住，订房更轻松</p>
        <p><span>发票：</span>如需房费发票, 请离店后到个人中心开具发票</p>
      </div>

    </div>

    <!-- 底部固定 -->
    <div class="bot_fixed">
      <div>
        <div>
          {{'￥'+1172.00.toFixed(2)}}
          <!-- <div>含押金:200</div> -->
        </div><span>明细</span>
      </div>
      <div>
        <p>

        </p>
        <van-button type="primary" color="#ff9645" size="normal" @click="go_pay">提交订单</van-button>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      user_info: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "当前订单未完成 确认要离开吗",
        })
        .then(() => {
          this.$router.push('/order');
        })
        .catch(() => {
          return;
        });
    },
    changeedit(i) {
      this.user_info[i].person_show = !this.user_info[i].person_show;
    },
    gocheck() {
      this.$router.push("/check_person");
    },
    go_pay(){
      this.$router.push('/order_pay')
    }
  },
  mounted() {
    let obj = JSON.parse(sessionStorage.getItem("check_person"));
    console.log(obj);
    this.user_info = obj;
  },
};
</script>
<style lang="scss">
.order_edit {
  word-wrap: break-word;
  .header {
    .van-icon {
      color: #ff9654 !important;
    }
    .van-nav-bar__text {
      width: 32px;
      height: 15px;
      background-image: url(https://pic.tujia.com/upload/festatic/publicImages/mob-TjHeader-header-logo.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .order_info {
    display: flex;
    flex-direction: column;
    padding: 0 15px 16px;
    .head {
      display: flex;
      justify-content: flex-start;
      padding: 16px 0;
      div {
        margin-left: 15px;
        .title {
          width: 90%;
          display: -webkit-box;
          font-size: 15px;
          line-height: 21px;
          color: #333;
          font-weight: 600;
          max-width: 100%;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
        }
      }

      span {
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 4px;
        font-size: 11px;
        line-height: 15px;
        color: #999;
      }
    }
    .body {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      div {
        text-align: left;
        div {
          font-size: 16px;
          color: #333;
          text-align: left;
          font-weight: 600;
        }
      }
      img {
        width: 7px;
        height: 12px;
        margin-left: 8px;
      }
      p {
        width: 100%;
        height: 20px;
        font-size: 11px;
        color: #999;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .foot {
      display: flex;
      div {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #17d2bc;
      }
      img {
        width: 11px;
        height: 11px;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 18px;
    background: url(https://pic.tujia.com/upload/festatic/day_190122/201901221103322734.png)
      repeat-x;
    background-color: #f7f9fb;
    background-size: contain;
  }
  .check_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f7f9fb;
    padding: 5px 15px 70px 15px;
    .card {
      width: 100%;
      box-sizing: border-box;
      background-color: #fff;
      padding: 0 10px;
      border-radius: 6px;
      .head {
        width: 100%;
        height: 55px;
        line-height: 55px;
        color: #333;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px solid rgb(240, 240, 240);
      }
      .body {
        display: flex;
        flex-direction: column;
        .top {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          div {
            display: flex;
            align-items: center;
          }
          .right {
            font-size: 13px;
            color: #ff9645;
            font-weight: bold;
          }
        }
        .bot {
          padding: 15px 5px;
          border-bottom: 1px solid rgb(240, 240, 240);
          .van-badge--fixed {
            position: absolute;
            top: 5px !important;
            right: -10px !important;
          }
          button {
            width: 73px;
            height: 28px;
            border-radius: 6px !important;
            font-size: 14px;
            margin: 0 5px;
            font-weight: 100;
            border: 1px solid #ff9645;
            color: #ff9645;
          }
          .fei_show {
            border: 1px solid #e9e9e9 !important;
            background-color: #fff !important;
            color: #e9e9e9;
            font-size: 14px;
            font-weight: 100;
          }
        }
      }
      .foot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        .left {
          font-size: 13px;
          color: #333;
          font-weight: 700;
        }
        .right {
          display: flex;
          align-items: center;
          .icon {
            display: inline-block;
            background-color: red;
            background-color: var(--tjc-theme, #ff9645);
            -webkit-mask: url(https://pic.tujia.com/upload/festatic/publicImages/phone-icon-new.png)
              no-repeat;
            mask: url(https://pic.tujia.com/upload/festatic/publicImages/phone-icon-new.png)
              no-repeat;
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            width: 18px;
            height: 18px;
            margin-left: 20px;
          }
        }
      }
    }
    .topic {
      display: flex;
      justify-content: flex-start;
      background-color: #fff;
      margin-top: 15px;
      padding: 15px 10px;
      & > div:first-child {
        width: 50px;
        height: 15px;
        font-size: 12px;
        border: 1px solid #ff9645;
        color: #ff9645;
      }
      & > div:last-child {
        display: flex;
        align-items: center;
        margin-left: 5px;
        font-size: 12px;
        color: #666;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .footer {
      margin-top: 16px;
      .title {
        font-size: 13px;
        font-weight: 900;
        color: #333;
        line-height: 16px;
        margin-top: 10px;
        margin-bottom: 6px;
      }
      span {
        color: #333;
        font-weight: 900;
      }
      p {
        font-size: 11px;
        line-height: 16px;
        color: #666;
      }
    }
  }
  .bot_fixed {
    background-color: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 15px;
    color: #ff9645;
    & > div:first-child {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      div {
        font-size: 18px;
        div {
          display: block;
          font-size: 11px;
          color: #999;
          margin-top: 3px;
        }
      }
      span {
        position: relative;
        width: 28px;
        text-align: right;
        font-size: 11px;
        color: #ff9645;
      }
    }
    & > div:last-child {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 30%;
      padding-right: 10px;
      p {
        display: inline-block;
        background-image: url(https://fe.tujiacdn.com/mob/static/img/page-unitOrder.7d75bdbc.png);
        background-position: -91px -52px;
        width: 6px;
        height: 6px;
        background-size: 115.5px 107px;
        margin-right: 5px;
      }
      button {
        border-radius: 5px !important;
      }
    }
  }
}
</style>