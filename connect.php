<?php


class Connect{
    public $conn;
    function __construct()
    {
        $sever = "localhost";
        $username = $_SESSION("username");
        $password = $_SESSION("password");

// Create connection
        $conn = new mysqli("localhost", $username, $password, "ass2wp");

// Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";
    }
}

