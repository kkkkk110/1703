<?php
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'xiaolu';

	$conn = new mysqli($servername,$username,$password,$database);

	

	$conn->set_charset('utf8');




	$name = isset($_GET['name'])?$_GET['name']:'';
	$password = isset($_GET['password'])?$_GET['password']:'';

	// $password = md5($password);
	//查询数据库中是否存在该注册的用户的用户名，没有就插入，有就返回一个no;
	
	//查用户名
	$sqls = "select name from user where name='$name'";
	//查询
	$res = $conn-> query($sqls);
	$rows=$res->fetch_all(MYSQLI_ASSOC);
	//若无返回也可以判断该用户名不存在
	
	if($rows){
		//若改数据已存在
		echo 'no';
	}else{
		//若该用户名未被注册
		$sql = "insert into user(name,password) values('$name','$password')";
		$reg = $conn -> query($sql);
		if($reg){
			echo 'ok';
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	
$conn->close();

?>