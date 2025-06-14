<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.html'); // redirect to login if not logged in
    exit();
}
?>

<h1>Welcome, <?php echo htmlspecialchars($_SESSION['user_name']); ?>!</h1>
<!-- Your protected content here -->