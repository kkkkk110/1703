<?php

	// 1、连接数据库
	// 配置参数
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'maile';

	//连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 检测连接
	if($conn->connect_errno){
		die('连接失败'.$conn->connect_error);
	}

	// 设置字符集
	$conn->set_charset('utf8');



	// SQL语句
	$sql = "select * from maile";

	// 获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);


	echo json_encode($rows,JSON_UNESCAPED_UNICODE);


	//关闭连接
	$conn->close();






	

?>