<template>
  <div :class="isIphoneX ? 'pageView isIphoneX' : 'pageView'">
    <navigation-bar
      :title="'确定订单'"
      :navBackgroundColor="'#ffffff'"
      :titleColor="'#222222'"
      :Navlist="[]"
      :back-visible="true"
      :home-path="'../home/main'"
    ></navigation-bar>
    <div class="ShopItem">
      <div class="ItemTitle"></div>
      <div class="ShopInfo">
        <div class="Item ItemShopInfo">
          <div class="ShopImg" :style="'background-image: url('+Shops.Imgs[0].BigImgUrl+');'"></div>
          <div class="shopTitle">{{Shops.Name}}</div>
        </div>
        <div class="Item">
          <div class="Title">类型</div>
          <div class="Typelist">
            <label>{{Model.Name}} </label>
            <span>￥{{Model.Price}} x{{query.Number}}</span>
          </div>
        </div>
        <div class="Item">
          <div class="OrderNumber">
            <p>
              <text>订单编号：</text>9115736141439045
            </p>
            <p>
              <text>下单时间：</text>2019-11-13 11:02
            </p>
          </div>
        </div>
        <div class="Item">
          <div class="OrderRemarks">
            <text>订单备注：</text><input type="text" placeholder="订单备注">
          </div>
        </div>
        <div class="Item">
          <div class="ShopNumber">
            <text>商品总额：</text>￥{{spzj}}
          </div>
          <div class="ShopNumber NumberDK" v-if="query.CouponNumber!=0">
            <text>优惠卷抵扣：</text>-￥{{query.CouponNumber}}
          </div>
        </div>
        <div class="Item">
          <div class="ShopZongNumber">
            <text>共1件商品，实付：</text>￥{{query.ZongPrice}}
          </div>
        </div>
      </div>
    </div>
    <div class="ShopItem">
      <div class="ItemTitle">收货信息</div>
      <div class="ShopInfo">
        <div class="Item PayAddress" v-if="Address" @click="handelchooseAddress">
          <p>
            <text>{{Address.userName}}</text>{{Address.telNumber}}
          </p>
          <p>{{Address.provinceName+Address.cityName+Address.countyName+Address.detailInfo}} </p>
        </div>
        <div class="Item PayAddress" v-else @click="handelchooseAddress">
          <p>
            <text class="iconfont icondizhi" ></text><span>请选择收货地址</span>
          </p>
        </div>
<!--        <div class="Item" v-if="false" @click="IsFHD=0">-->
<!--          <div class="ShopNumber">-->
<!--            <div class="text"><label class="iconfont iconservicehaiwaizhiyou"></label>海外直邮</div>-->
<!--            <i  :class="IsFHD==0 ? 'iconfont icondanxuan_xuanzhong' : 'iconfont icondanxuan-weixuan'"></i>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="Item" v-if="false" @click="IsFHD=1">-->
<!--          <div class="ShopNumber">-->
<!--            <div class="text"><label class="iconfont iconshangpinkucuncangkudunhuojiya"></label>保税仓邮</div>-->
<!--            <i :class="IsFHD==1 ? 'iconfont icondanxuan_xuanzhong' : 'iconfont icondanxuan-weixuan'"></i>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="Item" v-if="false">-->
<!--          <div class="ShopNumber">-->
<!--            <div class="text"><label class="iconfont iconid-card-4"></label>请上传身份证正反面照片</div>-->
<!--          </div>-->
<!--          <div class="IdCardCon" @click="chooseImage(0)">-->
<!--            <div class="FileItem">-->
<!--              <div class="Tips">-->
<!--                <i class="iconfont iconshangchuan"></i>-->
<!--                请上传身份证正面照片-->
<!--              </div>-->
<!--              <img :src="IDcard1" mode="widthFix" >-->
<!--            </div>-->
<!--            <div class="FileItem" @click="chooseImage(1)">-->
<!--              <div class="Tips">-->
<!--                <i class="iconfont iconshangchuan"></i>-->
<!--                请上传身份证反面照片-->
<!--              </div>-->
<!--              <img :src="IDcard2" mode="widthFix" >-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
    <div class="payBtn">
      <a href>立即支付</a>
    </div>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar.vue'
