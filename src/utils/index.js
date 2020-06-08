import config from './config'
import Store from '../store'

const MOCK = process.env.MOCK
const MOCK_URL = process.env.MOCK_URL
const BASE_URL = process.env.BASE_URL
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
/**
 *
 * @param {YYYY-mm-dd HH-MM-SS} fmt
 * @param {时间} ds
 */
export function dateFormat (fmt, ds) {
  var date = new Date(ds)
  let ret
  let opt = {
    'Y+': date.getFullYear().toString(),
    'm+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'H+': date.getHours().toString(),
    'M+': date.getMinutes().toString(),
    'S+': date.getSeconds().toString()
  }
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
      )
    }
  }
  return fmt
}
/**
 * 全局请求接口方法
 * @param {utl,method,data} param0
 */
export function request ({ url, method, data }) {
  const parmas = {
    url,
    method,
    data
  }
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.request({
      data: parmas.data,
      method: parmas.method ? parmas.method : 'get',
      url: MOCK ? MOCK_URL + '/WXAJAX.ashx' : BASE_URL,
      success: function (res) {
        debugger
        wx.hideLoading()
        if (res.data.State > 0) {
          resolve(res.data)
        } else {
          if (res.data.Msg !== '') {
            wx.showModal({
              title: '温馨提示',
              content: res.data.Msg,
              showCancel: false,
              success: function (res) {}
            })
          }
          reject(res.data)
        }
      },
      fail: function (err) {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: err.errMsg,
          showCancel: false
        })
        reject(err)
      }
    })
  })
}

function Login () {
  return new Promise((resolve, reject) => {
    if (Store.state.user.hasGetInfo) {
      wx.login({
        success (res) {
          if (res.code) {
            wx.request({
              data: {
                Action: 'XCXGetUser',
                code: res.code
              },
              method: 'get',
              url: MOCK ? MOCK_URL + '/WXAJAX.ashx' : BASE_URL,
              success: function (_res) {
                wx.request({
                  data: {
                    Action: 'IsUser',
                    OpenId: _res.data.openid
                  },
                  method: 'get',
                  url: MOCK ? MOCK_URL + '/WXAJAX.ashx' : BASE_URL,
                  success: function (res) {
                    let globalData = wx.getStorageSync('globalData')
                    if (typeof globalData === 'string') {
                      globalData = {}
                    }
                    globalData.loginData = _res.data
                    globalData.isZhuCe = res.data
                    wx.setStorage({
                      key: 'globalData',
                      data: globalData
                    })
                    Store.commit('setglobalData', globalData)
                    Store.commit('sethasGetInfo', false)
                    console.log('globalData:' + JSON.stringify(Store.state.user.globalData))
                    resolve(globalData)
                  },
                  fail: function (err) {
                    reject(err)
                  }
                })
              },
              fail: function (err) {
                reject(err)
              }
            })
          }
        }
      })
    } else {
      resolve(Store.state.user.globalData)
    }
  })
}
/**
 * 全局登陆方法
 */
export async function WxLogin () {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      async success (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            async success (res1) {
              Store.commit('setuserInfo', res1.userInfo)
              res1.globalData = await Login()
              resolve(res1)
              console.log(Store.state.user.userInfo)
            }
          })
        } else {
          let LoginData = await Login()
          resolve(LoginData)
        }
      }
    })
  })
}
/**
 * 全局支付方法
 * @param {*} res
 */
export async function WxPayment (res) {
  return new Promise((resolve, reject) => {
    var _ID = res.ID
    wx.requestPayment({
      timeStamp: res.timeStamp,
      nonceStr: 'tPzlifSsLM468Snc',
      package: res.package,
      signType: 'MD5',
      paySign: res.paySign,
      async success (res) {
        resolve(_ID)
      },
      async fail (res) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          success: false,
          msg: '支付失败'
        })
      }
    })
  })
}

/**
 * 全局提示方法
 * @param {标题} title
 * @param {图标} icon
 */

export function showToast (title, icon) {
  if (icon) {
    // eslint-disable-next-line no-self-assign
    icon = icon
  } else {
    icon = 'none'
  }
  wx.showToast({
    title: title,
    icon: icon,
    duration: 2000,
    msk: true
  })
}

/**
 * 全局弹出Model
 * @param {*} param0
 */
export function showModal ({
  title,
  content,
  showCancel,
  confirmText,
  confirmColor,
  cancelText,
  cancelColor
}) {
  const parmes = {
    title,
    content,
    showCancel,
    confirmText,
    confirmColor,
    cancelText,
    cancelColor
  }
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: parmes.title,
      content: parmes.content,
      showCancel: parmes.showCancel ? parmes.showCancel : false,
      confirmText: parmes.confirmText ? parmes.confirmText : '确定',
      confirmColor: parmes.confirmColor ? parmes.confirmColor : '#576B95',
      cancelText: parmes.cancelText ? parmes.cancelText : '取消',
      cancelColor: parmes.cancelColor ? parmes.cancelColor : '#000000',
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}
/**
 * 获取页面产生方法
 */
export function getQuery () {
  /* 获取当前路由栈数组 */
  // eslint-disable-next-line no-undef
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const options = currentPage.options
  return options
}

/**
 * 检测小程序更新提示
 */
export function checkUpdateApp () {
  if (wx.canIUse('getUpdateManager')) {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      if (res.hasUpdate) {
        console.log('res.hasUpdate====')
        updateManager.onUpdateReady(function () {
          wx.showModal({
            title: '发现新版本',
            content: '升级至新版本，享受最新最全的内容',
            showCancel: false,
            success: function (res) {
              // res: {errMsg: "showModal: ok", cancel: false, confirm: true}
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            }
          })
        })
        updateManager.onUpdateFailed(function () {
          // 新的版本下载失败
          wx.showModal({
            title: '已经有新版本了哟~',
            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
            showCancel: false
          })
        })
      }
    })
  }
}

export function JsonParam (json) {
  if (!json) return ''
  const cleanArray = (actual) => {
    const newArray = []
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i])
      }
    }
    return newArray
  }
  return cleanArray(Object.keys(json).map(key => {
    if (json[key] === undefined) return ''
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
  })).join('&')
}
export function ConvertParamsToJson (params) {
  return JSON.parse('{"' + params.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === '' ? value : decodeURIComponent(value) })
}
export default {
  formatNumber,
  formatTime,
  dateFormat,
  request,
  showToast,
  showModal,
  getQuery,
  WxPayment,
  checkUpdateApp,
  JsonParam,
  ConvertParamsToJson
}
