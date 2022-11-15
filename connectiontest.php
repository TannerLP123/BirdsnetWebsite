<?php
$servername = "127.0.0.1";
$username = "root";
$password = "Dovahwho0215!";

$conn = new mysqli("127.0.0.1", "root", "Dovahwho0215!");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
