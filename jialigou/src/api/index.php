<?php
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'xiaolu';

	$conn = new mysqli($servername,$username,$password,$database);

	

	$conn->set_charset('utf8');


	$sql = "select * from sup";

	$res = $conn->query($sql);

	$rows = $res->fetch_all(MYSQLI_ASSOC);


	echo json_encode($rows,JSON_UNESCAPED_UNICODE);


	//关闭连接
	$conn->close();


?>