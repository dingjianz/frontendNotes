//1.0 引入核心模块
let http = require('http');

//2.0 创建服务器
let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.write("你好世界");
    res.write('<input type="color">');
    res.end('hello world');
});

//2.0 监听
server.listen(80, "127.0.0.1");

