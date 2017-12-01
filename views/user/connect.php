<?php
$username = "root";
$password = "";
$hostname = "localhost"; 
$dbname="ass2wp";

//connection to the database
$dbhandle = mysqli_connect($hostname, $username, $password,$dbname)

?>
<?php
//select a database to work with
$selected = mysqli_select_db($dbhandle,"ass2wp")
?>

