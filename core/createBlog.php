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
if(!file_exists($_FILES['photos']['tmp_name'])){
    $imgDataErr=1;
    $canQuery=0;
}
else if ( $_FILES['photos']['type']  != 'image/jpeg' && $_FILES['photos']['type'] != 'image/png'){
    $imgDataErr=2;
    $canQuery = 0;
}


if ($canQuery == 1) {
    $target = "../assert/images/" . basename($_FILES['photos']['name']);
    $photos = $_FILES['photos']['name'];

    //$imgData = mysqli_real_escape_string($conn, file_get_contents($_FILES['photos']['tmp_name']));
    //$content = mysqli_real_escape_string($conn, $content);
    $sql = "INSERT INTO blog (Title, Content, Photos, OnTop, Summary, UserID) VALUE ('$title', '$content','$photos', '$ontop', '$summary', '1')";

    if ($conn->query($sql)) {
        $lastId = $conn->insert_id;

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
    header('Location: ../views/admin/createBlog.php?titleErr='.$titleErr .'&summaryErr='.$summaryErr .'&contentErr='.$contentErr . '&imgDataErr='.$imgDataErr);
}