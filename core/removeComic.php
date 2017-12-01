<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 29/11/2017
 * Time: 9:56 SA
 */
include "../connect.php";
$comicId = $_POST["comicId"];
echo $comicId;
$stmt = $conn->prepare( "DELETE FROM comic WHERE ComicID = ?");
$stmt->bind_param('s', $comicId);
$stmt->execute();
$result = $stmt->get_result();

header("location: ../views/admin/listComic.php");