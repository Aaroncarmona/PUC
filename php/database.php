<?php             
    $db = "puc";
    $host = "localhost";
    $user = "root";
    $pass = "root";

try {
    $con = new PDO ("mysql:host=$host; dbname=$db;" ,$user ,$pass); 
} catch ( PDOException $e) {
    die('Connection failed: '.$e->getMessage());
}

?>