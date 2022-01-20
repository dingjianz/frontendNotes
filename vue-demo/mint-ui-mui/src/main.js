// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./js/iconfont.js"
import "./css/base.css"
import "./css/app.css"
import axios from "axios"

// 将axios绑定在vue原型上，这样可以在其他组件通过this.$axios使用axios
Vue.prototype.$axios = axios

// 导入所有的MintUI 组件
// import MintUI from "mint-ui"
// Vue.use(MintUI)


// 按需导入 Mint-UI组件
//  安装 babel-plugin-component 插件  npm i babel-plugin-component --save-dev
/*
"plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]

*/
import { Button,Toast} from 'mint-ui'
// 使用 Vue.component 注册 按钮组件
Vue.component(Button.name, Button)
Vue.component(Toast.name,Toast)


// 引入 MUI 的样式表，用法和bootstrap 一样
import "./lib/mui/css/mui.min.css"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
