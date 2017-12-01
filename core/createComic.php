<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 24/11/2017
 * Time: 4:54 CH
 */

include "../connect.php";

$nameErr = $summaryErr =$bannerErr = $cardErr = 0;
//init data
$name = $_POST["name"] ;
$summary = $_POST['summary'];
$numOfChap = empty($_POST['numOfChap']) ?  0 : $_POST['numOfChap'];
$quantity = empty($_POST['quantity']) ? 0 : $_POST['quantity'];


$canQuery = 1;

if (strlen($name)<1) {
    $nameErr=1;
    $canQuery=0;
}
if (strlen($summary)<10){
    $summaryErr=1;
    $canQuery=0;
}
if(!file_exists($_FILES['card']['tmp_name'])){
    $cardErr=1;
    $canQuery=0;
    $canQuery=0;
}
else if ( $_FILES['card']['type']  != 'image/jpeg' && $_FILES['card']['type'] != 'image/png'){
    $cardErr=2;
    $canQuery = 0;
}
if(!file_exists($_FILES['banner']['tmp_name'])){
    $bannerErr=1;
    $canQuery=0;
}
else if ( $_FILES['banner']['type']  != 'image/jpeg' && $_FILES['banner']['type'] != 'image/png'){
    $cardErr=2;
    $canQuery = 0;
}

if ($canQuery == 1) {
    $targetBanner = "../assert/images/" . basename($_FILES['banner']['name']);
    $targetCard = "../assert/images/". basename(($_FILES['card']['name']));
    $card = $_FILES['card']['name'];
    $banner = $_FILES['banner']['name'];

    //$imgData = mysqli_real_escape_string($conn, file_get_contents($_FILES['photos']['tmp_name']));
    //$content = mysqli_real_escape_string($conn, $content);
    $sql = "INSERT INTO comic (Name, CardImage, BannerImage, NumOfChap, Quantity, Summary) VALUE ('$name', '$card','$banner', '$numOfChap', '$quantity', '$summary')";

    if ($conn->query($sql)) {
        $lastId = $conn->insert_id;

        if(move_uploaded_file($_FILES['card']['tmp_name'],$targetBanner)&&move_uploaded_file($_FILES['banner']['tmp_name'],$targetBanner)){
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
    header('Location: ../views/admin/createComic.php?nameErr='.$nameErr .'&summaryErr='.$summaryErr .'&cardErr='.$cardErr . '&bannerErr='.$bannerErr);
}