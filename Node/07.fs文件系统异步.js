//1.0 引入核心模块
let fs = require('fs');
//2.0 打开文件---异步无返回 fs.open(path, flags[, mode], callback)
fs.open('it666.txt', 'a', (err, fd) => {//a是在之前的文本后面继续添加，w是若之前已添加则无法继续添加
    //2.1 判断是否出错
    if (!err) {
        //2.2 写入文件 fs.writeFile(file, data[, options], callback)
        fs.writeFile(fd, '太阳很大，又晒黑了！', (err) => {
            if (!err) {
                console.log('文件写入成功');
            }else{
                throw err;
            }
        });
        //2.3 关闭和保存文件 fs.close(fd, callback)
        fs.close(fd,(err)=>{
            if(!err){
                console.log('文件已关闭保存');
            }else{
                throw err;
            }
        })
    } else {
        throw err;
    }
});


console.log('我在回调函数执行以前执行，无论回调函数报错与否，我都会执行，且在其之前执行');
