<?php
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'xiaolu';

	$conn = new mysqli($servername,$username,$password,$database);

	$conn->set_charset('utf8');
?>