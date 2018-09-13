<?php
/*
1.链接数据库

2.数据操作
  *读取数据库

*/

//before在创建链接前，可申明赋值
$servernam = 'localhost';//服务器
$username = 'root';//默认根地址
$password = '';//密码默认为空
$dbname = 'html5_mysql';//数据库名


//1.创建与msql数据库链接
$conn = new mysqli($servernam,$username,$password,$dbname);

//2.检测链接是否成功
if($conn->connect_error){
    die("连接失败: " . $conn->connect_error);
};
//3.查询前设置编码，防止乱码
$conn->set_charset('utf8');



 

    //4.编写sql语句查询
$sql = 'select * from produces';

// var_dump($sql);
//前端发送-升序/降序请求
$desc = isset($_GET['desc']) ? true : false;

//<1>前端发送-price-排序请求-->服务器接收请求参数
$sort = isset($_GET['sort']) ? $_GET['sort'] : null;

//<2>//判断排序
if($sort){
    $sql .= " order by $sort*1";//字符串拼接注意空格

    // 降序
    if($desc){
        $sql .= " desc"; //字符串拼接注意空格
    }
}

//  var_dump($sql);
//1>前端发送-人气-排序请求-->服务器接收请求参数
$sort_hot = isset($_GET['sort_hot']) ? $_GET['sort_hot'] : null;
//2>//判断排序
if($sort_hot){
    $sql .= " order by $sort_hot*1";//字符串拼接注意空格

    // 降序
    if($desc){
        $sql .= " desc"; //字符串拼接注意空格
    }
}

//1>前端发送-好评-排序请求-->服务器接收请求参数
$sort_reput = isset($_GET['sort_reput']) ? $_GET['sort_reput'] : null;
//2>//判断排序
if($sort_reput){
    $sql .= " order by $sort_reput*1";//字符串拼接注意空格

    // 降序
    if($desc){
        $sql .= " desc"; //字符串拼接注意空格
    }
    // var_dump($sql);
}


//5.获取查询结果集合
$result = $conn->query($sql);

// var_dump($result);
//6.从集合中获取数据
$row = $result->fetch_all(MYSQLI_ASSOC);

// var_dump($row);//测试
//7释放查询结果集合，避免浪费资源
$result->close();

//9.关闭数据库，避免占用资源
$conn->close();       

//8.把结果输出到前端
echo json_encode($row,JSON_UNESCAPED_UNICODE);   //-->输出到前端页面


?>