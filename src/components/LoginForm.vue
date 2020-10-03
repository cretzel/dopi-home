<template>
  <div class="container">
    <div>
      <label>Username</label>
      <input type="text" v-model="username" v-on:keyup.enter="login">
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="password" v-on:keyup.enter="login">
    </div>
    <button v-on:click="login" class="button-primary">Login</button>
    <div class="error"><label>{{ message }}</label></div>

  </div>
</template>

<script>
import loginService from '../service/LoginService.js'

export default {
  name: 'LoginForm',
  props: {
  },
  data: function () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    login: async function() {
      this.message = '';
      let loggedIn = await loginService.login(this.username, this.password)
      if (!loggedIn) {
        this.message = "Login failed";
      }
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
