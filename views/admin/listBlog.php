<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 22/11/2017
 * Time: 8:21 CH
 */
include "../layout/adminHeader.php";
include  '../../connect.php';
$result = $conn->query("SELECT * FROM BLOG");
?>

<div class="container">
    <div class="col-md-12">
    <?php
        if($result->num_rows!=0){
            while ($rows = $result->fetch_assoc()){
                echo "<h1>". $rows['Title'] . "</h1>";
                //echo "<p>" . $rows['summary'] ."</p>";
            }
        }
    ?>
    </div>
</div>