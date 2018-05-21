import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
//Vue.prototype.$http = axios
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
