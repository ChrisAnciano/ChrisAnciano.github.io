<?php
session_start(); // Start the session

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Perform form validation and email sending here
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'chris.anciano10@gmail.com';
    $subject = 'Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Redirect to thank-you page after successful submission
        header("Location: thank-you.php");
        exit();
    } else {
        echo 'Sorry, there was an error processing your request. Please try again later.';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Contact</title>
</head>
<body>
<section id="contact" class="contact">
    <h2>Contact Me</h2>
    <form class="contact-form" action="./thank-you.php" method="POST">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <div class="recaptcha-container">
            <div class="g-recaptcha" data-sitekey="6LcAgiIqAAAAALJOiTzbiRYidU1KZU0_DNqeYp95" required></div>
        </div>
        <button type="submit">Submit</button>
    </form>
</section>
</body>
</html>
