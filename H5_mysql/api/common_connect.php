<?php
//before在创建链接前，可申明赋值
$servernam = 'localhost';//服务器
$username = 'root';//默认根地址
$password = '';//密码默认为空
$dbname = 'html5_mysql';//同一数据库名


//1.创建与msql数据库链接
$conn = new mysqli($servernam,$username,$password,$dbname);

//2.检测链接是否成功
if($conn->connect_error){
    die("连接失败: " . $conn->connect_error);
};
//3.查询前设置编码，防止乱码
$conn->set_charset('utf8');


?>