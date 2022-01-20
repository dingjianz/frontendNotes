let express = require('express');
let app = express();

//指定视图所在的位置
app.set('views','./views');
//注册模板引擎
app.set('view engine','ejs');

app.get('/',(req,res)=>{

    //将数据注入到模板中 
    res.render('index',{"lists":['丁健',"男",23]});//index指的是：找到模板./views/index.ejs    
});

app.listen(3000);