let express = require('express');

let app = express();
//app.use(option,express.static('路径名'));  静态资源库
app.use('/static',express.static('./static'));
app.use('/file',express.static('./public'));



app.listen(4000,'127.0.0.1');