<?php
/*
链接数据库，验证用户是否被占用，（用户是否存在数据库）

include 'connect.php';//require('connect.php');
*/

//1.链接公共common_connect.php
include 'common_connect.php';

//2.获取到前端传过来的信息
$username = isset($_GET['username'])? $_GET['username'] : null;

//3.编写sql语句查询
$sql = "select * from user where username='$username'";

//4.获取查询结果集合
$result = $conn->query($sql);

//5.判断是否存在
if($result->num_rows>0){
    echo "no";
}else {
    echo "yes";
}


?>