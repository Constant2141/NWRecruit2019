// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import star from './utils/star'

Vue.config.productionTip = false

Vue.prototype.$star = star;
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://47.106.21.195:3001/'
// Axios.defaults.baseURL = 'http://172.20.10.6:3001/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
