import Vue from "vue"
// 1. 手动导入 vue-router 包
import VueRouter from "vue-router"

// 导入组件
import app from "./App.vue"
import account from "./components/Account.vue"
import goodlist from "./components/GoodList.vue"

// 2.手动安装  VueRouter
 Vue.use(VueRouter)

// 3. 创建路由对象
const router = new VueRouter({
    routes:[
        {path:'/account',component:account},
        {path:'/goodlist',component:goodlist}
    ]
})

let vm = new Vue({
    el:"#app",
    router,
    render:h=>h(app)
})
