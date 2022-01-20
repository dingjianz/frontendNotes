// 这个配置文件，其实就是一个 JS 文件，通过 Node.js 中的模块操作，向外暴露了一个 配置对象
const path = require("path")
// 启用热更新第二步
const webpack = require("webpack")
// 导入在内存中生成htmk 页面的插件
// 只要是插件，都一定要放到plugins 节点中去
// 这个插件的两个作用： 1. 自动在内存中根据指定页面生成一个内存的页面 2. 自动把打包好的bundle.js追加到内存中的页面中去
const htmlWebpackPlugin = require("html-webpack-plugin")
// 引入VueLoaderPlugin插件
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/main.js'), //入口，表示要使用webpack打包哪个文件
    output: { //输出文件相关的配置
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js" //这是制定输出的文件的名称
    },
    devServer: { //这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        //--open --port 3000 --contentBase src --hot
        open: true, //自动打开浏览器 
        port: 3000, //设置启动时候的运行端口
        contentBase: 'src', //指定托管的根目录
        hot: true //启动热更新的第一步
    },
    plugins: [ //配置插件的节点 
        new webpack.HotModuleReplacementPlugin(), //new 一个热更新的 模块对象 ，启用热更新第三步
        new htmlWebpackPlugin({ //创建一个在内存中 生成html 页面的插件
            template: path.join(__dirname, "./src/index.html"), //指定页面的路径，用来去生成内存中的页面
            filename: "index.html" //指定生成的页面的名称
        }),
        // vue 加载插件
        new VueLoaderPlugin()
    ],
    module: { //这个节点，用于配置所有第三方模块的加载器
        rules: [ //所有第三方模块的匹配规则
            {//配置处理 .css 文件的第三方loader 规则
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {//配置处理 .css 文件的第三方loader 规则 npm less-loader less --save-dev
                test: /\.less$/,
                use: ["style-loader", "css-loader","less-loader"]
            },
            //  npm i url-loader file-loader --save-dev
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:"url-loader?limit=4448&name=[hash:8]-[name].[ext]"},//处理图片路径的loader 规则
            // limit给定的值，是图片的大小，单位是byte，如果我们引用的图片大小 大于或等于 给定的limit值，则不会转为base64格式的字符串，如果小于limit值，则会被转为base64的字符串

            {test:/\.(woff|woff2|ttf|eot|svg)$/,use:"url-loader?limit=224KiB"},//处理字体路径loader 规则
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},//配置babel来转换改机的ES语法
            {test:/\.vue$/,use:"vue-loader"},//配置.vue文件 loader规则
        ]
    },
   resolve:{
        alias:{//修改vue 被import 或者require 被导入时候包的路径
            // "vue$":"vue/dist/vue.js"// vue$ ： 以vue结尾
        }
   }
}