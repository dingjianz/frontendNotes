// let buffer = new Buffer(10); 以前使用buffer方法

//buffer作为核心模块在Node.js不需要引入，但是其他核心模块需要引入
let str = 'www.it666.com';
let buffer = Buffer.from(str);
console.log(buffer); //<Buffer 77 77 77 2e 69 74 36 36 36 2e 63 6f 6d>
console.log(str.length);//13
console.log(buffer.length);//13
console.log(buffer.toString()); //www.it666.com


let res = '黄晓明';
let buf = Buffer.from(res);
console.log(buf); //<Buffer e9 bb 84 e6 99 93 e6 98 8e>
console.log(buf.toString()); //黄晓明
console.log(res.length);//3
console.log(buf.length);//9  中文字符在node里面占三个字节
console.log(buf.toJSON());









