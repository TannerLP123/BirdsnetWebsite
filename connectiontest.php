<?php
$servername = "127.0.0.1";
$username = "manager";
$password = "testpass";

$conn = new mysqli("127.0.0.1", "manager", "testpass");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
