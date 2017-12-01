<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 01/12/2017
 * Time: 10:40 SA
 */


include "../connect.php";

$nameErr = $summaryErr =$bannerErr = $cardErr = 0;
//init data
$name = $_POST["name"] ;
$summary = $_POST['summary'];
$numOfChap = empty($_POST['numOfChap']) ?  0 : $_POST['numOfChap'];
$quantity = empty($_POST['quantity']) ? 0 : $_POST['quantity'];
$comicId = $_POST['comicId'];
$allowed =  array('gif','png' ,'jpg');

if(empty($comicId)){
    header('location: ../views/admin/listComic?noId=1');
}
$canQuery = 1;
if (strlen($name)<1) {
    $nameErr=1;
    $canQuery=0;
}
if (strlen($summary)<10){
    $summaryErr=1;
    $canQuery=0;
}
if ( file_exists($_FILES['card']['tmp_name']) &&$_FILES['card']['type']  != 'image/jpeg' && $_FILES['card']['type'] != 'image/png'){
    $cardErr=2;
    $canQuery = 0;
}
if ( file_exists($_FILES['banner']['tmp_name']) && $_FILES['banner']['type']  != 'image/jpeg' && $_FILES['banner']['type'] != 'image/png'){
    $bannerErr=2;
    $canQuery = 0;
}

if ($canQuery == 1) {
    $targetBanner = "../assert/images/" . basename($_FILES['banner']['name']);
    $targetCard = "../assert/images/". basename(($_FILES['card']['name']));
    $card = $_FILES['card']['name'];
    $banner = $_FILES['banner']['name'];


    $sqlBanner=$sqlCard ='';

    if(file_exists($_FILES['card']['tmp_name'])){
        $sqlBanner= ", BannerImage='$banner',";
    }
    if(file_exists($_FILES['card']['tmp_name'])){
        $sqlCard= "CardImage='$card',";
    }
    $sql="UPDATE comic SET Name='$name', Summary = '$summary'" . $sqlBanner . $sqlCard." WHERE ComicID=$comicId";
    echo $sql;
    if ($conn->query($sql)) {
        $last_id = $conn->insert_id;
        if(move_uploaded_file($_FILES['card']['tmp_name'],$targetCard)&&move_uploaded_file($_FILES['banner']['tmp_name'],$targetBanner)){
            echo 'Uploaded';
        }
        else{
            echo "There're somethings wrong when uploading your images! Please submit your post again";
        }
        header('Location: ../views/admin/listComic.php');
    } else {
        echo "There're somethings wrong! Please submit your post again";
    }
}
else{
    $url = "../views/admin/editComic.php?nameErr=$nameErr&summaryErr=$summaryErr&cardErr$cardErr&bannerErr=$bannerErr";
    echo '<script>function redirect() {document.getElementById("frm1").submit();}</script>';

    echo '<body onload="redirect()">';
    echo '<form action="'.$url.'" method="post" name="frm1" id="frm1">';
    echo '<input style="visibility: hidden" name="comicId" value="'. $comicId.'">';
    echo '</form>';
    echo '</body>';
}


