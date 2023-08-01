<?php

$servername = "45.32.31.135";
$dbUsername = "CreamU";
$dbPassword = "creamu133";
$dbName = "doritosl_loginSystem";

$connection = mysqli_connect($servername, $dbUsername, $dbPassword, $dbName);

if (!$connection) {

    // echo "連結數據庫成功!";
    die("連結數據庫失敗: " . mysqli_connect_error());

}

?>