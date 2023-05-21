<?php 

    $servername = "10.1.3.40";
    $username = "65102010127";
    $password = "65102010127";
    $dbname = "65102010127";

    
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    
    if (!$conn) {
        die("Connection failed" . mysqli_connect_error());
    } 

?>