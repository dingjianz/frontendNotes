//1.0 引入核心模块
let fs = require('fs');
//2.0 创建文件流 -- fs.createWriteStream(path[, options])
let ws = fs.createWriteStream('newTxt.txt');
//3.0 打开通道
ws.once('open',()=>{
    console.log('通道已打开');
});

ws.once('close',()=>{
    console.log('通道已关闭');
});
//4.0 写入文件
ws.write('我在马路边');
ws.write('捡到一分钱');
ws.write('去买一把刀');
ws.write('杀死家里的牛');
//5.0 关闭通道
ws.end();