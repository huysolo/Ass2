<?php
/**
 * Created by PhpStorm.
 * User: bangvancong
 * Date: 27/11/17
 * Time: 12:47
 */
session_start();
if(session_destroy()) // Destroying All Sessions
{
    header("Location: ../views/login.php"); // Redirecting To Home Page
}
?>