<template>
  <div class="maptabs">
    <van-tabs type="card"
    color="#ff9645"
    animated
    title-inactive-color="#666666"
  
    >
      <van-tab title="交通">
          <div class="map-local">
              <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
               <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
               <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
          </div>
      </van-tab>
      <van-tab title="景点">
            <div class="map-local">
              <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
               <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
               <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
          </div>
      </van-tab>
      <van-tab title="商超">
            <div class="map-local">
              <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
               <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
               <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
          </div>
      </van-tab>
      <van-tab title="附近">
            <div class="map-local">
              <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
               <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
               <div class="map-local-address">
                  <span class="item-left">雁栖湖旅游商品店</span>
                  <div class="item-right">
                      直线距离3.4km
                  </div>

              </div>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>


<style lang="scss">
.maptabs {
    // padding: 0  12px;
    .van-tabs__nav--card {
        border: none;
        

        .van-tab {
            border: none;
            border-radius: 5px;
            height: 23px;
            
            background-color: #f5f6f7;
            
        }
        
    }
    .van-tab__pane, .van-tab__pane-wrapper {
            padding: 0 12px;
    }
    .map-local {

        .map-local-address {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            overflow: hidden;
            .item-left {
                font-size: 12px;
                color: #333;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .item-right {
                font-size: 10px;
                color: #999;
                white-space: nowrap;
            }
        }

    }

}
</style>