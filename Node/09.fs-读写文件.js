//1.0 引入模块
let fs = require('fs');
//2.0 读取文件  fs.readFile(path[, options], callback)

//读取文本
fs.readFile('newTxt.txt',(err,data)=>{
if(!err){
    console.log(data); //<Buffer e6 88 91 e5 9c a8 e9 a9 ac e8 b7 af e8 be b9 e6 8d a1 e5 88 b0 e4 b8 80 e5 88 86 e9 92 b1 e5 8e bb e4 b9 b0 e4 b8 80 e6 8a 8a e5 88 80 e6 9d 80 e6 ad... >
    console.log(data.toString()); //我在马路边捡到一分钱去买一把刀杀死家里的牛
}else{
    throw err;
}
});

//读取图片
fs.readFile('D:/前端开发/images/流川枫.jpg', (err, data) => {
    if (!err) {
     console.log(data); //<Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 01 00 48 00 48 00 00 ff db 00 43 00 02 01 01 02 01 01 02 02 02 02 02 02 02 02 03 05 03 03 03 03 03 06 04 04 03... >
    //验证是否读取成功，可以将data写入成新的文件   fs.writeFile(file, data[, options], callback)
    fs.writeFile('csImg.jpg',data,(err)=>{
        if (!err) {
            console.log('图片写入成功');
        }else{
            throw err;
        }
    })
     
    } else {
        throw err;
    }
});
//读取ppt
fs.readFile('C:\\Users\\丁健\\Desktop\\Ⅷ硫磺Ⅳ汽提开工培训.pptx', (err, data) => {
    if (!err) {
     console.log(data); //<Buffer 50 4b 03 04 14 00 06 00 08 00 00 00 21 00 c4 09 ee 1c 19 05 00 00 2d 5e 00 00 13 00 08 02 5b 43 6f 6e 74 65 6e 74 5f 54 79 70 65 73 5d 2e 78 6d 6c 20... >
    
    //验证是否读取成功，可以将data写入成新的文件   fs.writeFile(file, data[, options], callback)
    fs.writeFile('newPpt.pptx',data,(err)=>{
        if (!err) {
            console.log('ppt写入成功！');
        }else{
            throw err;
        }
    })
     
    } else {
        throw err;
    }
});