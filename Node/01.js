console.log('hello world');
let a = 10,b = 20;
console.log(a*b);


//argv 是一个数组，默认情况下，前两项数据分别是：Node.js环境的路径；当前执行的js文件的全路径；  从第三个参数开始表示命令行输入的参数
console.log(process.argv);

//打印当前系统的结构(64位或者32位)
console.log(process.arch);

// console.log(process.config);

// process.env.NODE_ENV = 'production'
console.log(process.env);




