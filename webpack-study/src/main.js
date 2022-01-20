//这是main.js 使我们项目的js入口文件

// 1.0 导入jQuery 
//  import *** from *** 是ES6中导入模块的方式
import $ from "jquery"

// 注意： 如果要通过路径的形式，去引入node_moudles中相关的文件，可以直接省略 路径前面的node_modules这一层目录，周姐姐写报的名称，然后后面跟上具体的文件路径

// 使用import 语法，导入css样式表
import "./css/index1.css"
import "./css/index.less"
// 注意： webpack 默认只能打包处理 JS 类型的文件，无法处理其他的 非 JS 类型的文件；如果要处理非 JS 类型文件，需要手动安装一些合适的第三方loader 加载器 ；
//eg: 1.0  处理css类型文件，需要安装 npm i style-loader css-loader --save-dev
//2.0 打开webpack.config.js 配置文件，在里面新增一个配置节点，叫做module，它是一个对象，在这个module对象身上，有一个rules属性，这个rules属性是一个数组，在这个数组中存放了所有第三方文件的匹配和处理规则

// webpack 处理第三方文件类型的过程：
//1.0 发现这个要处理的文件不是JS文件，然后就去配置文件中，查找有没有对应的第三方loader规则；
//2.0 如果能找到对应的规则，就会调用对应的loader处理这种文件类型；
//3.0 在调用的时候，从use 数组的右边的loader往前边loader调用；
//4.0 当最后的一个loader调用完毕，会把处理的结果直接交给webpack进行打包，最终输出到bundle.js中去

// $(function () {
//     $('li:odd').css("backgroundColor", "black")
//     $('li:even').css("backgroundColor", function () {
//         return "#" + "D97634"
//     })

// })

// class 关键字，是ES6中提供的新语法，是用来实现 ES6 中面向对象编程的方式
class Person {
    static info = {name:"zs",age:20}
} 
// 在webpack中，默认只能处理一部分ES6的新语法，一些更高级的ES6或者ES7语法，webpack是处理不了的，这时候就需要借助第三方loader，来帮助webpack处理这些高级的语法，当第三方loader把高级语法转为低级的语法之后，将结果交给webpack去打包到bundle.js中

// 通过Babel 可以将高级的语法转换为低级的语法。
//1 在webpack中，可以运行如下两套命令，安装两套包，去安装Babel相关的loader功能；
//1.1 第一套包： npm i babel-core babel-loader babel-plugin-transform-runtime --save-dev  babel的转换工具
//1.2 第二套包： npm i babel-preset-env babel-preset-stage-0 --save-dev  babel的语法

// 2. 打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则:
// 2.1 {test:/\.js$/,use:"babel-loader",exclude:/node_modules/}
//2.2 注意： 在配置babel 的loader规则的时候，必须把node_modules 目录，通过exclude选项排除掉；原因有两个： a:如果不排除node_modules，则babel会把node_modules中所有第三方JS文件都打包翻译，这样会非常消耗CPU,同时打包速度会非常慢； b: 哪怕最终babel把所有的node_modules中的JS都转换完毕了，但是项目也无法正常进行；

//3. 在项目的根目录中，新建一个.babelrc 的Babel配置文件，这个配置文件属于JSON 格式，必须符合JSON语法规范：不能写注释，字符串必须双引号
//3.1 在 。babelrc写如下配置 :  preset(语法)
/*{
    "presets":["env","stage-0"],
    "plugins":["transform-runtime"]
}*/

//4. 了解： 目前，我们安装的 babel-preset-env 是比较新的ES语法插件，之前安装的是babel-preset-es2015，现在除了一个更新的语法插件  babel-preset-env ，它包含了所有的 和es 相关的语法
console.log(Person.info);
