<template>
  <div class="pageView">
    <navigation-bar
      :title="'提现记录'"
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
            <h2>+20.00</h2>
          </div>
          <div class="left">
            <p>已提现（元）</p>
            <h2>-20.00</h2>
          </div>
        </div>
      </div>
      <div class="DistributionItem">
        <div class="Item" v-for="(item,index) in list" :key="index">
          <div class="Item-Word">
            <h2>{{item.Remarks}}</h2>
            <p>{{item.Time}}</p>
          </div>
          <div class="Number">- {{item.Price}}</div>
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
      list: [
        {
          Id: 1,
          Remarks: '发起提现余额',
          Time: '2019-12-12 12:00:00',
          Price: 10.00
        }, {
          Id: 2,
          Remarks: '发起提现余额',
          Time: '2019-12-12 12:00:00',
          Price: 10.00
        }
      ]
    }
  },
  components: {
    navigationBar
  },
  onReady () {},
  onShow () {
    // this.GetData()
  },
  onPageScroll (e) {},
  created () {},
  methods: {
  },
  mounted () {},
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
      height: auto;
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
        align-items: center;
        // border-bottom: 2rpx solid #fff;
        width: 90%;
        padding-bottom:20rpx;
        .left{
          display: flex;
          justify-content: center;
          align-items: center;
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
        border-radius: 10rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20rpx;
        &-Word{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          .ICon{
            i{
              font-size: 36rpx;
              color: #c2c2c2;
              padding-right: 10rpx;
            }
          }
          h2{
            font-size: 28rpx;
            color: #232323;
            margin-bottom: 10rpx;
          }
          p{
            font-size: 26rpx;
            color: #666666;
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
