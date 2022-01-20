// Node：
// 这是Node 中向外暴露成员的形式
// module.exports = {}  , exports 
// Node中，使用 var 名称 = require("模块标识符") 导入文件



// ES6 : 
// 在ES6，通过规范的形式，规定了 ES6 中如何导入和导出模块
// es6 中，使用： import 模块名称 from "模块标识符" ；或者 import "模块路径"
// 在ES6 中， 使用 export default 和 export 向外暴露成员


// 注意：两种方式都可以导入导出文件，但是用Node方式导出，必须用Node方式导入；用 ES6 方式导出，必须用 ES6 方式导入；

/*
export default {
    name:'zs',
    age:18
}
*/
let info = {
    name: 'zs',
    age: 18
}
export default info
export const title = "satr"
export const content = "myNameId"
export const inf = {
    name:"dj",
    age:18,
    eat(){
        console.log("eat kkkkkk");
    }
} 
/* 注意：1. export default {} 向外暴露 的成员，可以使用任意的变量来接收
 2. 在一个模块中，export default 只允许向外暴露一次
 3. 在一个模块中，可以同时使用export 和 export default 向外暴露成员
 4. 使用export 向外暴露的成员，只能使用 {}的形式来接收，叫做【按需导出】，且名字不得更改
 5. export 可以向外暴露多个成员，同时，如果某些成员我们不需要，则在import 的时候，在 {} 里不接收即可
 6. 使用export 导出的成员，如果就像换个名称 来接收，可以使用 as 来另起别名
*/