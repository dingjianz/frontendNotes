const fn = require("./33.exports.js")
const modu = require("./33.module~exports.js")

/*
    模块成员的导出最终以module.exports 为准；
    如果要导出单个的成员，一般我们使用exports导出；
    如果要导出的成员比较多，一般我们使用module.exports的方式
    这两种方式不能同时使用，若两者同时使用，最后module.exports会覆盖exports

    exports与module的关系：
    module.exports = exports = {}
*/
fn.sum(3,9)
console.log(fn.str);

console.log(modu.name);
console.log(modu.age);
modu.eat()

console.log(res);//global 的全局变量


