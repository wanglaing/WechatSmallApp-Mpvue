<template>
  <div :class="isIphoneX ? 'pageViewtab isIphoneX' : 'pageViewtab'">
    <navigation-bar
      :title="'购物车'"
      :navBackgroundColor="'#ffffff'"
      :titleColor="'#222222'"
      :Navlist="[]"
      :back-visible="backVisible"
      :home-path="'/pages/home/main'"
    ></navigation-bar>
        <div v-if="CardsList.length>0" class="shoppingCards" >
          <div class="CardsManage">
            <span>商品库存有限，请尽快下单哦~~</span>
            <label @click="Edit=!Edit" v-if="Edit">完成</label>
            <label @click="Edit=!Edit" v-else>编辑</label>
          </div>
          <div class="listContent" >
            <div class="Item" v-for="(item,index) in CardsList" :key="index">
              <div class="radios" @click="hanelCardsSelect(index)">
                <i :class="item.Select===true ? 'iconfont icondanxuan_xuanzhong select' :'iconfont icondanxuan-weixuan'"></i>
              </div>
              <div class="Shop">
                <div class="Shop-Img" :style="{'backgroundImage':'url('+item.commodityModel.pic+')'}">
                </div>
                <div class="Shop-Info">
                  <h2>{{item.commodityModel.Title}}</h2>
                  <p>类型：{{item.commodityModel.ModelName}}</p>
                  <div class="ShopPrice">
                    <span class="Price">￥{{item.commodityModel.Price}}</span>
                    <QuantityPlus :value="item.Number" :index='index'  @evenVale="handelEventVaule"></QuantityPlus>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="CardsList.length>0" class="CardsQuerAll">
          <div class="radios">
            <i @click="handelQueryAll" :class="queryAllSelect===true ? 'iconfont icondanxuan_xuanzhong select' :'iconfont icondanxuan-weixuan'"></i>
            <span>全选</span>
            <span>总计：￥{{ZongPrice}}</span>
          </div>
          <template v-if="Edit">
            <div v-if="queryAllSelect"  class="btnPay disabled" @click="handelDeleteCar">删除</div>
            <div v-else class="btnPay disabled" @click="$ShowToast('~请选择需要删除的商品~','none')">删除</div>
          </template>
          <template v-else>
            <div v-if="queryAllSelect" @click="handlerPay" class="btnPay">去结算</div>
            <div v-else @click="$ShowToast('~请选择需要结算的商品~','none')" class="btnPay disabled">去结算</div>
          </template>
        </div>
        <div v-else class="NoData">
          <i class="iconfont iconwushuju"></i>
          <p>购物车空空的哦!</p>
          <a href="/pages/Product/main">去购物</a>
        </div>
    <vue-tabBar :selectNavIndex="3"></vue-tabBar>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar.vue'
