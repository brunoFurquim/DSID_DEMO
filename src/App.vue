<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from '@/screens/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  max-height: 100vh !important;
}
</style>
