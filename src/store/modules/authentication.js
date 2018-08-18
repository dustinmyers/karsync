import axios from 'axios'
import * as types from '../mutation-types'
import api from '../api'

const state = {
  user: null,
  isAuthenticated: !!(localStorage.getItem('karsyncToken')),
  userLoading: false,
}

const mutations = {
  [types.LOGIN] (state) {
    state.userLoading = true
  },
  [types.LOGIN_SUCCESS] (state, data) {
    state.userLoading = false
    state.user = data.user
    localStorage.setItem('karsyncToken', data.token)
    localStorage.setItem('karsyncUser', JSON.stringify(data.user))
    state.isAuthenticated = !!localStorage.getItem('karsyncToken')
    axios.defaults.headers.common.Authorization = data.token
  }
}

const actions = {
  async login ({ commit }, authCredentials) {
    console.log('in login action', authCredentials)
    const url = '/public/login'
    commit(types.LOGIN)
    commit(types.LOGIN_SUCCESS, await api.post({ url, body: authCredentials }))
  }
}

export default {
  actions,
  mutations,
  state
}
