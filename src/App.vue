<template>
  <div id="app">
    <header class="row">
      <span class="logo col-sm-1">Dopi</span>
      <span class="col-sm-8"></span>
      <span class="col-sm-2 username" v-if="store.loggedIn">{{ store.userInfo.username }}</span>
    </header>

    <div class="row" id="doc-wrapper">

      <main class="col-sm-12 col-md-12 col-lg-12" id="doc-content">
        <div class="fluid">
          <h1>Welcome to Dopi</h1>

          <LoginForm></LoginForm>

        </div>
      </main>

    </div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import store from './store/Store.js'
import loginService from './service/LoginService.js'

export default {
  name: 'App',
  components: {
    LoginForm
  },
  data: function () {
    return {
      store: store
    }
  },
  created: function () {
    loginService.startTokenRefresher();
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
