<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 01/12/2017
 * Time: 12:22 CH
 */
include "../layout/header.php";
include "../../connect.php";
$sql = "SELECT * FROM ordertbl";

$result = $conn->query($sql);
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
                echo '<form method="post" action="editComic.php">';
                echo '<div class="col-md-12 blogShort">';

                echo '<h3>'. $rows["Name"] .'</h3>';
                echo '<article><p>'. $rows["Summary"] . '</p></article>';
                $thisId = $rows["ComicID"];
                echo "<input style='visibility: hidden' value='$thisId' name='comicId'><button type='submit' class='btn btn-blog pull-right marginBottom10 btn-blog2' name='edit'>Edit</button><button type='submit' class='btn btn-blog pull-right marginBottom10 btn-blog3' name='edit'  formaction='../../core/removeComic.php'>Delete</button>";
                echo '</div>';
                echo '</form>';

            }
        }
        ?>

<div class="col-md-12 gap10"></div>
</div>
</div>