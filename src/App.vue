<template>
  <div id="app">

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
