<?php

// Define the base URL for images (replace with your actual path)
$baseUrl = 'http://192.168.19.209/bmi/';

// Database credentials
$servername = "localhost"; // Replace with your MySQL server address
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "swami"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Specify the username to fetch
$fetchUsername = isset($_GET['username']) ? $_GET['username'] : '';

// SQL query with a WHERE clause to fetch details for a specific username
$sql = "SELECT `image`, `username`, `gender`, `phoneNumber`, `email`, `password` FROM `bmi` WHERE `username` = '" . $conn->real_escape_string($fetchUsername) . "'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Fetch data as associative array
  $rows = array();
  while ($row = $result->fetch_assoc()) {
    // Append the base URL to the image field to form the full URL
    $row['image'] = $baseUrl . $row['image'];
    $rows[] = $row;
  }
  
  // Return data as JSON
  header('Content-Type: application/json');
  echo json_encode($rows);
} else {
  echo json_encode(array('message' => 'No records found for username: ' . $fetchUsername));
}

$conn->close();
?>
