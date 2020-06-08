import requset from '../requset'
// eslint-disable-next-line new-cap
const http = new requset()
/**
 * 获取页面分享配置
 * @param path
 * @returns {Promise<unknown>}
 */
export const shaer = async (params) => {
  return http.getRequest({
    url: '/WXAJAX.ashx',
    data: {
      Action: 'ShaerConfig',
      ...params
    }
  })
}
/**
 * 获取首页数据
 * @returns {Promise<unknown>}
 * @constructor
 */
export const GetHomeDat = async (params) => {
  return http.getRequest({
    url: '/WXAJAX.ashx',
    data: {
      Action: 'GetHomedata',
      ...params
    }
  })
}
/**
 * 获取商品列表表
 * @param param
 * @returns {Promise<unknown>}
 * @constructor
 */
export const GetShopsList = async (params) => {
  return http.getRequest({
    url: '/WXAJAX.ashx',
    data: {
      Action: 'GetShopsList',
      ...params
    }
  })
}
/**
 * 获取商品详情
 * @param param
 * @returns {Promise<unknown>}
 * @constructor
 */
export const GetShopsDetails = async (params) => {
  return http.getRequest({
    url: '/WXAJAX.ashx',
    data: {
      Action: 'GetShopsDetails',
      ...params
    }
  })
}
