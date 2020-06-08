<script>
import {checkUpdateApp} from '@/utils'
export default {
  onLaunch: function (options) {
    checkUpdateApp()
    // const self = this
    // wx.hideTabBar()
    wx.getSystemInfo({
      success: res => {
        let modelmes = res.model
        if (modelmes.search('iPhone X') != -1) {
          wx.setStorage({key: 'isIphoneX', data: true})
        } else {
          wx.setStorage({key: 'isIphoneX', data: false})
        }
        wx.setStorage({key: 'system', data: res})
      }
    })
    this.$WxLogin().then(res => {
    })
  },
  created () {
  }
}
</script>

<style lang="less">
  .NoData{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i{
      font-size: 60rpx;
      margin-bottom: 20rpx;
      color: #999999;
    }
    p{
      font-size: 28rpx;
      color: #666666;
      margin-bottom: 10rpx;
    }
    a{
      background-color: #ff5555;
      color: #ffffff;
      font-size:28rpx;
      padding: 10rpx 30rpx;
      border-radius: 10rpx;
    }
  }
@import url("./animate.min.css");
page {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
img{
    height: inherit;
}
.pageViewtab{
  overflow-x: hidden;
}
.ellipsis{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.BottomLogImg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120rpx;
  .Image {
    display: block;
    width: 20%;
  }
}

.page-body-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.navigator-hover {
  background-color: transparent;
  opacity: 0.7;
}
.pageViewtab {
  padding-bottom: 110rpx;
  min-height: calc(100% - 110rpx);
  width: 100%;
}

.isIphoneX{
  min-height: calc(100% - 210rpx);
  padding-bottom: 180rpx!important;
  .Kfbtn{
    bottom: 200rpx!important;
    &.Kfbtn1{
      bottom: 300rpx!important;
    }
  }
  .cooperationBtn{
    bottom: 200rpx!important;
  }
}
.page-body{
  padding:0 4%;
}
.bannerCon {
  margin: 0rpx auto;
  width: 100%;
  .swiperCon {
    height: 210px;
    overflow: hidden;
  }
  .swiperImgCon {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 0rpx;
    height: 100%;
    a{
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      img{
        display: block;
        width: 100%;
      }
    }
  }
  .swiperImg {
    width: 100%;
    display: block;
  }
}
.fixContent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  .masks {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.searchCon {
  margin: 30rpx auto;
  .searchConItemCon {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 1);
    // box-shadow: 0 0 10rpx 2rpx rgba(101, 99, 99, 0.09);
    border-radius: 18px;
    padding: 10rpx 20rpx;
    border: 1rpx solid #e8e8e8;
  }
  .searCharIcon {
    width: 40rpx;
    height: 40rpx;
    line-height: 40rpx;
    display: flex;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: block;
      width: 32rpx;
      color: #666666;
    }
  }
  .searchInput {
    margin-left: 6rpx;
    width: 100%;
    .input {
      color: #222222;
      padding: 4rpx;
      display: block;
      width: 100%;
    }
  }
}
.mpvue-calendar{
  border-radius: 10rpx 10rpx 0 0;
}
.mpvue-calendar ._td:not(.disabled) ._span.mc-date-red {
  color: #222222!important;
}
.mpvue-calendar ._td.selected ._span {
  background-color: #222222;
  color: #ffffff!important;
  border-radius: 50%;
}
.mpvue-calendar ._td.selected ._span.mc-date-red {
  background-color: #222222;
  color: #ffffff!important;
}
.oderformCon{
  border-radius: 10rpx;
}
</style>
