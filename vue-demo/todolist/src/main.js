// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from "./store"


console.log('process.env.', process.env.BASE_API)


Vue.config.productionTip = false

Vue.use(VueRouter)


/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
