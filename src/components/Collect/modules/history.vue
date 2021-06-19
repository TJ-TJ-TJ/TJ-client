<template>
  <div class="historyIndex">
    <div class="cotainer">
      <div class="cotainer-item">
        <van-image
            width="90%"
            radius="10px"
            lazy-load
            src="https://pic.tujia.com/upload/landlordunit/day_190227/thumb/201902270010198540_700_467.jpg"
        >
          <template #default>
            <div class="imageMsg">
              <div class="msg-title">
                <span class="city">
                  中国政法大学(昌平校区)，位于北京
                </span>
                <span class="message">
                  整套 · 1居1床2人 · 十三陵/居庸关长城景区
                </span>
              </div>
              <div class="msg-name">
                <span>拾全小栈</span>
              </div>
              <div class="msg-offers">
                <span>今夜特价减38</span>
              </div>
              <div class="msg-price">
                  <span class="newprice">￥150</span>
                  <span class="price">￥188</span>
                  <span class="discout">8.0折,优惠仅限今日</span>
              </div>
            </div>
          </template>

        </van-image>
<!--        图片内内容-->
<!--        <div class="position">-->
<!--          123-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.historyIndex{
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

</style>
