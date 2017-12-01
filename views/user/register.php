<?php include "../layOut";?>
<div class="container">
  
 <?php 
	include "connect.php";
?>
<div class="container">
    <h2>Add Account</h2>
    <form action="#" method="post">
        
        <div class="form-group">
            <label>UserName:</label>
            <input type="text" class="form-control" placeholder="Enter name" name="username" >
        </div>
        <div class="form-group">
            <label>FullName:</label>
            <input type="text" class="form-control" placeholder="Enter fullname" name="fullname" >
        </div>
        <div class="form-group">
            <label>Password:</label>
            <input type="text" class="form-control" placeholder="Enter password" name="password" >
        </div>
        <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" placeholder="Enter email" name="email" >
        </div>
        <button type="submit" class="btn btn-success" name="add">Submit</button>
        <input type="reset" value="Reset" class="btn btn-warning">
    </form>
    <br>
    <a class="btn btn-primary" href="http://localhost/Lab9/index.php"><span class="glyphicon glyphicon-home"></span>Home</a>
</div>
<?php
	if(isset($_POST["add"])){       
	$username = $_POST["username"];
        $password = $_POST["password"];
        $fullname = $_POST["fullname"];
        $email = $_POST["email"];
        $queryEdit="INSERT INTO user(Username,FullName, Password, Email) VALUES ('$username','$fullname','$password','$email')";
        mysqli_query($dbhandle,$queryEdit);	
	//header("location:http://localhost/Lab9/index.php");
	}
?>

</div>

</body>
</html>

