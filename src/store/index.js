import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module

import app from './modules/app'
import menu from './modules/menu'

import * as getters from './getters'

import vehicles from './modules/vehicles'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    menu,
    vehicles
  },
  state: {
    isLoggedIn: !!localStorage.getItem('karsyncToken'),
    vehicles: [],
    vehiclesLoading: false,
  },
  mutations: {
    [LOGIN] (state) {
      state.loginPending = true
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
      state.loginPending = false
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
    }
  },
  actions: {
    login ({ commit }, creds) {
      console.log('hit login')
      commit(LOGIN) // show spinner
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('karsyncToken', 'logged in')
          commit(LOGIN_SUCCESS)
          resolve()
        }, 1000)
      })
    },
    logout ({ commit }) {
      localStorage.removeItem('karsyncToken')
      commit(LOGOUT)
    }
  }
})

Vue.use(VuexI18n.plugin, store)

export default store
