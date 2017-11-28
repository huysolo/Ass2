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
$allowed =  array('gif','png' ,'jpg');

$canQuery = 1;

if (strlen($title)<10) {
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
if(!file_exists($_FILES['photos']['tmp_name'])){
    $imgDataErr=1;
    $canQuery=0;
}
else if ($_FILES['photos']['type']  != 'image/jpeg' && $_FILES['photos']['type'] != 'image/png'){
    setcookie('imgDataErr', 'Wrong image type', time()+ 12);
    $imgDataErr=2;
    $canQuery = 0;
}

if ($canQuery == 1) {

    $imgData = mysqli_real_escape_string($conn, file_get_contents($_FILES['photos']['tmp_name']));
    $sql = "INSERT INTO blog (Title, Content, Photos, OnTop, UserID) VALUE ('$title', '$content', '$imgData', '$ontop', '1')";
    if ($conn->query($sql)) {
        header('Location: ../views/admin/listBlog.php');
    } else {
        echo "There're somethings wrong! Please submit your post again";
        header('Location: ' . $_SERVER['HTTP_REFERER']);
    }
}
else{
    header('Location: ../views/admin/createBlog.php?titleErr='.$titleErr .'&summaryErr='.$summaryErr .'&contentErr='.$contentErr . '&imgDataErr='.$imgDataErr);
}