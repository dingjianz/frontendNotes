//1.0 连接数据库
  var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m_data');

//2.0 监听各种状态
let db = mongoose.connection;
db.on('err',() =>{
    console.log('连接失败');
});
db.once('open',() =>{
    console.log('连接成功');
});
db.once('close',() =>{
    console.log('数据库断开成功');
});
