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

                    echo "<input style='visibility: hidden' value='$thisId' name='blogId'><button type='submit' class='btn btn-primary pull-right' name='edit'>Edit</button><button type='submit' class='btn btn-danger pull-right' name='edit'  formaction='../../core/removeBlog.php'>Delete</button>";
                    echo '</div>';
                    echo '</form>';

                }
            }
        ?>

        <div class="col-md-12 gap10"></div>
    </div>
</div>

<!--<div class="container">-->
<!--    <div class="col-md-12">-->
<!--        <div class="media">-->
<!--            <div class="media-left media-middle">-->
<!--                <a href="#">-->
<!--                    <img class="media-object" src="../../assert/images/bshop.jpg" alt="...">-->
<!--                </a>-->
<!--            </div>-->
<!--            <div class="media-body">-->
<!--                <h4 class="media-heading">Middle aligned media</h4>-->
<!--                ...-->
<!--            </div>-->
<!--        </div>-->
<!--        --><?php
//            if($result->num_rows!=0){
//                while ($rows = $result->fetch_assoc()){
//
//                    echo "<form class='form-group' method='post' action='editBlog.php'>";
//                    echo "<h3>". $rows['Title'] . "</h3>";
//                    echo "<p>". $rows['Summary'] ."</p>";
//                    $thisId = $rows["BlogID"];
//                    echo "<input style='visibility: hidden' value='$thisId' name='blogId'><button type='submit' class='btn btn-primary pull-right'>Edit</button>";
//                    echo "</form>";
//                }
//            }
//        ?>
<!--    </div>-->
<!--</div>-->
<script>

</script>