import mixin from '@/mixin'
export default {
  mixins: [mixin],
  data () {
    return {
      IsFHD: 0,
      Shops: '',
      Model: ''
    }
  },
  components: {
    navigationBar
  },
  onShow () {
    // this.GetData()
    // console.log(JSON.parse(this.query.Model))
    this.Shops = JSON.parse(decodeURIComponent(this.query.Shops))
    this.Model = JSON.parse(decodeURIComponent(this.query.Model))
    debugger
    console.log(this.query)
  },
  onPageScroll (e) {},
  created () {},
  methods: {
    chooseImage (type) {
      let self = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          wx.showToast({
            title: '正在上传',
            icon: 'loading',
            mask: true,
            duration: 1000
          })
          let tempFilePaths = res.tempFilePaths
          if (type == 0) {
            self.IDcard1 = tempFilePaths
          } else if (type == 1) {
            self.IDcard2 = tempFilePaths
          }
          // console.log(tempFilePaths)
        }
      })
    },
    handelchooseAddress () {
      let self = this
      wx.chooseAddress({
        success (res) {
          self.$store.commit('SET_Address', res)
          // console.log(res)
          // console.log(res.userName)
          // console.log(res.postalCode)
          // console.log(res.provinceName)
          // console.log(res.cityName)
          // console.log(res.countyName)
          // console.log(res.detailInfo)
          // console.log(res.nationalCode)
          // console.log(res.telNumber)
        }
      })
    }
  },
  mounted () {
  },
  computed: {
    spzj () {
      return parseFloat(this.Model.Price) * parseInt(this.query.Number)
    },
    Address () {
      if (this.$store.state.user.Address) {
        return this.$store.state.user.Address
      }
      return null
    }
  }
}
</script>
<style lang="less">
.pageView {
  padding-bottom: 110rpx;
  min-height: calc(100% - 110rpx);
  background-color: #fefefe;
  width: 100%;
  .payBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 110rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-top: 1rpx solid #e8e8e8;
    a{
      width: calc(100% - 60rpx);
      padding: 15rpx 0;
      background-color: #ff5555;
      color: #ffffff;
      text-align: center;
      display: block;
      border-radius: 30rpx;
    }
  }
  &.isIphoneX{
    padding-bottom: 200rpx;
    min-height: calc(100% - 200rpx);
    .payBtn{
      padding-bottom: 60rpx;
    }
  }
  .PayCountdown{
    background-color: #ff5555;
    padding: 40rpx 0;
    display: flex;
    justify-content: center;
    margin-top: -1rpx;
    align-items: center;
    flex-direction: column;
    p{
      font-size: 28rpx;
      color: #ffffff;
      margin-bottom: 10rpx;
    }
    h2{
      font-size: 36rpx;
      font-weight: 600;
      color: #ffffff;
    }
  }
  .ShopItem{
    .ItemTitle{
      margin: 0 20rpx;
      font-size: 28rpx;
      color: #666666;
    }
  }
  .ShopInfo{
    padding: 20rpx;
    margin: 30rpx 20rpx;
    background-color: #ffffff;
    padding-bottom: 10rpx;
    border-radius: 18rpx;
    box-shadow: 0 0 17rpx 2rpx rgba(0, 0, 0, 0.06);
    .PayAddress{
      // padding: 30rpx;
      p{
        font-size: 28rpx;
        color: #333333;
        line-height: 2.2;
        text{
          margin-right: 10rpx;
        }
        span{
          color: #222222;
          font-weight: bold;
        }
      }
    }
    .Item{
      padding: 20rpx 0;
      border-top: 1rpx solid #f5f5f5;
      &:first-child{
        border-top: 0rpx;
        padding-top: 0;
      }
      &.ItemShopInfo{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .ShopImg{
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
        .shopTitle{
          width:calc(100% - 150rpx);
          font-size: 28rpx;
          font-weight: 600;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
      .Title{
        font-size: 28rpx;
        font-weight: bold;
        margin-bottom: 10rpx;
      }
      .Typelist{
        display: flex;
        justify-content: space-between;
        align-items: center;
        label{
          font-size: 26rpx;
          color: #222222;
        }
        span{
          font-size: 26rpx;
          color: #666;
        }
      }
      .OrderNumber{
        p{
          /*display: flex;
          justify-content: space-between;
          align-items: center;*/
          font-size: 26rpx;
          color: #666666;
          line-height: 1.8;
          text{
            font-size: 28rpx;
            font-weight: 600;
            color: #222222
          }
        }
      }
      .OrderRemarks{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text{
          font-size: 28rpx;
          font-weight: 600;
          color: #222222;
        }
        input{
          width: calc(100% - 140rpx);
          text-align: right;
          font-size: 26rpx;
          color: #666666;
        }
      }
      .ShopNumber{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 28rpx;
        color: #222222;
        font-weight: 600;
        line-height: 1.8;
        &.NumberDK{
          color: #ff5555;
        }
        text{
          font-size: 28rpx;
          color: #333333;
          font-weight: 600;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          label{
            font-size: 36rpx;
            color: #ff5555;
          }
        }
        .text{
          font-size: 28rpx;
          color: #333333;
          font-weight: 600;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          label{
            font-size: 36rpx;
            color: #ff5555;
            font-weight: normal;
            padding-right: 10rpx;
          }
        }
        i{
          color: #ff5555;
          font-size: 40rpx;
          font-weight: normal;
        }
      }
      .ShopZongNumber{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 28rpx;
        color: #ff5555;
        font-weight: 600;
        line-height: 1.8;
        text{
          color: #222222;
          vertical-align: middle;
        }
      }
      .IdCardCon{
        .FileItem{
          width: 100%;
          background-color: #f5f5f5;
          height: 360rpx;
          border-radius: 10rpx;
          overflow: hidden;
          margin-top: 20rpx;
          position: relative;
          &:first-child{
            margin-top: 20rpx;
          }
          .Tips{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: #999999;
            font-size: 24rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            i{
              font-size: 100rpx;
              color: #999999
            }
          }
          img{
            position: relative;
            z-index: 1;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
