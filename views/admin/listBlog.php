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
<link type="text/css" href="../../assert/css/blog.css" rel="stylesheet">
<div class="page-header">
    <h1>List of news: </h1>
</div>
<div class="container">
    <div id="blog" class="row">
        <?php
            if($result->num_rows!=0){
                while ($rows = $result->fetch_assoc()){
                    echo '<form method="post" action="editBlog.php">';
                    echo '<div class="col-md-12 blogShort">';

                    echo '<h3>'. $rows["Title"] .'</h3>';
                    echo '<article><p>'. $rows["Summary"] . '</p></article>';
                    $thisId = $rows["BlogID"];

                    echo "<input style='visibility: hidden' value='$thisId' name='blogId'><button type='submit' class='btn btn-blog pull-right marginBottom10 btn-blog2' name='edit'>Edit</button><button type='submit' class='btn btn-blog pull-right marginBottom10 btn-blog3' name='remove'  formaction='../../core/removeBlog.php'>Delete</button>";
                    echo '</div>';
                    echo '</form>';

                }
            }
        ?>

        <div class="col-md-12 gap10"></div>
    </div>
</div>
