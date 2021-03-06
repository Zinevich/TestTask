import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import store from './store/store'
import router from './router/router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
