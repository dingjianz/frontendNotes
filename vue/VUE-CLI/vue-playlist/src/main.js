import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Home from "./components/Home"
import jquery from 'jquery'　
import 'bootstrap/dist/css/bootstrap.min.css'　
import 'bootstrap/dist/js/bootstrap.js'　

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// 配置路由
const router = new VueRouter({
  routes: [{
    path: '/home',
    component: Home
  }],
  mode: 'history',
  linkActiveClass: "active"
});
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
