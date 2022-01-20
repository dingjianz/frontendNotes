
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'



Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false


const router = new VueRouter({
routes:[
    {path:'/goods',component:goods},
    {path:'/ratings',component:ratings},
    {path:'/seller',component:seller},
  { path: '/', redirect:'/goods'}
],
  mode: 'history'
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
