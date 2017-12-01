<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  
 <?php 
	include "connect.php";
?>
<div class="container">
    <h2>Add Account</h2>
    <form action="#" method="post">
        
        <div class="form-group">
            <label>Comment:</label>
            <textarea type="text" class="form-control" id="Cmt" style="width: 600px; height: 120px" name="Comment" >Enter Comment</textarea>
        </div>

        <button type="submit" class="btn btn-success"  name="add" onclick="getwords()">Submit</button><br>
        <p id="para"></p>
        
    </form>
    <br>
</div>
    
<?php

	if(isset($_POST["add"])){       
	$Comment = $_POST["Comment"];       
        $queryEdit="INSERT INTO `comment` (`CmtID`, `Content`, `DateCmt`, `UserID`, `BlogID`) VALUES (NULL, '$Comment', CURRENT_TIMESTAMP, '1', '10');";
        mysqli_query($dbhandle,$queryEdit);	
	}
?>

</div>

    
    <script type="text/javascript">
        function getwords() {
          text = Cmt.value;
          document.getElementById("para").innerHTML += '<p>'+text;
          document.getElementById("Cmt").value = "enter";
        }
    </script>
</body>
</html>





