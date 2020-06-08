<template>
  <div class="pageView">
    <navigation-bar
      :title="'合伙人'"
      :navBackgroundColor="'#ffffff'"
      :titleColor="'#222222'"
      :Navlist="[]"
      :back-visible="true"
      :home-path="'../home/main'"
    ></navigation-bar>
    <div class="subordinateList">
      <div class="list" v-for="(item,index) in list" :key="index">
        <div class="txImg">
          <img :src="item.HeadUrl" mode="widthFix">
        </div>
        <div class="Word">
          <p>{{item.NikeName}}</p>
          <span>{{item.MenberInfo}}</span>
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
          HeadUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576035855&di=220b6bcaa303fef7d4c2695fafda831e&src=http://hbimg.b0.upaiyun.com/0b81705adb2ee2c1707f1f4417165f257324383a1ebc-GzJ8Zh_fw658',
          NikeName: '张武',
          MenberInfo: '钻石合伙人',
          VIPLevel: 0
        }, {
          Id: 2,
          HeadUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576035855&di=220b6bcaa303fef7d4c2695fafda831e&src=http://hbimg.b0.upaiyun.com/0b81705adb2ee2c1707f1f4417165f257324383a1ebc-GzJ8Zh_fw658',
          NikeName: '王超',
          MenberInfo: '金牌合伙人',
          VIPLevel: 1
        }, {
          Id: 2,
          HeadUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576035855&di=220b6bcaa303fef7d4c2695fafda831e&src=http://hbimg.b0.upaiyun.com/0b81705adb2ee2c1707f1f4417165f257324383a1ebc-GzJ8Zh_fw658',
          NikeName: '李力',
          MenberInfo: '银牌合伙人',
          VIPLevel: 1
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
  methods: {},
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
  .subordinateList{
    .list{
      margin: 30rpx 20rpx;
      background-color: #ffffff;
      border-radius: 20rpx;
      padding: 20rpx;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .txImg{
        width: 120rpx;
        height: 120rpx;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 20rpx;
        img{
          width: 100%
        }
      }
      .Word{
        width: calc(100% - 140rpx);
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          background-color: #ececec;
          color: #666666;
          font-size: 18rpx;
          border-radius: 10rpx;
          padding: 5rpx;
          background: -webkit-linear-gradient(to right, #353232, #6e6c65);
          background: linear-gradient(to right, #353232, #6e6c65);
          color: #ebd9af;
          padding:5rpx  8rpx;
          font-size: 26rpx;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p{
          font-size: 28rpx;
        }
      }
    }
  }
}
</style>
