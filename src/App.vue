<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="ten columns">
          <div style="display:inline-block;"></div>
        </div>
        <div class="two columns"><div v-if="store.loggedIn">{{ store.user.username }}</div>
        </div>
      </div>
    </div>

    <Welcome msg="Welcome to Dopi"/>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import LoginForm from './components/LoginForm.vue'
import store from './store/Store.js'

export default {
  name: 'App',
  components: {
    Welcome: Welcome,
    LoginForm
  },
  data: function () {
    return {
      store: store
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
