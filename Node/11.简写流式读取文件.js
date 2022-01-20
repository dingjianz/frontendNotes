//1.0 引入模块
let fs = require('fs');

//2.0 创建读写流 fs.createReadStream(path[, options]) fs.createWriteStream(path[, options])
let rs = fs.createReadStream('D:\\web视频\\BootStrap\\高清视频\\21-Bootstrap-综合案例-轮播图-集成(掌握).mp4');
let ws = fs.createWriteStream('newMp4.mp4');

//3.0 创建管道  上一个js中的代码就是下面这行代码的底层实现原理
rs.pipe(ws);