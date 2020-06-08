export default {
  state: {
    userInfo: null,
    Address: null,
    globalData: null,
    shaerData: null,
    hasGetInfo: true
  },
  mutations: {
    setuserInfo(state, data) {
      state.userInfo = data
    },
    sethasGetInfo(state, data) {
      state.hasGetInfo = data
    },
    setglobalData(state, data) {
      state.globalData = data
    },
    SETSHAERDATA(state, data) {
      state.shaerData = data
    },
    SET_Address(state, data) {
      state.Address = data
    }
  },
  getters: {
    //
  },
  actions: {
    //
  }
}
