let http = require('http');
let url = require('url');

//2.0 创建服务器
http.createServer((req,res)=>{
    let myUrl = url.parse(req.url,true);//将query中的字符串转换成字面量对象
    console.log(myUrl);
    
    console.log(myUrl.query.name);
    console.log(myUrl.query.age);
    console.log(myUrl.query.sex);
    
    res.end('hello world!');
}).listen(80,'127.0.0.1');