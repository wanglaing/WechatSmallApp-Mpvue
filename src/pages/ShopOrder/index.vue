<template>
  <div class="pageView">
    <navigation-bar
      :title="'我的订单'"
      :navBackgroundColor="'#ffffff'"
      :titleColor="'#222222'"
      :Navlist="[]"
      :back-visible="true"
      :home-path="'../home/main'"
    ></navigation-bar>
    <div class="OrderNav fiexd">
      <a v-for="(item,index) in OrderNav" :key="index" :class="OrderSelect===index ? 'Item active':'Item'" @click="handOrderSelect(index)">{{item.Name}}</a>
    </div>
    <div class="OrderNav">
      <!-- <a v-for="(item,index) in OrderNav" :key="index" :class="OrderSelect===index ? 'Item active':'Item'" @click="handOrderSelect(index)">{{item.Name}}</a> -->
    </div>
    <div class="OderList">
      <div class="list">
        <div class="list-OrderNumber">
          <label>订单编号：<text>1471915286813914</text></label>
          <span>待付款</span>
        </div>
        <div class="list-OrderInfo">
          <a href="../ShopDetails/main?Id=1">
            <div class="OrderTopInfo">
              <div class="OrderImg">
                <img src="http://q1471.img.aiyichuan.com/urm_huodong/20191012/1570845774225.jpg" mode="widthFix">
              </div>
              <div class="OrderShopName">【全国200家酒店 1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！</div>
            </div>
            <div class="OrderBottomInfo">
              <label>下单日期：2019-11-12 11：18</label>
              <span>1件商品共：￥683.00</span>
            </div>
          </a>
        </div>
        <div class="list-OrderBtn">
          <a href="">确认付款</a>
        </div>
      </div>
      <div class="list">
        <div class="list-OrderNumber">
          <label>订单编号：<text>1471915286813914</text></label>
          <span>付款超时</span>
        </div>
        <div class="list-OrderInfo">
          <a href="../ShopDetails/main?Id=1">
            <div class="OrderTopInfo">
              <div class="OrderImg">
                <img src="http://q1471.img.aiyichuan.com/urm_huodong/20191012/1570845774225.jpg" mode="widthFix">
              </div>
              <div class="OrderShopName">【全国200家酒店 1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！</div>
            </div>
            <div class="OrderBottomInfo">
              <label>下单日期：2019-11-12 11：18</label>
              <span>1件商品共：￥683.00</span>
            </div>
          </a>
        </div>
        <div class="list-OrderBtn">
          <a href="" class="active">删除</a>
        </div>
      </div>
      <div class="list">
        <div class="list-OrderNumber">
          <label>订单编号：<text>1471915286813914</text></label>
          <span>付款超时</span>
        </div>
        <div class="list-OrderInfo">
          <a href="../ShopDetails/main?Id=1">
            <div class="OrderTopInfo">
              <div class="OrderImg">
                <img src="http://q1471.img.aiyichuan.com/urm_huodong/20191012/1570845774225.jpg" mode="widthFix">
              </div>
              <div class="OrderShopName">【全国200家酒店 1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！</div>
            </div>
            <div class="OrderBottomInfo">
              <label>下单日期：2019-11-12 11：18</label>
              <span>1件商品共：￥683.00</span>
            </div>
          </a>
        </div>
        <div class="list-OrderBtn">
          <a href="">退款</a>
          <a href="" class="active">删除</a>
        </div>
      </div>
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
      OrderSelect: 0,
      OrderNav: [
        {
          Type: 0,
          Name: '全部'
        }, {
          Type: 1,
          Name: '待付款'
        }, {
          Type: 2,
          Name: '待发货'
        }, {
          Type: 3,
          Name: '已收货'
        }, {
          Type: 4,
          Name: '待退款'
        }
      ]
    }
  },
  components: {
    navigationBar
  },
  onShow () {
    // this.GetData()
  },
  onPageScroll (e) {},
  created () {},
  methods: {
    handOrderSelect (i) {
      this.OrderSelect = i
    }
  },
  mounted () {
    this.OrderSelect = this.query.type
  },
  computed: {
  }
}
</script>
<style lang="less">
.pageView {
  padding-bottom: 20rpx;
  min-height: calc(100% - 20rpx);
  background-color: #f5f5f5;
  width: 100%;
  .OrderNav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1rpx solid #e8e8e8;
    background-color: #ffffff;
    height: 80rpx;
    &.fiexd{
      position: fixed;
      left: 0;
      width: 100%;
    }
    .Item{
      font-size: 26rpx;
      line-height: 80rpx;
      color: #333333;
      letter-spacing: 2rpx;
      &::after{
        content: "";
        display: block;
        width: 0%;
        height: 5rpx;
        border-radius: 20rpx;
        margin: 0 auto;
        background-color: #ff5555;
        transition: all 0.1s;
        transform-origin: center center;
      }
      &.active{
        color: #ff5555;
        &::after{
          content: "";
          display: block;
          width: 100%;
          height: 5rpx;
          border-radius: 20rpx;
          margin: 0 auto;
          background-color: #ff5555;
        }
      }
    }
  }
  .OderList{
    .list{
      background-color: #ffffff;
      border-radius: 20rpx;
      margin: 20rpx;
      box-shadow: 0 8rpx 2rpx rgba(0,0,0,0.02);
      &-OrderNumber{
        padding: 20rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1rpx solid #f5f5f5;
        label{
          font-size: 26rpx;
          color: #222222;
          &>text{
            vertical-align: middle;
          }
        }
        span{
          color: #ff5555;
          font-size:26rpx;
        }
      }
      &-OrderInfo{
        padding: 20rpx;
        border-bottom: 1rpx solid #f5f5f5;
        .OrderTopInfo{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          .OrderImg{
            width: 160rpx;
            overflow: hidden;
            margin-right: 20rpx;
            img{
              width: 100%;
            }
          }
          .OrderShopName{
            width: calc(100% - 180rpx);
            font-size: 28rpx;
            font-weight: 600;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
        .OrderBottomInfo{
          display: flex;
          justify-content: space-between;
          align-items: center;
          label{
            font-size: 26rpx;
            color: #999999;
          }
          span{
            font-size: 26rpx;
            color: #333333;
          }
        }
      }
      &-OrderBtn{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20rpx;
        a{
          display:block;
          padding: 10rpx 18rpx;
          background-color: #ff5555;
          border:1rpx solid #ff5555;
          color: #ffffff;
          border-radius: 30rpx;
          font-size: 26rpx;
          margin-right: 20rpx;
          &:last-child{
            margin-right: 0;
          }
          &.active{
            border-color: #666666;
            background-color: transparent;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
