import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

import app from './modules/app'
import authentication from './modules/authentication'
import menu from './modules/menu'
import vehicles from './modules/vehicles'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    authentication,
    menu,
    vehicles
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ],
})

Vue.use(VuexI18n.plugin, store)

export default store
