<?php
/*
链接数据库，验证用户是否被占用，（用户是否存在数据库）

include 'connect.php';//require('connect.php');
*/

//1.链接公共common_connect.php
include 'common_connect.php';

//2.接收前端发过来的内容
$username = isset($_GET['username']) ? $_GET['username'] : null;
$password = isset($_GET['password']) ? $_GET['password'] : null;

//验证，允许注册
if($username && $password){
    //3再次验证用户名再在数据库中是否存有-多加一道防护措施
    $sql = "select * from user where username='$username'";
    //4.获取查询结果集合
    $result = $conn->query($sql);
    //5.判断是否存在
    if($result->num_rows>0){
        echo "fail";
    }else {
        //6对密码进行加密
        $password = md5($password);//加密

        //7.写入到数据库
        $sql = "insert into user(username,password) values('$username','$password')";

        //8.获取查询结果集合
        $result = $conn->query($sql);

        //9.验证是否成功
        if($result){
            echo "success";
        }else{
            echo "fail";
        }
    }

 }else{
        echo "无法获取用户名或密码";
   }



?>