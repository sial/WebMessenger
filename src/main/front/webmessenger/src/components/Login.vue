<template >
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo">
      </div>
      <div class="login-logo green text-left">
        <p class="title text-left">Messenger</p>
      </div>
      <div class="login-box-body">
        <form method="post" @submit.prevent="submitUserData">
          <div class="form-group has-feedback">
            <input type="login" maxlength="40" class="form-control" placeholder="Login" v-model="usernameLocal">
            <span class="fa fa-user form-control-feedback" ></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" maxlength="40" minlength="6" class="form-control" placeholder="Password" v-model="passwordLocal">
            <span class="fa fa-lock form-control-feedback" ></span>
          </div>
          <div class="row">
            <div class="col-xs-12 text-left">
              <p v-if="isActive" class="errorMessage"> {{errorTitle}} </p>
            </div>
          </div>
          <div class="row">
            <table>
              <tr>
                <td class="col-md-6 text-left">
                  <a
                    href="#/signup"
                  >
                    Sign-up
                  </a>
                </td>
                <td class="col-md-2">
                  <button
                    class="btn btn-primary btn-block btn-flat">
                    Sign-in
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </form>
    </div>
    </div>
  </div>
</template>

<script>
import auth from '../utils/auth'

document.title = 'Sign'

export default {
  name: 'Login',
  data () {
    return {
      usernameLocal: '',
      passwordLocal: '',
      errorTitle: '',
      isActive: false
    }
  },
  activated: function () {
    console.log('error')
  },
  methods: {
    submitUserData () {
      auth.username = this.usernameLocal
      auth.password = this.passwordLocal

      let errorCallback = (errorText, errorMessageIsActive) => {
        this.errorTitle = errorText
        this.isActive = errorMessageIsActive
      }

      auth.login(errorCallback)
    }
  },
  watch: {
    usernameLocal: function (value) {
      this.isActive = false
    },
    passwordLocal: function (value) {
      this.isActive = false
    }
  }
}
</script>

<style scoped>
  .errorMessage{
    color: #D50000;
  }

  .row {
    text-align: center;
  }

  .login-page{
    background-color: #353b48;
    height: 100%;
  }

  .title{
    padding-left: 20px;
    font-family: "Roboto Bold";
    color: #FFFFFF;
  }

  .login-page{
    padding-top: 150px;
  }

  .login-box{
    background-color: #0097e6;
    margin-top:0;
    padding-top: 10px;
  }

  .btn-primary{
    background-color: #487eb0;
  }

  .vcenter {
    display: inline-block;
    vertical-align: middle;
    float: none;
  }
</style>
