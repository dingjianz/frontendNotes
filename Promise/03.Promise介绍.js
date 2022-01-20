//1. Promise是一个构造函数 ，既然是一个构造函数 ，就可以 new Promise() 得到Promise 的实例

//2. 在Promise 上，有两个函数，分别叫做resolve (成功之后的回调函数)，reject(失败之后的回调函数)

//3. 在Promise 的 prototype 原型对象上 有一个 .then 方法 意思是：只要是 new Promise() 创建的实例，都可以调用 .then 方法

//4. Promise 表示一个 异步操作，每当我们new Promise() 一个实例，这个实例就表示一个具体的 异步操作；

//5. 既然 Promise 创建的实例，是一个异步操作 ，那么这个异步操作的结果，只有两种状态：
//5.1 状态1 ：异步操作成功，内部调用 resolve 把结果返回给调用者
//5.2 状态2 ： 异步操作失败，内部调用 reject 把结果返回给调用者
//5.3 由于 Promise 的实例，是一个异步操作，所以内部拿到操作的结果后，无法使用 return 把结果返回给调用者，这时候，只能使用回调函数的形式，来把成功或失败的结果，返回给调用者   

//6. 我们可以在 new Promise() 实例上调用 .then方法，【预先】为这个Promise 异步操作，指定 成功(resolve) 和 失败(reject) 回调函数；



// 注意：这里 new 出来的 Promise ，只是代表 【形式上】的异步操作;
// 什么是形式上的异步操作：就是说，我们只知道它是一个异步操作，但是做什么异步操作，目前并不清楚

const fs = require("fs")
const path = require("path")

// 这是一个具体的异步操作，其中，使用 function 指定一个具体的异步操作
// 注意： 每当new Promise() 出一个实例之外，还会立即调用我们为 Promise 构造函数传递的那个 function，执行这个 function 中的异步操作代码 ，无需手动调用

/*
let promise = new Promise(() => {
    // 这个function 内部写的就是具体的异步操作！！！
    fs.readFile(path.join(__dirname, "./files/2.txt"), "utf-8", (err, data) => {
        if (err) throw err
        console.log(data);
    })
})
*/

// 将 Promise 放在一个函数内部，就可以需要调用时才调用，动态传入fpath
function getFileByPath(fpath) {
  return new Promise((resolve,reject) => {
        // 这个function 内部写的就是具体的异步操作！！！
        fs.readFile(fpath, "utf-8", (err, data) => {
            // if (err) throw err
            // console.log(data);
            if(err) return reject(err)
            resolve(data)
        })
    })
}
getFileByPath(path.join(__dirname, "./files/2.txt")).then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err.message);
    
})