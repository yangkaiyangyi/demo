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



// //接收前端-结算页传过来的参数（判定）
$id =isset($_GET['id'])?$_GET['id']:''; //参数id

// $idx =isset($_GET['idx'])?$_GET['idx']:'';



//在购物车删除对应的商品-用更新方法
$sqlDelete="update produces set goodsnum = 0 where id = '$id'";
$conn->query($sqlDelete);



// var_dump($sql);
//5.获取查询结果集合

$result2 = $conn->query("select * from produces where goodsnum >0");
// var_dump($result);
// var_dump($result2);
//6.从集合中获取数据
// $row = $result->fetch_all(MYSQLI_ASSOC);
// $row2 = $result2->fetch_all(MYSQLI_ASSOC);



$rows2 = [];
while($row2 = $result2->fetch_array(MYSQLI_ASSOC)){
  $rows2[] = $row2;
};

$res = array(
    'row2' => $rows2
);
// var_dump($row);
// var_dump($row);//测试
//7释放查询结果集合，避免浪费资源
// $result->close();

//9.关闭数据库，避免占用资源
// $conn->close();       

//8.把结果输出到前端
echo json_encode($res,JSON_UNESCAPED_UNICODE);   //-->输出到前端页面


?>







