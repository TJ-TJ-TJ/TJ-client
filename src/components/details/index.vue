<template>
  <div class="details">
    <!-- <button @click="qingq">请求</button> -->
    <nav-bar></nav-bar>
    <sw-ipe :swiper="swiper" :collhistory="collhistory" :iscollect="iscollect"></sw-ipe>
    <scroll-tab :allDate="allDate"></scroll-tab>

    <!-- <intro-duce></intro-duce>
    <hous-scource></hous-scource>
    <facil-ities></facil-ities>
    <land-lord></land-lord>
    <com-ment></com-ment>
    <not-ice></not-ice> -->
    <foo-ter></foo-ter>
    <act-ion :prices="prices"></act-ion>
  </div>
</template>

<script>
import navbar from "@/components/details/navbar";
import scrolltab from "@/components/details/scrolltab";
import swipe from "@/components/details/swipe";
// import introduce from "@/components/details/introduce";
// import HousScource from "@/components/details/houssource";
// import FacilIties from "@/components/details/facilities";
// import landLord from "@/components/details/landlord";
// import comMent from "@/components/details/comment";
// import notIce from "@/components/details/notice";
import action from "@/components/details/action";
import FooTer from "@/components/details/footer";
export default {
  data() {
    return {
      swiper: "",
      allDate: undefined,
      prices: undefined,
      collhistory: undefined,
      iscollect:'',
    };
  },
  beforeCreate() {
    console.log(this.$store.state);
  },
  // mounted() {
  //     this.$axios.get(`/details/?rid=${this.$route.query.id}`).then(result=>{
  //     const data = result.data.result;
  //     this.allDate = data;
  //     console.log(data);
  //     this.swiper = data.swiper;
  //     const { price, new_price, r_name, params, owner } = data;

  //     // console.log(price,new_price)
  //     this.prices = {
  //       price,
  //       new_price,
  //       uid: this.$route.query.id,
  //       fm: this.swiper[0].url[0],
  //       bt: r_name,
  //       fbt: params,
  //       owner: owner,
  //     };
  //     // console.log(this.prices)
  //     // console.log(this.$route)
  //     // console.log(this.prices);
  //   });d
  // },

  async created() {

    console.log('----------------------- detail');
    let { data: data } = await this.$axios.get(
      `/details/?rid=${this.$route.query.id}`
    );
    console.log(data.result.swiper);
    const dataes = data.result;
    this.allDate = dataes;
    console.log(this.allDate);

    this.swiper = dataes.swiper;
    const { price, new_price, r_name, params, owner, con_title, discuss, isCollect} =
      dataes;

    // console.log(price,new_price)
    this.prices = {
      price,
      new_price,
      uid: this.$route.query.id,
      fm: this.swiper[0].url[0],
      bt: r_name,
      fbt: params,
      owner: owner,
    };
    let imgurl = data.result.swiper;

    let collectionHistory = {
      rid: this.$route.query.id,
      imgList: imglist,
      title: r_name,
      params: params,
      score_count: discuss.length + 1,
      con_title: con_title,
      price: price,
      new_price: new_price,
    }
    this.collhistory = collectionHistory
    this.iscollect = isCollect



  console.log(this.iscollect)
    let imglist = imgurl.map((item) => {
      return item.url[0];
    });

    let { data: res } = await this.$axios.post("/profile/history",collectionHistory);
    // console.log(res)

    //  let imglist=[];
    //  for(let k in imgurl){
    //     //  console.log()
    //      imglist.push(imgurl[k].url[0])
    //  }
    //  console.log(imglist)

    // })
    // console.log(imglist)

    // let {data: his} = await this.$axios.post('/profile/history', {
    //   rid: this.$route.query.id,
    //   imgList
    //   title
    //   params
    //   params
    //   score_count
    //   con_title
    //   price
    //   new_price

    // })
  },
  components: {
    "nav-bar": navbar,
    "scroll-tab": scrolltab,
    "sw-ipe": swipe,
    // "intro-duce": introduce,
    // HousScource,
    // FacilIties,
    // landLord,
    // comMent,
    // notIce,
    FooTer,
    "act-ion": action,
  },
  // methods: {
  //   qingq() {

  //     this.axios.get('/details/?rid=60c164a7074200005d003192').then(result=>{
  //       console.log(result)
  //     })

  //   }
  // }
};
</script>
<style lang="scss"></style>
