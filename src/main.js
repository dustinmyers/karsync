// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import YmapPlugin from 'vue-yandex-maps'
import { sync } from 'vuex-router-sync'
import VuesticPlugin from 'vuestic-theme/vuestic-plugin'
import App from './App'
import store from './store'
import router from './router'
import './i18n'


Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})

sync(store, router)

let mediaHandler = () => {
  if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
    store.dispatch('toggleSidebar', true)
  } else {
    store.dispatch('toggleSidebar', false)
  }
}

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = !!localStorage.getItem('karsyncToken')
//   store.commit('setLoading', true)
//   if (!isLoggedIn) {
//     next('auth/login')
//   } else {
//     next()
//   }
// })

router.afterEach((to, from) => {
  mediaHandler()
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
