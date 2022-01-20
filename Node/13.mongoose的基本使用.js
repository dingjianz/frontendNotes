// 1.0 连接数据库
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m_data');
mongoose.connection.once('open',()=>{
    console.log('数据库连接成功');
});

//2.0 创建Schema(模式对象)：Schema对象定义约束了数据库中的文档结构
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name:String,
    age:Number,
    sex:{
        type:String,
        default:'男'
    },
    iPhone:Number
});

//3.0 创建Model对象：Model对象作为集合中所有文档的表示，相当于MongoDB数据库中的集合collection
let personModel = mongoose.model('person',personSchema);

//4.0 插入文档
personModel.create({
    name: '谢霆锋',
    age: 45,
    iPhone: 110
},(err) =>{
    if (!err) {
        console.log('文档插入成功');
    }else{
        throw err;
    }
});
personModel.create({
    name: '王菲',
    age: 50,
    sex:'女',
    iPhone: 666666
}, (err) => {
    if (!err) {
        console.log('文档插入成功');
    } else {
        throw err;
    }
});

