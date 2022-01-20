//1.0 引入模块
let fs = require('fs');
//2.0 打开文件
let fd = fs.openSync('myText.txt','w');
//3.0 写入文件
fs.writeFileSync(fd,'今天天气很好，快来敲代码！');
//4.0 保存并退出
fs.closeSync(fd);

