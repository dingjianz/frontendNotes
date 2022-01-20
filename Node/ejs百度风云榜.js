let http = require('http');
let fs = require('fs');
let ejs = require('ejs');

http.createServer((req,res)=>{
getDataJson((dataJson)=>{
    //读取ejs模板
    fs.readFile('./view/list.ejs',(err,data)=>{
        if(err){
            throw err;
            return;
        }else{
            //模板  data是二进制数据，需要转换成字符串
            let dataStr = data.toString();
            //  实例化模板 将数据注入到模板页面中
            let tmp = ejs.render(dataStr,dataJson);
            
            //返回页面
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            res.end(tmp);
        }
    })
})

}).listen(80,'127.0.0.1');

function getDataJson (callBack){
    fs.readFile('./model/data.json',(err,data)=>{
        if(!err){
          let dataJson = JSON.parse(data);
          callBack(dataJson);
        }else{
            throw err;
        }
    });
};