let http = require('http');
let url = require('url');
let formidable = require('formidable');
let util = require('util');
let uuidv1 = require('uuid/v1');
let path = require('path');
let fs = require('fs');


//2.0 创建服务器  23.post表单提交
http.createServer((req, res) => {
    if (req.url === "/postmsg" && req.method.toLowerCase() === "post") {
        // 1.实例化对象
        let form = new formidable.IncomingForm();

        // 2. 设置上传的文件路径
        form.uploadDir = "./uploads";

        // 3. 获取表单的内容
        form.parse(req, (err, fields, files) => {
            //3.1 生成随机名称
            let name = uuidv1();
            //3.2 获取后缀名 类似于.jpg
            let extName = path.extname(files.photo.name);

            /*  console.log(__dirname); //D:\前端开发\Node
            console.log(__filename); // D:\前端开发\Node\25.http-uuid.js
            */

            //3.3 设置新路径
            let oldPath = __dirname + '/' + files.photo.path;
            let newPath = __dirname + '/uploads/' + name + extName;
            //3.4 重新写名
            fs.rename(oldPath, newPath, (err) => {
                if (!err) {
                    res.writeHead(200, {
                        'content-type': 'text/html;charset=UTF-8'
                    });
                    res.write('写入成功');
                    res.end(util.inspect({
                        fields: fields,
                        files: files
                    }));
                }else{
                    throw err;
                }
            });
        });
    }
}).listen(80, '127.0.0.1');