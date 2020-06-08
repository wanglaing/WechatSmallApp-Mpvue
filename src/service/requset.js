import Fly from '../utils/flyio/index'
import config from '../utils/config'
const MOCK = process.env.MOCK
const MOCK_URL = process.env.MOCK_URL
const BASE_URL = process.env.BASE_URL
let fly = new Fly()

class base {
  constructor () {
    this.initFlySetting()
  }
  /**
   * @description 初始化Flyio配置，全局的拦截处理
   */
  initFlySetting () {
    // 定义请求的基本路径
    fly.config.baseURL = MOCK ? MOCK_URL : BASE_URL
    // 请求拦截器
    fly.interceptors.request.use((request) => {
      // 拦截处理
      request.headers = { // 请求头
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      wx.showLoading({
        title: '加载中...'
      })
      return request
    })
    // 响应拦截
    fly.interceptors.response.use((response) => {
      // 拦截处理操作
      console.log('RequestCode', response)
      wx.hideLoading()
      // eslint-disable-next-line max-len
      if (response.data.State <= 0) {
        // 全局错误处理
        if (response.data.Msg !== '') {
          wx.showModal({
            title: '温馨提示',
            content: response.data.Msg,
            showCancel: false,
            success: function (res) { }
          })
        }
      } else {
        return response.data
      }
    })
  }
  /**
   *
   * @param {object} params 封装的get请求： url:请求地址  data：请求数据
   */
  async getRequest (params) {
    return new Promise((resolve, reject) => {
      fly.get(params.url, params.data).then(res => {
        if (res.State <= 0) {
          reject(res)
        } else {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
        wx.hideLoading()
      })
    })
  }
  /**
   *
   * @param {object} params 封装的post请求： url:请求地址  data：请求数据 options:请求额外参数
   */
  async postRequest (params) {
    return new Promise((resolve, reject) => {
      fly.post(params.url, params.data, params.options).then(res => {
        if (res.State <= 0) {
          reject(res)
        } else {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
        wx.hideLoading()
      })
    })
  }
}
export default base
