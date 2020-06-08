<template>
  <div class="pageView">
    <navigation-bar
      :title="'分销中心'"
      :navBackgroundColor="'#ff5555'"
      :titleColor="'#ffffff'"
      :Navlist="[]"
      :back-visible="true"
      :home-path="'../home/main'"
    ></navigation-bar>
    <div class="DistributionCon">
      <div class="DistributionCenter">
        <div class="DistributionCenter-TopMoney">
          <div class="left">
            <p>总收益（元）</p>
            <h2>498.98</h2>
          </div>
          <div class="right">
            <i class="iconfont iconhelp"></i><span>提现规则</span>
          </div>
        </div>
        <div class="DistributionCenter-BottomInfo">
          <span>可提现金额：298.98元</span>
          <a href="">提现</a>
        </div>
      </div>
      <div class="DistributionItem">
        <div class="Item">
          <a href="./subordinate/main">
            <div class="Item-Word">
              <div class="ICon">
                <i class="iconfont iconfenxiao2"></i>
              </div>
              <p>合伙人</p>
            </div>
            <div class="IconJt">
              <i class="iconfont iconjiantou"></i>
            </div>
          </a>
        </div>
        <div class="Item">
          <a href="./Profit/main">
            <div class="Item-Word">
              <div class="ICon">
                <i class="iconfont iconshouyi"></i>
              </div>
              <p>收益明细</p>
            </div>
            <div class="IconJt">
              <i class="iconfont iconjiantou"></i>
            </div>
          </a>
        </div>
        <div class="Item">
          <a href="./withdraw/main">
            <div class="Item-Word">
              <div class="ICon">
                <i class="iconfont icontixianjilu"></i>
              </div>
              <p>提现记录</p>
            </div>
            <div class="IconJt">
              <i class="iconfont iconjiantou"></i>
            </div>
          </a>
        </div>
        <div class="Item">
          <a @click="handelMyCode">
            <div class="Item-Word">
              <div class="ICon">
                <i class="iconfont iconcode"></i>
              </div>
              <p>我的二维码</p>
            </div>
            <div class="IconJt">
              <i class="iconfont iconjiantou"></i>
            </div>
          </a>
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
    },
    handelMyCode () {
      wx.previewImage({
        current: 'https://qr.api.cli.im/qr?data=111&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=96b8d410299270c0bf6869c54400c4e8', // 当前显示图片的http链接
        urls: ['https://qr.api.cli.im/qr?data=111&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=96b8d410299270c0bf6869c54400c4e8'] // 需要预览的图片http链接列表
      })
    }
  },
  mounted () {
  },
  computed: {
  }
}
</script>
<style lang="less">
page{
  background-color: #f5f7fa;
}
.pageView {
  padding-bottom: 20rpx;
  min-height: calc(100% - 20rpx);
  width: 100%;
  .DistributionCon{
    padding: 0rpx;
    .DistributionCenter{
      background-image: url('http://www.ihehang.com/img/DistributionCenterbG.png');
      background-position: center;
      background-size: 100% 100%;
      background-position: center;
      width: 100%;
      height: 260rpx;
      border-radius: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin-top: -1rpx;
      margin-bottom: 20rpx;
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
    .DistributionItem{
      .Item{
        background-color: #ffffff;
        margin: 30rpx 20rpx;
        border-radius: 20rpx;
        a{
          padding: 30rpx 20rpx;
          display: flex;
          justify-content:space-between;
          align-items: center;
        }
        &-Word{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .ICon{
            i{
              font-size: 36rpx;
              color: #c2c2c2;
              padding-right: 10rpx;
            }
          }
          p{
            font-size: 28rpx;
            color: #232323;
          }
        }
        .IconJt{
          i{
            font-size: 30rpx;
            color: #c2c2c2;
          }
        }
      }
    }
  }
}
</style>
