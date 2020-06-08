<template>
  <div :class="isIphoneX ?'pageView isIphoneX':'pageView'">
    <navigation-bar
      :title="'积分商城'"
      :navBackgroundColor="'#ff5555'"
      :titleColor="'#ffffff'"
      :Navlist="[]"
      :isBarHeight="true"
      :back-visible="true"
      :home-path="'../home/main'"
    ></navigation-bar>
    <div class="DistributionCenter">
      <div class="DistributionCenter-TopMoney">
        <div class="left">
          <p>总积分 </p>
          <h2>498</h2>
        </div>
        <div class="right">
          <i class="iconfont iconhelp"></i><span>积分规则</span>
        </div>
      </div>
      <div class="DistributionCenter-BottomInfo">
        <span>已使用积分：298</span>
        <!-- <a href="">提现</a> -->
      </div>
    </div>
    <div class="ShopDetails">
      <div class="IntegralNav" ref="IntegralNav">
        <div :class=" IntegralIndex===index ? 'active Item' : 'Item' " v-for="(item,index) in IntegralNav" :key="index" @click="handelIntegralNav(index,item)">{{item.Name}}</div>
      </div>
      <div class="ShopInfo">
        <div class="ShowBottomInfo">
          <div class="InfoItem">
              <div class="shopList">
                <div class="list" v-for="(item,index) in shopList" :key="index">
                  <a :href="'../IntegralShopDetails/main?Id='+item.Id+'&IsDh='+item.IsDh">
                    <div class="list-img">
                      <img :src="item.Pic" mode="widthFix" />
                    </div>
                    <div class="list-word">{{item.Name}}</div>
                  </a>
                  <div class="list-price" :style="IntegralIndex==1 ? 'padding-top:0rpx;' : 'paddingTop:40rpx;'">
                    <div class="MerberInfo" v-if="IntegralIndex==1">
                      <span>兑换时间</span>
                      <label>
                        {{item.DhTime}}
                      </label>
                    </div>
                    <div class="price">
                      <div class="PriceLeft">
                        <label class="big"><i class="iconfont iconjifen"></i>129</label>
                        <!-- <label class="Small">￥880.00</label> -->
                      </div>
                      <div class="ByBtn" v-if="item.IsDh==0">兑换</div>
                      <div class="ByBtn active" v-else>已兑换</div>
                    </div>
                    <div class="cyNumber">{{item.cyNumber}}人兑换</div>
                  </div>
                </div>
              </div>
          </div>
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
      IntegralIndex: 0,
      barBgColor: 'transparent',
      barTitleColor: '#222222',
      IntegralNav: [
        {
          Type: 0,
          Name: '可兑换商品'
        }, {
          Type: 1,
          Name: '已兑换商品'
        }
      ],
      shopList: [
        {
          Id: 1,
          Name: '【入围煮】【看抽奖规则】抽奖需加syl930520为好友！转发好友多一个抽奖码！',
          Pic: 'https://file.open.banchengyun.com/255/2019/09/27/ae6c94acbbbdcedd0e122bc42e3c9a49.gif',
          cyNumber: 265,
          IsDh: 0,
          Integral: 600,
          DhTime: ''
        }, {
          Id: 1,
          Name: '【LeTao】切片套餐抽奖！完成购买须知里的任务，截图作为领奖凭证！',
          Pic: 'https://file.open.banchengyun.com/255/2019/09/27/ae6c94acbbbdcedd0e122bc42e3c9a49.gif',
          cyNumber: 265,
          IsDh: 1,
          DhTime: '2019-10-11 12:00:00',
          Integral: 600
        }
      ]
    }
  },
  components: {
    navigationBar
  },
  onShow () {
    // console.log(this.$refs.IntegralNav)
    // this.GetData()
  },
  onPageScroll (e) {
    if (e.scrollTop >= 90) {
      (this.barBgColor = '#ffffff'), (this.barTitleColor = '#222222')
    } else {
      (this.barBgColor = 'transparent'), (this.barTitleColor = '#222222')
    }
  },
  created () {},
  methods: {
    handelIntegralNav (index, item) {
      this.IntegralIndex = index
    },
    handPhone () {

    },
    handNavigation () {

    }
  },
  mounted () {
    this.selectNavIndex = this.query.TabSelect
  },
  computed: {
  }
}
</script>
<style lang="less">
.pageView {
  padding-bottom: 20rpx;
  min-height: calc(100% - 20rpx);
  width: 100%;
  .DistributionCenter{
      background-image: url('http://www.ihehang.com/img/DistributionCenterbG.png');
      background-position: center;
      background-size: 100% 100%;
      background-position: center;
      width: 100%;
      height: 220rpx;
      border-radius: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin-top: -1rpx;
      margin-bottom: 0;
      &-TopMoney{
        margin: 20rpx;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 2rpx solid #fff;
        width: 90%;
        padding-bottom:20rpx;
        .left{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          p{
            font-size: 28rpx;
            color: #fff;
            padding-bottom: 2rpx;
          }
          h2{
            font-size: 36rpx;
            color: #fff;
            font-weight: 600;
          }
        }
        .right{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          color: #fff;
          i{
            font-size: 28rpx;
            padding-right: 5rpx;
          }
          span{
            font-size: 28rpx;
          }
        }
      }
      &-BottomInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        color: #fff;
        span{
          font-size:28rpx;
        }
        a{
          font-size: 28rpx;
          padding: 5rpx 18rpx;
          border-radius: 10rpx;
          border: 3rpx solid #ffffff;
        }
      }
    }
  .ShopDetails {
    .IntegralNav{
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
      .Item{
        font-size: 30rpx;
        color: #666666;
        line-height: 80rpx;
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
    .bannerCon {
      height: 320rpx;
      .swiperCon {
        width: 100%;
        height: 320rpx;
      }
      video {
        width: 100%;
        height: 100%;
      }
      .bannerImg {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    .ShopInfo {
      background-color: #f5f7fa;
      padding-top: 25rpx;
      .ShowBottomInfo {
        .InfoItem {
          padding: 30rpx 20rpx;
          border-top: 20rpx solid #f8f8f8;
          box-sizing: border-box;
          padding-top: 0;
          &:first-child{
            border-top: 0;
          }
          .ShopInfoTitle {
            font-size: 30rpx;
            color: #222222;
            font-weight: bold;
            text-align: center;
            margin: 40rpx  0;
            position: relative;
            &:first-child{
              margin-top: 0rpx;
            }
            &::after {
              content: "";
              display: block;
              width: 46rpx;
              height: 6rpx;
              background-color: #fba306;
              border-radius: 20rpx;
              margin: 0 auto;
              margin-top: 6rpx;
            }
          }
          .shopList {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0;
            .list {
              display: flex;
              flex-direction: column;
              width: 100%;/*calc((100% / 2) - 10rpx) */
              margin-top: 30rpx;

              &:nth-child(1) {
                margin-top: 0;
              }
              .list-img {
                img {
                  width: 100%;
                  border-radius: 5px;
                }
              }
              .list-word {
                font-size: 28rpx;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin: 10rpx auto;
              }
              .list-price {
                position: relative;
                padding-top: 40rpx;
                .MerberInfo {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  padding: 5rpx;
                  margin-bottom: 10rpx;
                  span {
                    font-size: 18rpx;
                    color: #222222;
                    background-color: #FBA306;
                    padding: 2rpx 8rpx;
                    border-radius: 5rpx 0 0 5rpx;
                    position: relative;
                    z-index: 3;
                  }
                  label {
                    background-color: #222222;
                    padding: 2rpx 8rpx;
                    padding-left: 12rpx;
                    font-size: 18rpx;
                    border-radius: 0rpx 5rpx 5rpx 0rpx;
                    color: #ffffff;
                    position: relative;
                    overflow: hidden;
                    &::after {
                      // content: "";
                      // background-color: #FBA306;
                      // width: 12rpx;
                      // height: 120%;
                      // position: absolute;
                      // top: 0;
                      // right: 91%;
                      // transform: rotate(-15deg);
                    }
                    text {
                      color: #FBA306;
                    }
                  }
                }
                .price {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  .PriceLeft{
                    .big {
                      font-size: 30rpx;
                      color: #FBA306;
                      font-weight: 600;
                      display: flex;
                      justify-content: flex-start;
                      align-items: center;
                      i{
                        font-weight: normal;
                        font-size: 48rpx;
                      }
                    }
                    .Small {
                      font-size: 22rpx;
                      color: #999999;
                      padding: 0 5rpx;
                      text-decoration: line-through;
                    }
                  }
                  .ByBtn{
                    background-color: #FBA306;
                    color: #ffffff;
                    font-size: 26rpx;
                    padding: 8rpx 22rpx;
                    border-radius: 25rpx 0 25rpx 25rpx;
                    &.active{
                      background-color: #dadada;
                      color: #333333;
                    }
                  }
                }
                .cyNumber{
                  position: absolute;
                  right: 0;
                  top:0;
                  font-size: 24rpx;
                  color: #999999;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
