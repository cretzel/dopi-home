<template>
  <div id="app">
    <Welcome msg="Welcome to Dopi"/>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    Welcome: Welcome,
    LoginForm
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
