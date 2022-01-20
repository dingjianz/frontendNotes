const fs = require("fs")
const path = require("path")

function getFileByPath(fpath) {
    return new Promise((resolve, reject) => {
        fs.readFile(fpath, "utf-8", (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

// 需求： 先读取文件1，再读取文件2.最后读取文件3；
// 注意：通过 .then 指定回调函数的时候，成功的回调函数必须传，失败的回调可以省略不传

//  在上一个  .then中，返回一个新的 promise 实例，可以继续用下一个 .then 处理
/*
getFileByPath("./files/11.txt").then((data) => {
    console.log(data)
    return getFileByPath("./files/2.txt")
}, (err) => {
    console.log(err.message)
    // return一个新的 promise ,不然后续代码无法执行
    return getFileByPath("./files/2.txt")
}).then((data) => {
    console.log(data)
    return getFileByPath("./files/3.txt")
}).then((data) => {
    console.log(data);
})
*/

// 先于 promise 执行
console.log("ok")


// 当我们有这样的需求，哪怕前面的 promise执行失败了，但是，不要影响后续的promise的正常执行，此时我们可以单独为每个 promise， 通过 .then指定一下失败的回调，这样就不会影响后面promise 的执行


// 有时，我们有这样的需求，与上面的需求刚好相反，如果后续的promise执行，依赖于前面promise执行的结果，若前面的失败了，则后面的就没有执行下去的意义了，此时，我们想要实现，一旦有报错，立即终止所有的promise的执行

getFileByPath("./files/1.txt").then((data) => {
    console.log(data)
    return getFileByPath("./files/12.txt")
}).then((data) => {
    console.log(data)
    return getFileByPath("./files/3.txt")
}).then((data) => {
    console.log(data);
}).catch((err)=>{//catch的作用，如果前面有任何的 promise执行失败，则立即终止所有的promise的执行，并马上进入catch 去出路promise 中抛出的异常。
    console.log('===='+err.message);
})