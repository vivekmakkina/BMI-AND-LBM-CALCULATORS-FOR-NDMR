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

$target_dir = "image/"; // Directory where you want to save the images
$image_path = "";

// Check if image is received
if (isset($_FILES['image'])) {
    $target_file = $target_dir . basename($_FILES['image']['name']);
    if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
        $image_path = $target_file; // Image path to store in the database
    } else {
        echo "Sorry, there was an error uploading your file.";
        exit;
    }
}

// Get the posted data
$username = $_POST['username'];
$gender = $_POST['gender'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare and bind statement
$stmt = $conn->prepare("INSERT INTO bmi (username, gender, phoneNumber, email, password, image) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $username, $gender, $phoneNumber, $email, $password, $image_path);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>
