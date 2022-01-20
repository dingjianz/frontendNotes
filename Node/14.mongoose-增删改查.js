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
    iPhone: Number
});

//3.0 创建Model对象：Model对象作为集合中所有文档的表示，相当于MongoDB数据库中的集合collection
let personModel = mongoose.model('person', personSchema);

//4.0 插入文档（增）
/*
personModel.create([
{name:'刘德华',age:58,iPhone:119},
{name:'周杰伦',age:40,iPhone:4934341},
{name:'王力宏',age:38,iPhone:1845655},
{name:'那英',age:53,iPhone:156421,sex:'女'}
], (err) => {
    if (!err) {
        console.log('文档插入成功');
    } else {
        throw err;
    }
});
*/
//5.0 查找数据

// personModel.find({},(err,docs)=>{
//     if (!err) {
//         console.log(docs);
//     }else{
//         throw err;
//     }
// });

// personModel.find({name:'周杰伦'}, (err, docs) => {
//     if (!err) {
//         console.log(docs);
//     } else {
//         throw err;
//     }
// });

// personModel.find({},{sex:1,name:1,_id:0},(err, docs) => {
//     if (!err) {
//         console.log(docs);
//     } else {
//         throw err;
//     }
// });

// personModel.find({},{sex:1,name:1,_id:0},{skip:2,limit:2},(err, docs) => {
//     if (!err) {
//         console.log(docs);
//     } else {
//         throw err;
//     }
// });


//6.0 修改数据
/*
personModel.update({name:'周杰伦'},{$set:{age:18}},{multi:true},(err)=>{
        if (!err) {
            console.log('数据修改成功');
            
           } else {
                  throw err;
        }
});
*/


//7.0 删除数据
/**
 * Model.deleteOne()
 * Model.deleteMany()
 * Model.remove()
 */
personModel.remove({name:'刘德华'},(err)=>{
    if (!err) {
        console.log('数据删除成功');

    } else {
        throw err;
    }
});

//8.0 统计文档的个数
personModel.count({name:'周杰伦'},(err,count)=>{
    if (!err) {
        console.log(count);
    }else{
        throw err;
    }
});