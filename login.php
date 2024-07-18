<?php
// Assuming your MySQL server credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "swami"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Prepare and bind statement
$stmt = $conn->prepare("SELECT * FROM bmi WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $data->username, $data->password);

// Execute the statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if there is a row with matching username and password
if ($result->num_rows > 0) {
    echo "success";
} else {
    echo "failure";
}

// Close the connection
$stmt->close();
$conn->close();
?>