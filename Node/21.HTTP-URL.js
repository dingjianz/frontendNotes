let http = require('http');
let url = require('url');

//2.0 创建服务器
http.createServer((req,res)=>{
    //Node.js特有的API，是旧版本的遗留,http里建议用这个
// let myUrl = url.parse(req.url);
// console.log(myUrl);
// console.log(myUrl.search);
// console.log(myUrl.href);

//实现了WHATWG URL Standard的 API ，该标准也在各种浏览器中被使用。
   let { URL } = require('url');
   let  myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
//    console.log(myURL);
 console.log(myURL.search);
 console.log(myURL.host);
 
   
    
    res.end('hello world!');
}).listen(80,'127.0.0.1');