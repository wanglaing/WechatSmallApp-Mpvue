<template>
  <div class="commodityModel">
    <div class="ModelContainer fixed animated fadeIn faster">
      <div class="masks" @click="handelClose(false)"></div>
      <div class="commodity animated fadeInUp faster">
        <div class="ShopInfo">
          <div class="ShopImg" :style="{backgroundImage:'url(' + commodityModel.Img + ')'}"></div>
          <div class="shopTitle">
            {{ commodityModel.Name }}
          </div>
        </div>
        <div class="ModelInfo">
          <div class="Title">类型：</div>
          <div class="ModelItem">
            <span
              v-for="(item, index) in commodityModel.Model"
              :key="index"
              :class="ModelIndex === index ? 'active' : ''"
              @click="handModeChange(item, index)"
              >{{ item.Name }}</span>
          </div>
          <div class="StockNumber">剩余{{commodityModel.Model[ModelIndex].StockNumber+' '+commodityModel.Model[ModelIndex].Units}}</div>
        </div>
        <div class="ModeNumber">
          <div class="Title">数量：</div>
          <QuantityPlus @evenVale="evenVale"></QuantityPlus>
        </div>
        <div class="ShopCoupon">
          <div class="Title">优惠卷</div>
          <div class="CouponInfo" v-if="CouponType === 0">
            <text>暂无优惠卷可用</text>
          </div>
          <div class="CouponInfo" v-else-if="CouponType === 1" @click="handCouponModel()">
            <text>不使用优惠卷</text>
          </div>
          <div class="CouponInfo active" v-else @click="handCouponModel()">
            <template v-if="CouponId == null">{{CouponName}}</template>
            <template v-else-if="CouponId == -1">不使用优惠卷</template>
            <template v-else>
              <text>-￥{{ CouponNumber }}</text>
            </template>
          </div>
        </div>
        <div class="ByInfo">
          <div class="SelectShopInfo">
            <span>已选：{{ commodityModel.Model[ModelIndex].Name }} x{{ModelNumber}}</span>
            <span>共<text>￥{{ZongPrice}}</text></span>
          </div>
          <div class="ByBtn" v-if="IsPayType===1">
            <a @click="handelShoppingCart({'ShopID':commodityModel.Id,'Shops':JSON.stringify(shops),'ModelIndex':ModelIndex,'Model': JSON.stringify(commodityModel.Model[ModelIndex]),'ModelID':commodityModel.Model[ModelIndex].Id,'Number':ModelNumber,'CouponId':CouponId,'CouponNumber':CouponNumber,'ZongPrice':ZongPrice})" >加入购物车</a>
          </div>
          <div class="ByBtn" v-if="IsPayType===2">
            <a @click="handelShoppingPay({'ShopID':commodityModel.Id,'Shops':JSON.stringify(shops),'ModelIndex':ModelIndex,'Model': JSON.stringify(commodityModel.Model[ModelIndex]),'ModelID':commodityModel.Model[ModelIndex].Id,'Number':ModelNumber,'CouponId':CouponId,'CouponNumber':CouponNumber,'ZongPrice':ZongPrice})" >立即购买</a>
          </div>
          <div class="ByBtn" v-if="IsPayType===3">
            <a @click="handelShoppingPay({'ShopID':commodityModel.Id,'Shops':JSON.stringify(shops),'ModelIndex':ModelIndex,'Model': JSON.stringify(commodityModel.Model[ModelIndex]),'ModelID':commodityModel.Model[ModelIndex].Id,'Number':ModelNumber})" >支付定金</a>
          </div>
        </div>
      </div>
    </div>
    <CouponModel
      v-if="ShowCouponModel"
      :coupon="Coupon"
      @CouponModelState="CouponModelState"
      @handelUse="handelUse"
      @handNoUser="handNoUser"
    ></CouponModel>
  </div>
</template>

