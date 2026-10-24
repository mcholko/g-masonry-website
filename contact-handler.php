<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot spam trap - if filled, silently pretend success
if (!empty($_POST['_gotcha'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$address = trim($_POST['project_address'] ?? '');
$service = trim($_POST['service'] ?? '');
$details = trim($_POST['details'] ?? '');

if ($name === '' || $phone === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

// TODO: set to the client's real inbox and domain before launch
$to = 'info@YOUR-DOMAIN.com';
$subject = 'New quote request from G Masonry website';

$body = "New quote request from the G Masonry website\n\n";
$body .= "Name: {$name}\n";
$body .= "Phone: {$phone}\n";
$body .= "Email: {$email}\n";
$body .= "Project Address: {$address}\n";
$body .= "Service: {$service}\n";
$body .= "Details:\n{$details}\n\n";
$body .= "Submitted: " . date('Y-m-d H:i:s T') . "\n";

$headers = "From: no-reply@YOUR-DOMAIN.com\r\n";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers .= "Reply-To: {$email}\r\n";
}
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Failed to send']);
}
