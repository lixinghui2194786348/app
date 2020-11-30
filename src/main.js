// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vue from 'vue'
import requests from './assets/axios'   // 记得改为你的路径
Vue.prototype.axios = requests  // 此处命名为rq,你可以改
// Vue.use(Button,Field)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
