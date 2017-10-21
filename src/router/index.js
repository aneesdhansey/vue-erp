import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/App'
import Login from '../components/auth/Login'
import MainPage from '../components/MainPage'

import appModules from './appModules'

Vue.use(Router)

export default new Router({
  mode : 'history',
  base : '/vue-erp/',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main Page',
      component: MainPage,
      children : appModules
    }
  ]
})