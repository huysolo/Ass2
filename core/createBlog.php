<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 24/11/2017
 * Time: 4:54 CH
 */

include "../connect.php";
//init data
$title = $_POST["title"];
$summary = $_POST['summary'];
$content = $_POST['content'];
$ontop = file_exists($_POST['ontop']) ? 0 : 1;

$imgData = mysqli_real_escape_string($conn, file_get_contents($_FILES['photos']['tmp_name']));

$sql = "INSERT INTO blog (Title, Content, Photos, OnTop, UserID) VALUE ('$title', '$content', '$imgData', '$ontop', '1')";

if($conn->query($sql)){
    header('../views/listBlog.php');
}
else{
    echo "Failed";
}