import vueTabBar from '@/components/vueTabBar.vue'
import QuantityPlus from '@/components/QuantityPlus.vue'
import mixin from '@/mixin'
export default {
  mixins: [mixin],
  data () {
    return {
      Edit: false,
      queryAllSelect: true,
      barBgColor: 'transparent',
      barTitleColor: '#ffffff',
      CardsList: [
        {
          Id: 1,
          Select: true,
          commodityModel: {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 1,
            ModelName: '型号1',
            StockNumber: 100,
            Company: '件',
            Price: '299.99'
          },
          Number: 2
        }, {
          Id: 2,
          Select: true,
          commodityModel: {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 1,
            ModelName: '型号1',
            StockNumber: 100,
            Company: '件',
            Price: '299.99'
          },
          Number: 2
        }, {
          Id: 3,
          Select: true,
          commodityModel: {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 1,
            ModelName: '型号1',
            StockNumber: 100,
            Company: '件',
            Price: '299.99'
          },
          Number: 2
        }, {
          Id: 4,
          Select: true,
          commodityModel: {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 1,
            ModelName: '型号1',
            StockNumber: 100,
            Company: '件',
            Price: '299.99'
          },
          Number: 2
        }, {
          Id: 5,
          Select: true,
          commodityModel: {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 1,
            ModelName: '型号1',
            StockNumber: 100,
            Company: '件',
            Price: '299.99'
          },
          Number: 2
        }, {
          Id: 6,
          Select: true,
          commodityModel: {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 1,
            ModelName: '型号1',
            StockNumber: 100,
            Company: '件',
            Price: '299.99'
          },
          Number: 2
        }
      ]
    }
  },
  components: {
    navigationBar,
    vueTabBar,
    QuantityPlus
  },
  onShow () {
    // this.GetData()
  },
  created () {},
  methods: {
    handlerPay () {
      this.$ShowToast('~这里编写购物车支付逻辑~', 'none')
    },
    handelDeleteCar () {
      let SelectArr = []
      this.CardsList.map(item => {
        if (item.Select) {
          SelectArr.push(item)
        }
        return item
      })
      this.$ShowToast('~这里编写删除购物车逻辑~', 'none')
    },
    handelQueryAll () {
      let self = this
      this.queryAllSelect = !this.queryAllSelect
      this.CardsList = this.CardsList.map(item => {
        if (self.queryAllSelect) {
          item.Select = true
        } else {
          item.Select = false
        }
        return item
      })
      // console.log(this.CardsList)
    },
    hanelCardsSelect (i) {
      let self = this
      this.CardsList[i].Select = !this.CardsList[i].Select
      let SelectArr = []
      this.CardsList.map(item => {
        if (item.Select) {
          SelectArr.push(item)
          return item
        } else {
          return item
        }
      })
      if (SelectArr.length == 0) {
        self.queryAllSelect = false
      } else {
        self.queryAllSelect = true
      }
    },
    handelEventVaule (data) {
      this.CardsList[data.Index].Number = data.value
      if (data.value == 0) {
        this.CardsList = this.CardsList.filter(item => item.Id != this.CardsList[data.Index].Id)
      }
      // console.log(this.CardsList)
    },
    async GetData () {
      let self = this
      self.GetBanner()
    },
    async GetBanner () {
      let self = this
      self.$request({method: 'get', data: {Action: 'BannerList', Type: 1}}).then(res => {
        self.Banner = res.DecorateTypeList.map(item => {
          item.BigImgUrl = self.$config.requeststatic + item.BigImgUrl
          return item
        })
      }).catch(err => {
        // console.log(err)
      })
    },
    countIncrement () {
      this.$store.commit('increment', this.$store.state.main.count + 1)
    },
    countDecrement () {
      this.$store.commit('decrement', this.$store.state.main.count - 1)
    }
  },
  computed: {
    backVisible () {
      if (this.query.backVisible) {
        return this.query.backVisible
      }
      return false
    },
    ZongPrice () {
      let ZongJia = 0
      this.CardsList.map(item => {
        if (item.Select) {
          ZongJia += parseFloat(item.commodityModel.Price) * item.Number
        }
        return item
      })
      return ZongJia
    }
  }
}
</script>
<style lang="less">
.pageViewtab {
  padding-bottom: 110rpx;
  min-height: calc(100% - 110rpx);
  width: 100%;
  background-color: #f5f5f5;
  position: relative;
  .shoppingCards{
    .CardsManage{
      background-color: #ffffff;
      border-radius: 0 0 15rpx 15rpx;
      padding: 10rpx 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      left: 0;
      width: calc(100% - 40rpx);
      span{
        font-size:28rpx;
        color: #999;
      }
      label{
        color: #222;
        font-size:28rpx;
      }
    }
    .listContent{
      padding-top: 80rpx;
      padding-bottom: 90rpx;
      .Item{
        background-color: #ffffff;
        padding: 20rpx;
        border-top:1rpx solid #f5f5f5;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:first-child{
          border-top: 0px;
        }
        .radios{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width:70rpx;
          i{
            font-size: 40rpx;
            color: #999999;
            &.select{
              color: #ff5555;
            }
          }
        }
        .Shop{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width:calc(100% - 70rpx);
          &-Img{
            width: 140rpx;
            height: 140rpx;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: #f5f5f5;
            border-radius: 10rpx;
          }
          &-Info{
            width: calc(100% - 150rpx);
            margin-left: 10rpx;
            h2{
              font-size: 28rpx;
              color: #222;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              margin-bottom: 2rpx;
            }
            p{
              font-size: 28rpx;
              color: #999;
            }
            .ShopPrice{
              display: flex;
              justify-content: space-between;
              align-items: center;
              span{
                max-width: 49%;
              }
              .QuantityPlus{
                max-width: 49%;
              }
            }
          }
        }
      }
    }
  }
  .CardsQuerAll{
    position: fixed;
    bottom: 110rpx;
    left: 0;
    width: calc(100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    font-size: 0;
    .radios{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 28rpx;
      i{
        font-size: 40rpx;
        padding: 20rpx;
        &.select{
          color: #ff5555;
        }
      }
      span{
        &:nth-child(1){
          margin-right: 5rpx;
        }
      }
    }
    .btnPay{
      padding: 30rpx 60rpx;
      background-color: #ff5555;
      color: #ffffff;
      font-size: 28rpx;
      &.disabled{
        background-color: #666666;
      }
    }
  }
  &.isIphoneX{
    .CardsQuerAll{
      bottom: 180rpx;
    }
  }
}
</style>
