<template>
  <div class="reportIndex">
    <div class="cardBox">
      <div class="continer">
        <div class="title">
          <span>个人基本信息</span>
        </div>
        <div class="user-msg">
          <van-form validate-first @failed="onFailed">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
              v-model="value1"
              name="pattern"
              label="姓名"
              placeholder="正则校验"
              :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <van-field
              v-model="value2"
              name="pattern"
              label="证件号"
              placeholder="正则校验"
              :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <van-field name="radio" label="性别">
              <template #input>
                <van-radio-group v-model="radio" direction="horizontal">
                  <van-radio name="1">男</van-radio>
                  <van-radio name="2">女</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field
              v-model="value3"
              name="pattern"
              label="手机号"
              placeholder="正则校验"
              :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <!-- 地区选择 -->
            <van-field
              readonly
              name="picker"
              :value="value4"
              label="14日所在城市"
              placeholder="点击选择城市"
               class="van-cll"
               v-for="item in num"
               :key="item"
            >
            <template #input>
                <span @click="showPicker = true">{{value4}}</span>
                <van-icon class="addIcon" name="add-o" @click="addField"/>
            </template>
            </van-field>
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
              />
            </van-popup>
            <!-- 疫苗接种记录 -->
             <van-field class="radio1" name="radio1" label="有无接种疫苗" ref="radioRef">
              <template #input>
                <van-radio-group v-model="radio1" direction="horizontal">
                  <van-radio name="1">是</van-radio>
                  <van-radio name="2">否</van-radio>
                </van-radio-group>
              </template>
            </van-field>
          </van-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4:"",
      columns: [],
      showPicker: false,
      radio: "",
      radio1:"",
      pattern: /\d{6}/,
      num:1
    };
  },
  created(){
      this.$axios.get('json/province.json').then((res)=>{
          console.log(res)
          for(let k of res.data){
            //   console.log(k)
              this.columns.push(k.name)
          }
      })
  },
  mounted(){
      
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    // 地区选择
    onConfirm(value) {
      this.value4 = value;
      this.showPicker = false;
    },
    // 添加所在城市
    addField(){
      this.num++
    }
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
  background-color: #f0f3f6;
}

.reportIndex {
  .cardBox {
    width: 90vw;
    height: 90vh;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 5vh;
    .continer {
      width: 80vw;
      height: 100%;
      // background-color: red;
      margin: 0 auto;
      .title {
        float: left;
        margin-top: 3vh;
        border-left: 5px solid blue;
        span {
          margin-left: 3vw;
          font-weight: bold;
          font-size: 20px;
        }
      }
      .user-msg {
        float: left;
        margin-top: 2vh;
        .van-field {
          margin-bottom: 3vh;
        }
      }
    }
  }
  .van-cll{
      span{
          width: 35vw;
          height: 3vh;
          float: left;
          margin-right: 5vw;
      }
  }
}
</style>
