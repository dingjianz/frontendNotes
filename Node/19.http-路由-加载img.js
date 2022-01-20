//1.0 引入核心模块
let http = require('http');
let fs = require('fs');

//2.0 创建服务器
let server = http.createServer((req, res) => {
    if (req.url === '/test1') { //路由'/test1'自己可以随便命名
        fs.readFile('./17.test1.html', (err, data) => {
            if (!err) {
                res.writeHead(200, {
                    'Content-Type': 'text/html;charset=UTF-8'
                });
                res.end(data);
            }
        });
    } else if (req.url === '/') { //根目录
           res.writeHead(200, {
               "Content-Type": "text/html;charset=UTF-8"
           });
           res.end("这是根目录");
    } else if (req.url === '/css/index.css') { //这个路由地址不能随便写了
        fs.readFile('./css/index.css', (err, data) => {
            if (!err) {
                res.writeHead(200, {
                    'Content-Type': 'text/css'
                });
                res.end(data);
            }
        });
    } else if (req.url === '/image/lcf.jpg') { //这个路由地址不能随便写了
        fs.readFile('./image/lcf.jpg', (err, data) => {
            if (!err) {
                res.writeHead(200, {
                    'Content-Type':'image/jpg'
                });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html;charset=UTF-8'
        });
        res.end('访问的页面不存在');
    }
});

//2.0 监听
server.listen(80, "127.0.0.1");