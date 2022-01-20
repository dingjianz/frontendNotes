let express = require('express');
let app = express();
let fs = require('fs');

//指定视图所在的位置
app.set('views', './view');
//注册模板引擎
app.set('view engine', 'ejs');

getData((dataJson) => {
    app.get('/', (req, res) => {
        res.render('list',dataJson);//list指的是：找到模板./view/list.ejs
    })
})

app.listen(3000);

function getData(callBack) {
    fs.readFile('./model/data.json', (err, data) => {
        if (!err) {
            let dataJson = JSON.parse(data);
            callBack(dataJson);
        } else {
            throw err;
        }
    })
}