let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');

http.createServer((req, res) => {
    let pathUrl = url.parse(req.url)
    let pathName = pathUrl.pathname;
    //判断访问的是文件还是文件夹
    if (pathName.lastIndexOf('.') === -1) {
        //如果访问的是文件夹，自动加载index.html文件
        pathName += '/index.html';
    }
    let extName = path.extname(pathName);

    //设置fs读取文件路径
    let fsPath = './' + path.normalize('./static' + pathName);

    //读取文件
    fs.readFile(fsPath, (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"});
            res.end("<h1>404, 当前的页面不存在!</h1>");
        } else{
            getContentType(extName, (contentType) => {
                     res.writeHead(200, {"Content-Type":contentType+";charset=UTF-8"});
                     res.end(data);
             })
        }
    })


}).listen(80, '127.0.0.1');

function getContentType(extName, callBack) {
    // 1. 读取文件
    fs.readFile("./mime.json", (err, data) => {
        if (err) {
            throw err;
            return;
        }
        let mimeJson = JSON.parse(data);
        let contentType = mimeJson[extName] || "text/plain";
        callBack(contentType);
    })
}
