let http = require('http');
let url = require('url');
const querystring = require('querystring');

//2.0 创建服务器
http.createServer((req, res) => {
    if (req.url === '/postmsg' && req.method.toLowerCase() === 'post') {
        //2.1 设置变量
        let allData = '';
        //2.2 接受小段数据
        req.on('data', (buf) => {
            allData += buf;
        });
        //2.3 监听所有数据接收完毕
        req.once('end', () => {
            res.end('eerything is ok!');
            let allDataObj = querystring.parse(allData);
            console.log(allDataObj);
            
        })

    }


}).listen(80, '127.0.0.1');