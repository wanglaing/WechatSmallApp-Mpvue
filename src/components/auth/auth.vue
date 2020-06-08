<template>
  <div class="AuthModel animated fadeIn">
      <div class="masks"></div>
      <div class="ModelContainer animated pulse">
        <h2>{{title}}</h2>
        <p>{{msg}}</p>
        <!-- <p>以下为协议阅读链接，可点击阅读全文</p> -->
        <!-- <p>
          <a href="">用户隐私条款</a>
          <a href="">平台服务协议</a>
        </p> -->
        <div class="btn">
          <a @click="handCacnl()">{{btn[0]}}</a>
          <a class="select">{{btn[1]}}
            <template v-if="type==='getUserInfo'">
              <button
                ref="UserInfo"
                class="authBtn"
                :open-type="type"
                @getuserinfo="bindGetdata"
                >
              </button>
            </template>
            <template v-else-if="type==='getPhoneNumber'">
              <button
                ref="UserInfo"
                class="authBtn"
                :open-type="type"
                @getphonenumber="bindGetdata"
                >
              </button>
            </template>
          </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '温馨提示'
    },
    btn: {
      type: Array,
      default: ['不允许', '允许']
    },
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'getUserInfo'
    }
  },
  methods: {
    handCacnl () {
      this.$emit('handCacnl', false)
    },
    async GetData (_res) {
      let self = this
      switch (self.type) {
        case 'getUserInfo':
          debugger
          // self.$store.commit('setuserInfo', _res.userInfo)
          // self.$store.commit('setglobalData', _res.userInfo)
          // console.log(self.$store.state.user.userInfo)
          // this.$emit('handOK', self.$store.state.user.userInfo)
          this.$WxLogin().then(res => {
            if (parseInt(res.globalData.isZhuCe.State) <= 0) {
              self.$request({ method: 'get', data: { Action: 'ZhuCe', OpenId: res.globalData.loginData.openid, HeadIMG: res.userInfo.avatarUrl, NickName: res.userInfo.nickName } }).then(res => {
                self.$store.commit('sethasGetInfo', true)
                self.$WxLogin().then(res => {
                  debugger
                  self.$emit('handOK', self.$store.state.user.userInfo)
                })
                // self.$store.commit('setUser', res.userInfo)
                // self.$store.commit('setglobalData', res.globalData)
              }).catch(err => {
                console.log(err)
              })
            }
          })
          break
        case 'getPhoneNumber':
          self.$emit('handOK', _res)
          break
      }
    },
    bindGetdata (e) {
      const self = this
      switch (self.type) {
        case 'getUserInfo':
          if (e.mp.detail.userInfo) {
            let { encryptedData, userInfo, iv } = e.mp.detail
            wx.login({
              success (res) {
                if (res.code) {
                  res.userInfo = userInfo
                  let data = self.GetData(res)
                }
              }
            })
          } else {
            console.log('用户按了拒绝按钮')
          }
          break
        case 'getPhoneNumber':
          if (e.mp.detail) {
            let data = self.GetData(e.mp.detail)
          } else {
            console.log('用户按了拒绝按钮')
          }
          break
      }
    }
  }
}
</script>

<style lang="less">
.AuthModel{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99999999999;
  .masks{
    background-color: #000000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .ModelContainer{
    position: relative;
    z-index: 1;
    background-color: #ffffff;
    border-radius: 15rpx;
    width: 80%;
    padding: 30rpx;
    h2{
      font-size: 32rpx;
      font-weight: 600;
      text-align: center;
    }
    p{
      color: #000000;
      font-size: 26rpx;
      line-height: 2.2;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 30rpx 0 10rpx 0;
      &:nth-child(1){
        color: #999999;
      }
      &:nth-child(2){
        color: #000000;
      }
      a{
        color: #b9920f;
        margin-right: 10rpx;
      }
    }
    .btn{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20rpx;
      a{
        display: block;
        border: 1rpx solid #666666;
        border-radius: 40rpx;
        padding:15rpx 0;
        color: #666666;
        width: 45%;
        text-align: center;
        position: relative;
        overflow: hidden;
        &.select{
         background-color:  #FBA306;
         border-color:  #FBA306;
         color: #ffffff;
        }
        button{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          opacity: 0;
        }
      }
    }
  }
}
</style>
