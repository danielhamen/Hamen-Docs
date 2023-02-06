<?php

$issue_type = $_GET["issue-type"];
$email = $_GET["email"];
$body = $_GET["body"];
$url = $_GET["url"];
$ip = $_SERVER['REMOTE_ADDR'];
$datetime = date('Y/m/d H:i:s');
$id = str_pad(rand(0, pow(10, 12) - 1), 12, '0', STR_PAD_LEFT);

if ($email != "") {
    $headers = "From: support@hamen.tech" . "\r\n" . "CC: " . $email;

    $client_message = "Thank you for submitting an issue report to Hamen Docs. We appreciate your feedback and will do our best to address your inquiry in a timely manner.\n\nPlease be advised that it may take 5-12 business days for us to respond to your report. If your inquiry requires further action on our part, you will hear from us within this timeframe.\n\nFor referencing this report, you can use the Report ID below:\n" . $id . "\n\nIf you did not submit this issue report, kindly ignore this email.\n\nBest regards,\nHamen Docs Support Team";

    mail($email, "Issue Report Submission - Hamen Docs Support", $client_message, $headers);
}

mail("report@hamen.tech", "Hamen Docs Report", "ID: " . $id . "\nURL: " . $url . "\nFrom: " . $email  . "\nSubmission Type: " . $issue_type . "\nIP: " . $ip . "\nDate: " . $datetime . "\n\nBody:\n\"\"\"\"\"\n" . $body . "\n\"\"\"\"\"");

// Redirect to original address:
header("Location: " . $url . "?report-sent=true");
die();

?>