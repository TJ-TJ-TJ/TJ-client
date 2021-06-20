<template>
  <div class="reportIndex">
    <div class="cardBox">
      <div class="continer">
        <div class="title">
          <span>个人基本信息</span>
        </div>
        <div class="user-msg">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
              v-model="value1"
              name="pattern"
              label="姓名"
              placeholder="姓名"
            />
            <van-field
              v-model="value2"
              name="pattern"
              label="证件号"
              placeholder="身份证号"
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
              placeholder="手机号"
            />
            <!-- 地区选择 -->
            <van-field
              readonly
              name="picker"
              :value="value4"
              label="14日所在城市"
               class="van-cll"
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
             <!-- 地区选择2 -->
            <van-field
              readonly
              name="picker1"
              :value="value5"
              label="14日所在城市"
              placeholder="点击选择城市"
               class="van-cll"
               v-show="field2"
            >
            <template #input>
                <span @click="showPicker1 = true">{{value5}}</span>
                <van-icon class="addIcon" name="close" @click="minusField"/>
            </template>
            </van-field>
            <van-popup v-model="showPicker1" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns1"
                @confirm="onConfirm1"
                @cancel="showPicker1 = false"
              />
            </van-popup>
             <!-- 地区选择3 -->
            <van-field
              readonly
              name="picker2"
              :value="value6"
              label="14日所在城市"
              placeholder="点击选择城市"
               class="van-cll"
               v-show="field3"
            >
            <template #input>
                <span @click="showPicker2 = true">{{value6}}</span>
                <van-icon class="addIcon" name="close" @click="minusField2"/>
            </template>
            </van-field>
            <van-popup v-model="showPicker2" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns2"
                @confirm="onConfirm2"
                @cancel="showPicker2 = false"
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
            <div class="btnSet">
              <van-button color="#07C3F2" block>提交</van-button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "点击选择城市",
      value5: "",
      value6: "",
      columns: [],
      columns1: [],
      columns2: [],
      showPicker: false,
      showPicker1: false,
      showPicker2: false,
      radio: "",
      radio1:"",
      pattern: /\d{6}/,
      num:1,
      field2:false,
      field3:false
    };
  },
  created(){
    axios.defaults.baseURL = 'http://tj.testw.top/'
      this.$axios.get('/json/province.json').then((res)=>{
          console.log(res)
          for(let k of res.data){
            //   console.log(k)
              this.columns.push(k.name)
              this.columns1.push(k.name)
              this.columns2.push(k.name)
          }
          axios.defaults.baseURL = 'http://tj.testw.top/v1'
      })
  },
  mounted(){
      
  },
  watch:{
    num(val){
      if(val==1){
        this.field2 = false
        this.field3 = false
      }else if(val==2){
        this.field2 = true
        this.field3 = false
      }else if(val==3){
        this.field3 = true
      }else{
        val = 3
      }
    }
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
    // onFailed(errorInfo) {
    //   console.log("failed", errorInfo);
    // },
    // 地区选择
    onConfirm(value) {
      this.value4 = value;
      this.showPicker = false;
    },
    onConfirm1(value) {
      this.value5 = value;
      this.showPicker1 = false;
    },
    onConfirm2(value) {
      this.value6 = value;
      this.showPicker2 = false;
    },
    // 添加所在城市
    addField(){
      if(this.value4!=='' && this.value4!=="点击选择城市"){
        this.num++
      }
    },
    minusField(){
      this.num = 1
    },
    minusField2(){
      this.num = 2
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
        border-left: 5px solid #FA9425;
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
  .btnSet{
    width: 100%;
    height: 10vh;
    // background-color: red;
    display: flex;
    margin-left: 3vw;
    .van-button{
      width: 100%;
    }
  }
}
</style>
