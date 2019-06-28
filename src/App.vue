<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->

      <router-link :to="{name: 'adduser'}"><ElButton style="margin-right: 1em;">Add user</ElButton></router-link>

      <router-link :to="{name: 'users'}"><ElButton >Index</ElButton></router-link>

      <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'app',
     data() {
      return {
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:60px auto auto auto;
    width: 60em;
}

</style>
