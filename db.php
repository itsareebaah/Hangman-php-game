<?php
$host = "localhost";
$user = "root"; // change if needed
$pass = ""; // change if needed
$dbname = "hangman_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}
?>
