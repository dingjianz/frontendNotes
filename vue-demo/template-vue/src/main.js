import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./style/base.css"
import Utils from "./utils"

Vue.use(ElementUI);
Vue.use(Utils)
import NProgress from 'nprogress'; //Progress 进度条
import 'nprogress/nprogress.css' //Progress 进度条样式

// NProgress.start(); // 开启Progress 

setTimeout(()=>{
  // NProgress.done()
},3000)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: p => p(App)
})
