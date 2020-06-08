import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import main from './module/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {user, main}
})
