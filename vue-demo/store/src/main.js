import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource"
import "./lib/mui/css/mui.min.css"
import "./lib/examples/hello-mui/css/icons-extra.css"
import "./css/iconfont.css"
import "./lib/iconfont.js"
import { Header,Swipe, SwipeItem,Button, Switch } from "mint-ui"
import store from "./store"

Vue.use(VueResource)
// vue.http.options.root 全局设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io/'
// 全局设置post时候表单数据格式的组织模式 application/x-www-form-urlencoded
Vue.http.options.emulateHTTP = true

Vue.config.productionTip = false
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component( Switch .name,  Switch )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: p => p(App)
})
