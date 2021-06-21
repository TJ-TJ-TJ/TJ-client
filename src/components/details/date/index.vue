<template>
  <div class="date">
    <div class="date-show" @click="$emit('dateshow',true)">
      <div class="date-item">
        <span class="item-main">{{$store.state.startDate || '06月16日'}}</span>
        <div class="item-main-text">
          <span class="week-txt">周三 入住</span>
          <img src="icon\arrow_right2x.png" alt="" class="more-icon" />
        </div>
      </div>
      <div class=".date-item">
          <span class="day-txt">共{{night}}晚</span>
      </div>
      <div class="date-item">
          <span class="item-main">{{$store.state.endDate || '06月17日'}}</span>
          <div class="item-main-text">
          <span class="week-txt">周四 离开</span>
          <img src="icon\arrow_right2x.png" alt="" class="more-icon" />
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {

        
        };
    },
   methods: {
       dateshow() {
        //    console.log(this.$refs)
        // this.$refs.dateshow.show=true
       }

   },
   computed: {
     night() {
       return this.$store.state.night
     }
   }
}
</script>

<style lang="scss">
.date {
  padding: 0 16px;
  overflow: hidden;

  .date-show {
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .date-item {
      display: flex;
      align-items: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      .item-main {
        font-size: 16px;
        color: #333;
        line-height: 15px;
        font-weight: 600;
      }

      .item-main-text {
        display: flex;
        align-items: center;
        margin-top: 2px;
        margin-left: 2px;

        .week-txt {
          font-size: 12px;
          color: #666;
          line-height: 12px;

         
        }
         .more-icon {
            width: 4px;
            height: 8px;
            margin-left: 4px;
            margin-bottom: -1px;
          }
      }
    }

    // .date-calendar {
    //     display: flex;
    //     align-items: center;
    //     white-space: nowrap;
    //     text-overflow: ellipsis;

    // }
    .day-txt {
        font-size: 11px;
        padding: 0 6px;
        border: 1px solid rgba(63,73,83,.11);
        border-radius: 50px;
        font-weight: 400;
    }
  }
}
</style>