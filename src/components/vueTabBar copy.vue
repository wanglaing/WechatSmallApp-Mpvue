<template>
  <div class="tabBar-wrap" >
      <div class="tabBar-box" :style="tabbarX">
        <ul class="tabBar-nav">
          <li :class="selectNavIndex === index ? 'item active' : 'item'" :key="index" v-for="(item, index) in navList" @click="selectNavItem(index,item.pagePath)" >
            <p class="item-images">
              <i :class="'iconfont '+item.icon"></i>
              <!-- <img class="images" mode="scaleToFill" :src="selectNavIndex === index ? item.selectedIconPath : item.iconPath" alt="iconPath"> -->
            </p>
            <div :class="selectNavIndex === index ? 'item-text item-text-active' : 'item-text'">
               {{item.text}}
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    selectNavIndex: {
      required: false
    },
    navList: {
      required: false,
      default: [
        {
          pagePath: '../home/main',
          iconPath: '/static/tabs/home-default.png',
          selectedIconPath: '/static/tabs/home-active.png',
          text: '首页',
          icon: 'iconshouye'
        },
        {
          pagePath: '/pages/ApplyCard/main',
          iconPath: '/static/tabs/Ticketing-default.png',
          selectedIconPath: '/static/tabs/Ticketing-active.png',
          text: '会员',
          icon: 'iconwodehuiyuanqia'
        },
        {
          pagePath: '../Product/main',
          iconPath: '/static/tabs/Ticketing-default.png',
          selectedIconPath: '/static/tabs/Ticketing-active.png',
          text: '商城',
          icon: 'iconshangcheng'
        },
        {
          pagePath: '../ShoppingCart/main',
          iconPath: '/static/tabs/Course-default.png',
          selectedIconPath: '/static/tabs/Course-active.png',
          text: '购物车',
          icon: 'icongouwuche-'
        },
        {
          pagePath: '../user/main',
          iconPath: '/static/tabs/user-default.png',
          selectedIconPath: '/static/tabs/user-active.png',
          text: '我的',
          icon: 'iconMy'
        }
      ]
    }
  },
  data () {
    return {
      tabbarX: null
    }
  },
  beforeMount () {
    const self = this
    wx.getSystemInfo({
      success (system) {
        console.log(`system:`, system);
        let platformReg = /ios/i
        let modelmes = system.model
        if (modelmes.search('iPhone X') != -1) {
          // that.globalData.isIphoneX = true
          self.tabbarX = 'padding-bottom:68rpx;'
          wx.setStorage({
            key: 'isIphoneX',
            data: true
          })
        } else {
          wx.setStorage({
            key: 'isIphoneX',
            data: false
          })
        }
      }
    })
  },
  created () {
  },
  methods: {
    selectNavItem (index, pagePath) {
      // console.log(this.selectNavIndex)
      const url = pagePath
      // if (index == 2) {
      //   wx.navigateTo({
      //     url
      //   })
      //   return false
      // }
      wx.reLaunch({
        url
      })
    },
    bindViewTap (url) {
      wx.switchTab({
        url
      })
    },
    bindNavigateTo (url) {
      wx.navigateTo({
        url
      })
    }
  }
}
</script>
<style lang="less" scoped>
.tabBar-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 110rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20rpx 0; */
  border-top: 1px solid #eee;
  background-color: #ffffff;
  z-index: 9999;
}
.tabBar-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ff5555;
}
.tabBar-nav .item {
  /*flex: 1;*/
  padding: 0 2%;
  text-align: center;
  i{
    font-size:40rpx;
    color: #7f8699;
  }
}
.tabBar-nav .item.active{
  i{
    color:#ff5555;
  }
  .item-text{
    color: #ff5555;
  }
}
.item-text {
  color: #7f8699;
  font-size: 28rpx;
  transition: .24s linear;
}
.item-text-active {
  color: #333;
  // text-shadow: 0 1rpx 1rpx #ffe300;
}

.item-images {
  width: 40rpx;
  height: 40rpx;
  margin: 0 auto;
  margin-bottom: 1rpx;
  text-align: center;
  transition: .24s linear;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-images .images{
  display: block;
  height: 100%;
}
</style>
