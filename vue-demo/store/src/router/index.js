import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/Tabbar/HomeContainer"
import search from "../components/Tabbar/SearchContainer"
import member from "../components/Tabbar/MemberContainer"
import shopcar from "../components/Tabbar/ShopcarContainer"
import newslist from "../components/News/NewsList"
// import newsinfo from "../components/News/Newsinfo"
import Photolist from "../components/photo/Photolist"
// import goodslist from "../components/goods/goodslist"
import goodsinfo from "../components/goods/goodsinfo"
import goodsdesc from "../components/goods/goodsdesc"
import goodscomment from "../components/goods/goodscomment"

Vue.use(Router)
 let router = new Router({
  routes: [
    {path: "/",redirect: "/home"},
    {path: '/home', component: home },
    {path: '/search',component: search},
    {path: '/member',component: member},
    {path: '/shopcar',component: shopcar},
    {path:"/home/list",component:newslist},
    {path:"/home/list/newsinfo/:id",component:()=>import("../components/News/Newsinfo")},
    {path:"/home/photolist",component:Photolist},
    {path:"/home/goodslist",component:()=>import("../components/goods/goodslist")},
    {path:"/home/goodsinfo",component:goodsinfo,name:"goodsinfo"},
    {path:"/home/goodsdesc",component:goodsdesc,name:"goodsdesc"},
    {path:"/home/goodscomment",component:goodscomment,name:"goodscomment"}
  ],
  linkActiveClass: "mui-active" ,//覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
export default router
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
    next()
})