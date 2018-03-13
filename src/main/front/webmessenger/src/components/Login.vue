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
            <input type="login" maxlength="40" class="form-control" placeholder="Логин" v-model="usernameLocal">
            <span class="fa fa-user form-control-feedback" ></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" maxlength="40" minlength="6" class="form-control" placeholder="Пароль" v-model="passwordLocal">
            <span class="fa fa-lock form-control-feedback" ></span>
          </div>
          <div class="row">
            <div class="col-xs-12 text-left">
              <p v-if="isActive" class="errorMessage"> {{errorTitle}} </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4 pull-right">
              <button
                class="btn btn-primary btn-block btn-flat">
                Войти
              </button>
            </div>
          </div>
        </form>
    </div>
    </div>
  </div>
</template>

<script>
import auth from '../utils/auth'

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
    background-color: #1a1f3b 50%;
    height: 100%;
  }

  .title{
    padding-left: 20px;
    font-family: "Open-Sans Bold";
    color: #FFFFFF;
  }

  .login-page{
    padding-top: 150px;
  }

  .login-box{
    background-color: #15B156;
    margin-top:0;
    padding-top: 10px;
  }
</style>
