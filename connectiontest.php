<!DOCTYPE html>
<html>
  <body>
<?php
$servername = "127.0.0.1:3306";
$username = "manager";
$password = "testpass";

$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
</body>
</html>