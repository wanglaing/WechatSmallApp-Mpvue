<template>
  <div class="comp-navbar">
    <!-- 占位栏 -->
    <div class="placeholder-bar" :style="{height: navBarHeight + 'px'}"></div>
    
    <!-- 导航栏主体 -->
    <div
      class="navbar"
      :style="{height: navBarHeight + 'px',backgroundColor:navBackgroundColor}"
    >
      <!-- 状态栏 -->
      <div class="nav-statusbar" :style="{height: statusBarHeight + 'px'}"></div>
      <!-- 标题栏 -->
      <div class="nav-titlebar" :style="{height: titleBarHeight + 'px' }">
        <!-- 标题 -->
        <div class="bar-title" :style="[{color:titleColor}]">
          <div v-if="title!=''" class="title">{{title}}</div>
        </div>
        <a v-if="navBackgroundColor=='transparent'" class="barSearChse">
          请输入搜索关键字
        </a>
        <a v-else class="barSearChse" style="background-color:#f5f5f5;">
          请输入搜索关键字
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 导航栏背景色
    navBackgroundColor: {
      default: "#ffffff"
    },
    // 标题颜色
    titleColor: {
      default: "#000000"
    },
    //标题文字
    title: {
      required: false,
      default: ""
    },
    // 是否显示后退按钮
    backVisible: {
      required: false,
      default: false
    },
    // home按钮的路径
    homePath: {
      required: false,
      default: ""
    },
    selectNavIndex:{
      default:0
    },
    Navlist:{
      default: []
    }
  },
  data() {
    return {
      statusBarHeight: "", // 状态栏高度
      titleBarHeight: "", // 标题栏高度
      navBarHeight: "", // 导航栏总高度
      platform: "",
      model: "",
      brand: "",
      system: ""
    };
  },
  beforeMount() {
    const self = this;
    wx.getSystemInfo({
      success(system) {
        // console.log(`system:`, system);
        self.statusBarHeight = system.statusBarHeight;
        self.platform = system.platform;
        self.model = system.model;
        self.brand = system.brand;
        self.system = system.system;
        let platformReg = /ios/i;
        if (platformReg.test(system.platform)) {
          self.titleBarHeight = 44;
        } else {
          self.titleBarHeight = 48;
        }
        self.navBarHeight = self.statusBarHeight + self.titleBarHeight;
      }
    });
  },
  mounted() {
    //console.log(`this.backVisible:`, this.backVisible);
  },
  computed: {
    optionsBgColor(){
      if(this.navBackgroundColor=='#ffffff'){
        return `background: #ffffff;border:1rpx solid #eee;color:#222222;`
      }
    },
    LineColor(){
      if(this.navBackgroundColor=='#ffffff'){
        return `background-color: #222222;`
      }
    }
  },
  methods: {
    NavSelect:function(i){
      this.selectNavIndex=i;
      this.$emit('selectNav',i)
    },
    backClick() {
      wx.navigateBack();
    },
    scroll(e) {
      console.log(e);
   },
    homeClick() {
      wx.reLaunch({
        url: this.homePath
      })
    }
  }
};
</script>

<style lang="less"  scoped>
.comp-navbar {
  width: 100vw;
  position: relative;
  z-index: 9999;
  transition: 0.2s;
  .navbar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    .nav-titlebar {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
    }
    .bar-options {
      width: 170rpx;
      height: 60rpx;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      left: 7px;
      display: flex;
      align-items: center;
      background: hsla(0, 0%, 100%, 0.1);
      border-radius: 27px;
      padding-right: 5rpx;
      i{
        font-size:36rpx;
      }
    }
    .opt {
      width: 50rpx;
      height: 50rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .back-image {
      width: 32rpx;
      height: 36rpx;
      padding: 0 10rpx;
    }
    .line {
      display: block;
      height: 30rpx;
      width: 1px;
      background-color: #ffffff;
    }
    .home-image {
      width: 36rpx;
      height: 34rpx;
    }
    .bar-title {
      width: 25%;
      font-size: 32rpx;
      color: #ffffff;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      .title{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
      padding-left: 20rpx;
      }
      .recommend_scroll_x_box{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            white-space: nowrap;
        }
        .item-text{
            color: #ffffff;
            font-size: 28rpx;
            display: inline-block;
            padding: 0 5rpx;
            margin-right: 15rpx;
            &::before{
                content: "";
                display: block;
                width: 0%;
                height: 6rpx;
                background-color: #ffe300;
                position: absolute;
                top: 78%;
                left: 20%;
                border-radius: 30rpx;
                transition: all 0.5s;
            }
            &.item-text-active{
                font-size: 32rpx;
                position: relative;
                font-weight: 600;
                &::before{
                    content: "";
                    display: block;
                    width: 60%;
                    height: 6rpx;
                    background-color: #ffe300;
                    position: absolute;
                    top: 78%;
                    left: 20%;
                    border-radius: 30rpx;
                }
            }
        }
    }
    .barSearChse{
      width: calc(45% - 20rpx);
      background-color: #f5f5f5;/*f5f5f5*/
      height: 55rpx;
      line-height: 55rpx;
      font-size: 20rpx;
      color: #a4a4a4;
      border-radius: 30rpx;
      padding-left: 20rpx;
    }
    .placeholder-bar {
      background-color: transparent;
      width: 100%;
    }
  }
}
</style>