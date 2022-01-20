<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $type = $_GET['type'];
    $urlget='http://v.juhe.cn/toutiao/index?type='.$type.'&key=27aa24f5fed6d0e032f8af752e67053b';
    $htmlget = file_get_contents($urlget);
    echo $htmlget;
};

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $type = file_get_contents("php://input");
    $key = '27aa24f5fed6d0e032f8af752e67053b';
    $urlpost='http://v.juhe.cn/toutiao/index?type='.$type.'&key='.$key;
    $htmlpost = file_get_contents($urlpost);
    echo $htmlpost;
}
?>