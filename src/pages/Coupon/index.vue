<template>
  <div class="pageView">
    <navigation-bar
      :title="'优惠卷'"
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
    </div>
    <div class="CouponList" v-if="OrderSelect===0">
      <div class="list">
        <div class="list-info">
          <h2><text>￥50</text>全场通用优惠卷</h2>
          <p>会员优惠卷</p>
          <label>有效期至2019-11-14</label>
        </div>
        <div class="list-btn">
          <label>立即使用</label>
        </div>
      </div>
      <div class="list select">
        <div class="list-info">
          <h2><text>￥50</text>全场通用优惠卷</h2>
          <p>会员优惠卷</p>
          <label>有效期至2019-11-14</label>
        </div>
        <div class="list-btn">
          <label class="disabled">已使用</label>
        </div>
      </div>
      <div class="list disabled">
        <div class="list-info">
          <h2><text>￥50</text>全场通用优惠卷</h2>
          <p>会员优惠卷</p>
          <label>有效期至2019-11-14</label>
        </div>
        <div class="list-btn">
          <label class="disabled">已失效</label>
        </div>
      </div>
    </div>
    <div class="CouponList" v-if="OrderSelect===1">
      <div class="list select">
        <div class="list-info">
          <h2><text>￥50</text>全场通用优惠卷</h2>
          <p>会员优惠卷</p>
          <label>有效期至2019-11-14</label>
        </div>
        <div class="list-btn">
          <label class="disabled">已使用</label>
        </div>
      </div>
    </div>
    <div class="CouponList" v-if="OrderSelect===2">
      <div class="list disabled">
        <div class="list-info">
          <h2><text>￥50</text>全场通用优惠卷</h2>
          <p>会员优惠卷</p>
          <label>有效期至2019-11-14</label>
        </div>
        <div class="list-btn">
          <label class="disabled">已失效</label>
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
          Name: '已使用'
        }, {
          Type: 2,
          Name: '已失效'
        }
      ],
      barBgColor: '#FBA306',
      barTitleColor: '#FFFFFF'
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
    if (this.query.type) {
      this.OrderSelect = this.query.type
    }
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
  .CouponList{
    .list{
      background-color: #ffffff;
      border-radius: 20rpx;
      margin: 20rpx;
      box-shadow: 0 8rpx 2rpx rgba(0,0,0,0.02);
      padding: 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      &-info{
        width: calc(100% - 145rpx);
        h2{
          font-size: 24rpx;
          color: #333333;
          text{
            font-size: 28rpx;
            color: #ff5555;
            font-weight: 600;
            vertical-align: middle;
            margin-right: 5rpx;
          }
        }
        p{
          font-size: 28rpx;
          font-weight: 600;
          margin: 20rpx 0;
        }
        label{
          font-size: 24rpx;
          color: #999999;
        }
      }
      &-btn{
        label{
          padding: 10rpx 18rpx;
          font-size: 26rpx;
          color: #ffffff;
          background-color: #ff5555;
          border-radius: 30rpx;
          &.disabled{
            background-color: #dcdcdc;
            color: #333333;
          }
        }
      }
      &.select::before{
        content: "";
        width: 120rpx;
        height: 120rpx;
        background-image: url(data:image/png;base64,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);
        background-size: 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        right: 2%;
        transform: translate(0,-50%);
        right: 2%;
      }
      &.select, &.disabled{
        background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
        .list-btn{
          label{
            display: none;
          }
        }
      }
      &.disabled::before{
        content: "";
        width: 120rpx;
        height: 120rpx;
        background-image: url(data:image/png;base64,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);
        background-size: 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        right: 2%;
        transform: translate(0,-50%);
        .list-btn{
          label{
            display: none;
          }
        }
      }
    }
  }
}
</style>
