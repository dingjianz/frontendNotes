<?php


print_r($_FILES);
echo '<br>';
// 1.获取上传文件对应的字典
$fileInfo = $_FILES["djFile"];
print_r($fileInfo);//Array ( [name] => lnj.jpg [type] => image/jpeg [tmp_name] => D:\wamp\tmp\php9BD5.tmp [error] => 0 [size] => 438201 ) 
echo '<br>';
// 2.获取上传文件的名称
echo $fileInfo['name'];//lnj.jpg
echo '<br>';
// 3.获取上传文件的类型
echo $fileInfo['type'];//image/jpeg
echo '<br>';
// 3.获取上传文件的临时路径
echo $fileInfo['tmp_name'];//D:\wamp\tmp\phpC850.tmp
echo '<br>';
// 4.移动文件  下载到本地
move_uploaded_file($fileInfo['tmp_name'],'../source/'.$fileInfo['name']);

?>