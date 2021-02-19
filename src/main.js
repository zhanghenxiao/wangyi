// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/styles/iconfont.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'


let mock = true
if (mock) {
  require('../static/mock/city.js')
}



Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
