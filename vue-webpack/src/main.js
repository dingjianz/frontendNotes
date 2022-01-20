// 注意：在webpack 中，使用 import Vue from "vue" 导入的 Vue构造函数，功能不完善，只提供了runtime-only的方式，功能并不完善，不同于 script 引入的vue包

// 回顾包的查找规则：
//1. 找项目根目录中有没有node_modules的文件夹
//2. 在node_modules中，根据包名，找对应的vue文件夹
//3. 在vue文件夹中，找一个叫做package.json的包配置文件
//4. 在package.json 文家中，查找一个nain属性【main属性指定了这个包在被加载的时候，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式】
/**
 * a. 手动修改路径 ../node_modules/vue/dist/vue.js
 * b.  手动修改main属性： "main": "dist/vue.runtime.common.js"
 * c.  修改resolve中的alias属性
 */
import Vue from "vue"
// import Vue from "../node_modules/vue/dist/vue.js"
import "./css/index.less"

// var login ={
//     template:`<h2>这是login组件，是使用网页中形式创建出来的组件</h2>`
// }

//1.0 导入login组件
//2.0 默认，webpack无法打包 .vue文件，需要安装相关的loader: npm i vue-loader vue-template-compiler --save-dev
//3.0 在配置文件中，新增loader配置项， {test:/\.vue$/,use:"vue-loader"}
import Login from "./components/Login.vue"

new Vue({
    el: "#app",
    data: {
        msg: "hello world"
    },
    // components: {
    //     Login
    // }
    render: r => r(Login), //在webpack中，如果想要通过vue，把一个组件放到页面中去展示， render函数可以实现 ； 容器内部只能包含一个组件，相当于 innerHTML
})



/*
  总结： webpack 中如何使用vue ：
1.0  安装 vue的bao npm i vue --save-dev
2.0 忧郁在webpack中，推荐使用 .vue这个组件模板文件定义组件，所以，需要安装能解析这种文件的loader ： npm i vue-loader vue-template-compiler --save-dev  ， 定义VueLoaderPlugin 插件  const { VueLoaderPlugin } = require('vue-loader')    new VueLoaderPlugin()
3.0 在main。js中导入vue模块 import Vue from "vue"
4.0 定义一个.vue结尾的组件，其中组建由三部分组成： template script style
5.0 在main.js中导入 Login.vue 组件
6.0 render函数渲染 render：h=>h(Login)
7.0 在页面中穿件一个id为app的div元素，作为我们 vm 实例控制的区域



  */
 import test,{ title as title123,content,inf} from "../export-export-default"
 console.log(test);
 console.log(title123+'------'+content);
 inf.eat()
 