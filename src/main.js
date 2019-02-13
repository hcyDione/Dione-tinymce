import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import VueResource from 'vue-resource'
import Notification from './zujian/notification/index.js'

Vue.config.productionTip = false
// Vue.prototype.$http = axios
// Vue.use(VueResource);
Vue.use(Notification)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
