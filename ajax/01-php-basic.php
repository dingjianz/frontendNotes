<?php
header("Content-type:text/html;charset=utf-8");
//定义变量
$num = 10;
echo $num;

echo '<br>';

//拼接是.  不是+
echo '你的名字是'.$num;
//定义数组
$arr = array(1,3,5,7);
//输出对象
print_r($arr);
echo '<br>';
//输出第一个元素
echo $arr[0];

//定义字典（对象）
$dict = array('name'=>'lnj','age'=>'33','sex'=>'male');
print_r($dict);
echo $dict['name'];
echo '<hr>';

//if/for/三目/switch/while
$age = 16;
if($age<18){
    echo '未成年';
}else{
    echo '成年人';
};
$res = ($age>18) ?'成年人': '未成年';
echo $res;


$age = 0;
switch ($age) {
    case 0:
     echo '0';
        break;
    case 18:
        echo '成年';
        break;
    default:
        echo '老年';
        break;
};

$arr1 = array(1,3,5,7);
for($i = 0;$i < count($arr1); $i++){
    echo $arr1[$i];
    echo '<br>';
};

$index= 0;
while($index<count($arr1)){
    echo $arr1[$index];
    echo '<br>';
    $index++;
}
?>