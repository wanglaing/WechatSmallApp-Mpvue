import Vue from 'vue'
import App from './App'
import './iconfont/iconfont.css'
import {request, WxLogin, showToast, JsonParam,ConvertParamsToJson} from './utils/index.js'
import config from './utils/config.js'
import Store from './store'
import Service from '@/service'
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$config = config
Vue.prototype.$store = Store
Vue.prototype.$WxLogin = WxLogin
Vue.prototype.$ShowToast = showToast
Vue.prototype.$service = Service.Service
Vue.prototype.$JsonToParam = JsonParam
Vue.prototype.ConvertParamsToJson = ConvertParamsToJson
Vue.prototype.$env = process.env
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
