// 1.0 连接数据库
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m_data');
mongoose.connection.once('open', () => {
    console.log('数据库连接成功');
});

//2.0 创建Schema(模式对象)：Schema对象定义约束了数据库中的文档结构
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: '男'
    },
    iPhone: Number,
    weibo:String
});

//3.0 创建Model对象：Model对象作为集合中所有文档的表示，相当于MongoDB数据库中的集合collection
let personModel = mongoose.model('person', personSchema);

//4.0 创建新文本，直接通过原型对象上的函数存到集合里面
let newPerson = new personModel({
     name: '宋小宝',
         age: 40,
         iPhone: 666,
         weibo:'宋小宝纯行货'
});
newPerson.save((err,produnct) =>{
    if (!err) {
        console.log('数据存储成功');
    }else{
        throw err;
    }
});