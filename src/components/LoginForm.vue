<template>
  <div class="login-form">

    <div class="container" v-if="!store.loggedIn">
      <div>
        <label>Username</label>
        <input type="text" v-model="username" v-on:keyup.enter="login">
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="password" v-on:keyup.enter="login">
      </div>
      <button v-on:click="login" class="primary">Login</button>
      <div class="error"><label>{{ errorMessage }}</label></div>
      <div><label>{{ successMessage }}</label></div>
    </div>

    <div class="container" v-else>
      <div><strong>Your are logged in as {{ store.userInfo.username }}</strong></div>
      <br/>
      <button v-on:click="logout" class="primary">Logout</button>
      <button v-on:click="getUser" class="primary">Fetch User Details</button>
      <button v-on:click="refreshToken" class="primary">Refresh Token</button>
      <div v-if="userDetails">{{ userDetails }}</div>
    </div>
  </div>
</template>

<script>
import loginService from '../service/LoginService.js'
import store from '../store/Store.js'

export default {
  name: 'LoginForm',
  props: {
  },
  data: function () {
    return {
      username: '',
      password: '',
      errorMessage: '',
      successMessage: '',
      userDetails: '',
      store: store
    }
  },
  methods: {
    login: async function() {
      this.errorMessage = '';
      this.successMessage = '';
      let user = await loginService.login(this.username, this.password);
      if (!user) {
        this.errorMessage = 'Login failed'
      } else {
        this.successMessage = 'Login successful'
      }
    },
    logout: async function() {
      this.errorMessage = '';
      this.successMessage = '';
      await loginService.logout();
    },
    getUser: async function() {
      this.userDetails = await loginService.getUser(store.userInfo.username);
    },
    refreshToken: async function() {
      await loginService.refreshToken();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  label {
    margin-right: 10px;
  }
</style>
