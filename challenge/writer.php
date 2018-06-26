<?php 
//Get tha data form the inpur form
$email = (isset($_POST['email'])) ? $_POST['email'] : 'no email';
$pass = (isset($_POST['pass'])) ? $_POST['pass'] : 'no pass';

/*$email = 'Ivan';
$pass = 'Zykov';*/

//Establish DB connection and do the query to add data to DB
define('DBHOST', 'localhost');
define('DBUSER', 'root');
define('DBPASS', '');
define('DBNAME', 'ajax_day1_challenge');

$mysqli = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

if ($mysqli->connect_error) {
	die('Connectin failed: ' . $mysqli->connect_errno . ': ' . $mysqli->connect_error);
} else {
	echo 'Connection live';
}

$sql = "INSERT INTO users (email, pass)
				VALUES('$email', '$pass')";

$result = $mysqli->real_query($sql);

if ($result) {
	echo 'Data from input fiels inserted into DB';
} else {
	echo 'Something went wrong';
	var_dump($result);
}

if(isset($result)) {
	unset($result);
}
$mysqli->close();
?>