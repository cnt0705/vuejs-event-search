import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/routes'
import Vuex from 'vuex'
import stores from './vuex/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter(routes)
const store = new Vuex.Store(stores)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  router,
  store
})