<script>
import QuantityPlus from '@/components/commodityModel/QuantityPlus.vue'
import CouponModel from '@/components/commodityModel/CouponModel.vue'
export default {
  data () {
    return {
      ShowCouponModel: false,
      ModelIndex: 0,
      ModelNumber: 1,
      CouponNumber: 0,
      CouponType: 2,
      CouponId: null,
      CouponName: '请选择优惠卷'
    }
  },
  props: {
    coupon: {
      type: Object,
      default: {
        'IsUse': 1,
        'List': [
          {
            'Id': 1,
            'Price': '50',
            'Name': '全场通用优惠卷',
            'Remarks': '会员优惠卷',
            'validity': '2020-05-30'
          }
        ]
      }
    },
    IsPayType: {
      type: Number
    },
    shops: {
      type: Object
    },
    commodityModel: {
      type: Object,
      default: {
        pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
        Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
        Id: 1,
        Model: [
          {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 1,
            ModelName: '型号1',
            StockNumber: 100,
            Company: '件',
            Price: '688'
          },
          {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 2,
            ModelName: '型号2',
            StockNumber: 100,
            Company: '件',
            Price: '688'
          },
          {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 3,
            ModelName: '型号3',
            StockNumber: 100,
            Company: '件',
            Price: '688'
          },
          {
            pic: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
            Title: '【全国200家酒店1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！',
            ModelId: 4,
            ModelName: '型号4',
            StockNumber: 100,
            Company: '件',
            Price: '688'
          }
        ]
      }
    }
  },
  components: {
    QuantityPlus,
    CouponModel
  },
  created () {},
  mounted () {},
  beforeMount () { },
  computed: {
    ZongPrice () {
      return (parseFloat(this.commodityModel.Model[this.ModelIndex].Price) * parseInt(this.ModelNumber)) - this.CouponNumber
    }
  },
  methods: {
    handelShoppingCart (item) {
      let self = this
      self.$emit('handelShoppingCart', item)
    },
    handelShoppingPay (item) {
      let self = this
      self.$emit('handelShoppingPay', item)
      wx.navigateTo({
        url: '../ShopOrderPay/main?' + self.$JsonToParam(item)
      })
    },
    handelClose (State) {
      this.$emit('handelClose', State)
    },
    handelUse (item) {
      this.CouponNumber = item.Price
      this.CouponId = item.Id
      this.CouponName = item.Name
      this.ShowCouponModel = false
    },
    handNoUser (data) {
      this.CouponNumber = 0
      this.CouponId = -1
      this.ShowCouponModel = false
    },
    CouponModelState (State) {
      this.ShowCouponModel = State
    },
    handModeChange (item, i) {
      this.ModelIndex = i
      this.$emit('$eventModelId', item.ModelId)
    },
    handCouponModel () {
      this.ShowCouponModel = true
    },
    evenVale (data) {
      this.ModelNumber = data
      this.$emit('$eventVal', data)
    }
  }
}
</script>

<style lang="less">
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
}
.commodityModel {
  .ModelContainer {
    .masks {
      background-color: #000000;
      opacity: 0.5;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    .commodity {
      position: absolute;
      z-index: 1;
      background-color: #ffffff;
      border-radius: 30rpx 30rpx 0 0;
      width: calc(100% - 60rpx);
      padding: 30rpx;
      bottom: 0;
      .ShopInfo {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        border-bottom: 1rpx solid #f5f5f5;
        padding-bottom: 20rpx;
        .ShopImg {
          width: 130rpx;
          height: 130rpx;
          margin-right: 20rpx;
          overflow: hidden;
          background-color: #f5f5f5;
          border-radius: 15rpx;
          overflow: hidden;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .shopTitle {
          width: calc(100% - 150rpx);
          font-size: 28rpx;
          font-weight: 600;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
      .ModelInfo {
        padding: 20rpx 0;
        border-bottom: 1rpx solid #f5f5f5;
        .Title {
          font-size: 28rpx;
          font-weight: 600;
          color: #222;
        }
        .ModelItem {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          span {
            padding: 8rpx 20rpx;
            text-align: center;
            background-color: #f5f5f5;
            color: #666666;
            border-radius: 30rpx;
            font-size: 24rpx;
            margin: 10rpx;
            &.active {
              background-color: #ff5555;
              color: #ffffff;
            }
          }
        }
        .StockNumber{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: 24rpx;
          color: #999;
        }
      }
      .ModeNumber {
        padding: 20rpx 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1rpx solid #f5f5f5;
        .Title {
          font-size: 28rpx;
          color: #222;
          font-weight: 600;
        }
      }
      .ShopCoupon {
        padding: 20rpx 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1rpx solid #f5f5f5;
        .Title {
          font-size: 28rpx;
          color: #222;
          font-weight: 600;
        }
        .CouponInfo {
          font-size: 26rpx;
          color: #666666;
          &.active {
            text {
              color: #ff5555;
              font-weight: 600;
              font-size: 26rpx;
            }
          }
        }
      }
      .ByInfo {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding: 20rpx 0;
        .SelectShopInfo {
          font-size: 28rpx;
          color: #666666;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 20rpx;
          span{
            max-width: 49%;
          }
          text{
              color: #ff5555;
              font-weight: bold;
              font-size: 32rpx;
              vertical-align: middle;
          }
        }
        .ByBtn{
            width: 100%;
            a{
                display: block;
                width: 100%;
                padding: 18rpx 0;
                border-radius: 30rpx;
                color: #ffffff;
                font-size: 30rpx;
                background-color: #ff5555;
                text-align: center;
            }
        }
      }
    }
  }
}
</style>
