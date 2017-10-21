import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/index'
import App from './components/App'
import AppShell from './layout/AppShell'
import Vuetify from 'vuetify'
import './stylus/main.styl'

Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router : router,
  template: '<App/>',
  components : {App}
})
