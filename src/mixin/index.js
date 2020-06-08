
export default {
  data () {
    return {
      query: null,
      BASE_URL: process.env.BASE_URL
    }
  },
  onLoad (options) {
    // Object.assign(this.$data, this.$options.data())
    Object.assign(this.$data, this.$options.data())
    this.query = options
  },
  async onReady () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  // async onShow () {
  //   console.log('IsRegister', this.IsRegister)
  //   console.log('OpenId', this.OpenId)
  //   console.log('NickName', this.NickName)
  //   console.log('AvatarUrl', this.AvatarUrl)
  //   console.log('isIphoneX', this.isIphoneX)
  // },
  async onShareAppMessage () {
    const {title, imageUrl} = await this.$service.app.shaer({
      path: this.$mp.appOptions.path
    })
    const shaerData = {
      title: title === '' ? '校品直购' : title,
      path: this.$mp.appOptions.path,
      imageUrl: imageUrl
    }
    return shaerData
  },
  computed: {
    ImgUrl () {
      return this.$config.requeststatic
    },
    // 用户openId
    OpenId () {
      try {
        return this.$store.state.user.globalData.loginData.openid
      } catch (e) {
        return ''
      }
    },
    // 用户昵称
    NickName () {
      try {
        return this.$store.state.user.userInfo.nickName
      } catch (e) {
        return ''
      }
    },
    // 用户头像
    AvatarUrl () {
      try {
        return this.$store.state.user.userInfo.avatarUrl
      } catch (e) {
        return ''
      }
    },
    // 是否注册
    IsRegister () {
      try {
        return this.$store.state.user.globalData.isZhuCe.State > 0
      } catch (e) {
        return false
      }
    },
    // 是否会员
    IsVip () {
      try {
        return this.$store.state.user.globalData.isZhuCe.IsVip
      } catch (e) {
        return 0
      }
    },
    // 会员到期时间
    VipExpirationTime () {
      try {
        return this.$store.state.user.globalData.isZhuCe.ExpirationTime
      } catch (e) {
        return ''
      }
    },
    // 购物车总数
    CartNumber () {
      try {
        return this.$store.state.user.globalData.isZhuCe.CartNumber
      } catch (e) {
        return ''
      }
    },
    // 是否是IphoneX
    isIphoneX () {
      return wx.getStorageSync('isIphoneX')
    }
  }
}
