<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->

      <router-link :to="{name: 'adduser'}"><el-button>Add user</el-button></router-link>
      <router-link :to="{name: 'users'}"><el-button>Index</el-button></router-link>

<!--    <PageTwo ref="PageTwo"/>-->
      <router-view></router-view>
  </div>

</template>

<script>
// import PageOne from './components/PageOne'
// import PageTwo from './components/PageTwo'

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
  margin-top: 60px;
}
</style>
