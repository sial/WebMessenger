import store from '../store/index'
import axiosClient from './client'
import router from '../router/index'

export default {
  name: 'login',
  data () {
    return {
      loader: false,
      infoError: false,
      username: '',
      password: ''
    }
  },
  isAuth () {
    console.log('IS LOGGED' + store.state.isLogged)
    return store.state.isLogged
  },
  login (errorCallback) {
    this.loader = true
    this.infoError = false

    axiosClient.post('/loginhandler', {
      username: this.username,
      password: this.password
    }).then(response => {
      if (response.status === 200) {
        store.commit('LOGIN_USER')
        router.push({path: '/'})
      }
    }).catch(error => {
      console.log('Error' + error.response)
      if (error.response.status === 401) {
        let errorText = decodeURIComponent(error.response.data)
        errorCallback(errorText, true)
        store.commit('setUsername', '')
      } else if (error.response.status === 422) {
        router.push({path: '/changePassword'})
        store.commit('setUsername', this.username)
      }

      // //TODO remove
      // store.commit('LOGIN_USER')
      // router.push({  path: '/' })
    })
  },
  updatePassword (username, oldPassword, newPassword, errorCallback) {
    axiosClient.post('/updatepassword', {
      username: username,
      password: oldPassword,
      newPassword: newPassword
    }).then(response => {
      console.log('update pass response' + response)
      return true
    }).catch(error => {
      console.log('update pass error' + error)
      let errorText = decodeURIComponent(error.response.data)
      errorCallback(errorText, true)
      return false
    })
  },
  logout (callback) {
    console.log('logout')

    axiosClient.post('/logout', {
      username: this.username,
      password: this.password
    }).then(response => {
      if (response.status === 200) {
        store.commit('LOGOUT_USER')
        router.push({path: '/login'})
      }
    }).catch(error => {
      console.log('Error' + error.response)
      router.push({path: '/'})
    })
  }
}
