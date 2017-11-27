<?php
/**
 * Created by PhpStorm.
 * User: bangvancong
 * Date: 27/11/17
 * Time: 11:45
 */

include "../connect.php";
session_start();
$username = "";
$password = "";
$username = $_POST['username'];
$password = $_POST['password'];
if ($result = $conn->query("SELECT * FROM user WHERE username = '$username' AND password = '$password'")) {
    $rows = $result->num_rows;
    if ($rows == 1)
    {
        $_SESSION['login_user'] = $username;
        header("location: login.php");
    }
    else {
        $error = "Tên đăng nhập hoặc mật khẩu không hợp lệ";
    }
}

if (isset($_SESSION['login_user']))
{
    header("location: ../views/layout/adminHeader.php");
}

