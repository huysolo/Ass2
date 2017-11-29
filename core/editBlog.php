<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 24/11/2017
 * Time: 4:54 CH
 */

include "../connect.php";

$titleErr = $summaryErr =$contentErr = $imgDataErr = 0;
//init data
$title = $_POST["title"] ;
$summary = $_POST['summary'];
$content = $_POST['content'];
$ontop = empty($_POST['ontop']) ? 0 : 1;
$blogId = $_POST['blogId'];
$allowed =  array('gif','png' ,'jpg');

if(empty($blogId)){
    header('location: ../views/admin/listBlog?noId=1');
}
$canQuery = 1;

if (strlen($title)<10) {
    echo strlen($title);
    $titleErr=1;
    $canQuery=0;
}
if (strlen($summary)<10){
    $summaryErr=1;
    $canQuery=0;
}
if (strlen($content)<100) {
    $contentErr=1;
    $canQuery=0;
}

if ( file_exists($_FILES['photos']['tmp_ name']) && $_FILES['photos']['type']  != 'image/jpeg' && $_FILES['photos']['type'] != 'image/png'){
    $imgDataErr=2;
    $canQuery = 0;
}
echo $_FILES['photos']['tmp_name'];


if ($canQuery == 1) {
    $target = "../assert/images/" . basename($_FILES['photos']['name']);
    $photos = $_FILES['photos']['name'];
    $content = mysqli_real_escape_string($conn, $content);
    if(file_exists($_FILES['photos']['tmp_name'])){
        $sql="UPDATE blog SET Title='$title', Summary = '$summary', Content = '$content', OnTop = '$ontop', Photos ='$photos' WHERE BlogID=$blogId";
    }
    else{
        $sql= "UPDATE blog SET Title='$title', Summary = '$summary', Content = '$content', OnTop = '$ontop' WHERE BlogID=$blogId";
    }
    if ($conn->query($sql)) {
        if(move_uploaded_file($_FILES['photos']['tmp_name'],$target)){
            echo 'Uploaded';
        }
        else{
            echo "There're somethings wrong when uploading your images! Please submit your post again";
        }
        header('Location: ../views/admin/listBlog.php');
    } else {
        echo "There're somethings wrong! Please submit your post again";
    }
}
else{
    $url = "../views/admin/editBlog.php?titleErr=$titleErr&summaryErr=$summaryErr&contentErr$contentErr&imgDataErr=$imgDataErr";
    echo '<script>function redirect() {document.getElementById("frm1").submit();}</script>';

    //echo '<body onload="redirect()">';
    echo '<form action="'.$url.'" method="post" name="frm1" id="frm1">';
    echo '<input style="visibility: hidden" name="blogId" value="'. $blogId.'">';
    echo '</form>';
}


