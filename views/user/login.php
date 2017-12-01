<?php include "../layout/header.php";?>
<body>

<div class="container">
  

<div class="container">
    <h2>Login Account</h2>
    <form action="#" method="post">
        
        <div class="form-group">
            <label>UserName:</label>
            <input type="text" class="form-control" placeholder="Enter name" name="username" >
        </div>
        
        <div class="form-group">
            <label>Password:</label>
            <input type="text" class="form-control" placeholder="Enter password" name="password" >
        </div>
        
        <button type="submit" class="btn btn-success" name="submit">Submit</button>
        <input type="reset" value="Reset" class="btn btn-warning">
    </form>
    <br>
    <a class="btn btn-primary" href="http://localhost/Lab9/index.php"><span class="glyphicon glyphicon-home"></span>Home</a>
</div>
<?php
    include 'connect.php';
       

        if(isset($_POST["submit"])){
            $username = $_POST["username"];
            $password = $_POST["password"];
            session_start();                        
            
            
            $query1 = "SELECT *  FROM user where Username = '$username' AND Password = '$password'";
            $result1 = mysqli_query($dbhandle,$query1);

            $row1 = mysqli_fetch_array($result1);
            if(!empty($row1['Username']) AND !empty($row1['Password']))
            {
                if($row1['Role'] == 'admin'){
                $_SESSION['userName'] = $row['Username'];
                $_SESSION['role'] = $row1['Role'];
                header("location: ../admin/listBlog.php");
                }
                elseif ($row1['Role'] == 'user') {
                $_SESSION['userName'] = $row['Username'];
                $_SESSION['role'] = $row1['Role'];
                header("location: comic.php");
                }
            }
           else
            {
                echo "SORRY... YOU ENTERD WRONG ID AND PASSWORD... PLEASE RETRY...";
            }
         
        }
?>

</div>

</body>
<?php include "../layout/footer.php";
