// 需求 ：你要封装一个方法，我给你一个读取文件的路径，你这个方法能帮我读取文件，并把内容返回给我

const fs = require("fs")
const path = require("path")

/*
fs.readFile(path.join(__dirname,'./files/1.txt'),"utf-8",(err,dataStr)=>{
    if(err) throw err
    console.log(dataStr)
})
*/

// 初衷： 给定文件路径，返回读取到的内容
// 我们可以规定一下，callback中，有两个参数，第一个参数是失败的结果，第二个参数是成功的结果； 同时，我们规定，如果成功后，返回的结果，应该位于callback参数的第二个位置，此时，第一个位置由于没有出错，所以，放一个null；如果失败了，则第一个位置防止Error 对象，第二个位置放置 一个 undefined
function getFileByPath(fpath, callback) {
    fs.readFile(fpath, "utf-8", (err, dataStr) => {
        // 如果报错，进入if分支后，if后面的代码就没有必要再执行了
        if (err) return callback(err)
        // console.log(dataStr)
        callback(null, dataStr)
    })
}
// getFileByPath(path.join(__dirname,"./files/1.txt"))//异步读取 无法得到结果 
getFileByPath(path.join(__dirname, "./files/1.txt"), (err, dataStr) => {
     //加个回调函数就可以解决异步读取的问题
     if(err) return console.log(err.message)
     console.log(dataStr);
     
})