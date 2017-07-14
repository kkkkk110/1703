<?php
	// 引进php文件
	include 'connet.php';

	$name = isset($_GET['name'])?$_GET['name']:'';
	$password = isset($_GET['password'])?$_GET['password']:'1';

	//编写sql字符串
	$sql = "select name,password from user where name='$name'&&password='$password'";

	//执行sql语句
	$result = $conn->query($sql);
	$row = $result->fetch_all(MYSQLI_ASSOC);


	if ($row) {
		echo 'yes';
	}else{
		echo 'no';
	}
	$conn->close();
?>