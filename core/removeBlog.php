<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 29/11/2017
 * Time: 9:56 SA
 */
include "../connect.php";
$blogId = $_POST["blogId"];
echo $blogId;
$stmt = $conn->prepare( "DELETE FROM blog WHERE BlogID = ?");
$stmt->bind_param('s', $blogId);
$stmt->execute();
$result = $stmt->get_result();

header("location: ../views/admin/listBlog.php");