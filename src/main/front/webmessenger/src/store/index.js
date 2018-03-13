import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogged: window.localStorage.getItem('isLogged'),
  username: ''
}

const getters = {
  getUsername: state => {
    if (state.username) {
      return state.username
    } else {
      return window.localStorage.getItem('username')
    }
  }
}

const mutations = {
  LOGIN_USER (state) {
    state.isLogged = true
    window.localStorage.setItem('isLogged', true)
  },

  LOGOUT_USER (state) {
    state.isLogged = false
    window.localStorage.setItem('isLogged', false)
  },

  setUsername (state, inputUsername) {
    state.username = inputUsername
    window.localStorage.setItem('username', inputUsername)
  }
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations
})

export default store
