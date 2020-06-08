export default {
  state: {
    count: 0,
    isIphoneX: wx.getStorageSync('isIphoneX'),
    SatacUrl: 'https://www.baidu.com/SmllApp/',
    requestsUrl: 'https://www.baidu.com/SmllApp/'
  },
  mutations: {
    increment: (state, data) => {
      state.count = data
    },
    decrement: (state, data) => {
      state.count = data
    }
  },
  getters: {

  },
  actions: {

  }
}
