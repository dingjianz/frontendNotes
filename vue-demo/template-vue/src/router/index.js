import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



export default new Router({
  routes: [
      {path:"/",component:()=>import("../components/header"),children:[
        {path:'/login',component:()=>import("../components/Login")},
        {path:'/register',component:()=>import("../components/Register")}
      ]},
      {path:"/denglu",component:()=>import("../components/Denglu")}
     
  ]
})
