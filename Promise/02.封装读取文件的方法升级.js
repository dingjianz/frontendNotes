const fs = require("fs")
const path = require("path")

function getFileByPath(fpath, success, error) {
    fs.readFile(fpath, "utf-8", (err, dataStr) => {
        if (err) return error(err)
        success(dataStr)
    })
}
/*
getFileByPath(path.join(__dirname, "./files/1.txt"), (dataStr) => {
    console.log(dataStr)
}, (err) => {
    console.log(err.message)
})
*/

// 需求：先读取文件1 ，再读取文件2 ，最后再读取文件 3；

// 回调嵌套  防止回调地狱  可以使用ES6 中的Promise 来解决回调地狱的问题
// 问： Promise 的本质是要干什么？ 就是单纯的为了解决回调地狱的问题 ，并不能帮我们减少代码量
getFileByPath(path.join(__dirname, "./files/1.txt"), (data) => {
    console.log(data);
    
    getFileByPath(path.join(__dirname, "./files/2.txt"), (data) => {
        console.log(data);
    
        getFileByPath(path.join(__dirname, "./files/3.txt"), (data) => {
            console.log(data);
        })
    })
})