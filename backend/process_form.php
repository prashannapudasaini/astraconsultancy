<?php
// backend/process_form.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true) ?: $_POST;

if (empty($data)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "No data provided."]);
    exit();
}

// Basic Sanitization to prevent XSS / Injection
function sanitize_input($data) {
    if (is_array($data)) {
        return array_map('sanitize_input', $data);
    }
    return htmlspecialchars(strip_tags(trim($data)));
}

$sanitized_data = sanitize_input($data);

// Define default values
$name = $sanitized_data['name'] ?? $sanitized_data['fullName'] ?? 'Unknown';
$email = $sanitized_data['email'] ?? '';
$phone = $sanitized_data['phone'] ?? $sanitized_data['mobile'] ?? 'No phone provided';

// -----------------------------------------------------------------------------
// SECURE SMTP CONFIGURATION
// Credentials are now securely loaded from config.php (ignored by Git)
// -----------------------------------------------------------------------------
$config = require 'config.php';

$smtp_user = $config['smtp_user'];
$smtp_pass = $config['smtp_pass']; 
$smtp_host = $config['smtp_host'];
$smtp_port = $config['smtp_port'];
// -----------------------------------------------------------------------------

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_user;
    $mail->Password   = $smtp_pass; 
    $mail->SMTPSecure = ($smtp_port == 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtp_port;

    // Sender and Recipient
    $mail->setFrom($smtp_user, 'Astra Global Website Form');
    $mail->addAddress($smtp_user, 'Astra Global Admin'); // Send to yourself
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, $name);
    }

    // Email content
    $mail->isHTML(false); // Plain text is safer against email injection/HTML hacking
    $mail->Subject = 'New Enquiry from Website: ' . $name;
    
    // Construct body safely
    $body = "You have received a new message from the website form.\n";
    $body .= "--------------------------------------------------------\n\n";
    
    foreach ($sanitized_data as $key => $value) {
        if (is_array($value)) {
            $value = implode(", ", $value);
        }
        $clean_key = ucfirst(preg_replace('/(?<!^)[A-Z]/', ' $0', $key)); // camelCase to separate words
        $body .= "{$clean_key}: {$value}\n";
    }
    
    $mail->Body = $body;

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Message has been sent successfully."]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
