
/*1.0  电影文件需要读完之后才能返回给客户，等待时间超长
  2.0  电影文件需要一次放入内存中， 相似动作多了， 内存吃不消
  
用流可以讲电影文件一点点的放入内存中， 然后一点点的返回给客户（ 利用了 HTTP 协议的 Transfer - Encoding: chunked 分段传输特性）， 用户体验得到优化， 同时对内存的开销明显下降引入一个专门做此事的流， 这个流不用关心其它部分做了什么， 只要是接入管道中就可以了
*/

//1.0 引入模块
let fs = require('fs');
//2.0 创建读写流 fs.createReadStream(path[, options]) fs.createWriteStream(path[, options])
let rs = fs.createReadStream('D:\\web视频\\BootStrap\\高清视频\\21-Bootstrap-综合案例-轮播图-集成(掌握).mp4');
let ws = fs.createWriteStream('newMp4.mp4');

//3.0 监听流的打开和关闭
rs.once('open',()=>{
    console.log("读入通道打开");
});
rs.once('close',()=>{
    console.log("读入通道关闭");
});
ws.once('open',()=>{
    console.log("写出通道打开");
});
ws.once('close',()=>{
    console.log("写出通道关闭");
});
//4.0 绑定data
rs.on('data',(data)=>{
    console.log(data);
    ws.write(data);
})