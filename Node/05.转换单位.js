/*
00 - ff Buffer里面数据以2进制存储，以16进制显示
0 - 255 10进制  
00000000 - 11111111 二进制
计算机以二进制存储单位 0 或1 是 1 位 1bit
    8 bit = 1 B
    1KB = 1024 B
    1MB = 1024 KB
    1 GB = 1024 MB
    1 TB = 1024 GB

*/
let buf =Buffer.alloc(8);//必须写上长度
buf[0]=10;
buf[1]= 11;
buf[2] = 0xfc;
buf[3] = 8;
buf[7] = 10;
buf[8] = 10;//超出规定长度，无效
console.log(buf);
buf.forEach((value,index) => {
    console.log(index+':'+value);//10进制打印
    
});
