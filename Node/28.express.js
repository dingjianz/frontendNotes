let express = require('express');
let app = express();

//配置路由
app.get('/', (req, res) => {
    /*
     res.write('hello');
     res.write('\n');
     res.write("{'name':'dj','age':18}");
     res.end();//如果end不写，服务器一直被挂起
     */

    // res.send('world'); 只能 res.send(); 一个
    // res.send({name:'dj',age:18});
    // res.send('<input type="date">');
    res.status(250).send('hello world');

});

//监听
app.listen(3000, '127.0.0.1');