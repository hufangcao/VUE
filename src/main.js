// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './stote/index'
import './mock/index.js'
import loading from './common/img/loading2.gif'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueLazyload,{
  loading,
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
})
