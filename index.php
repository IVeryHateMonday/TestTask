<?php
function get_user_ip()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}



$data = [
    'firstName' => $_POST['firstName'],
    'lastName' => $_POST['lastName'],
    'phone' => $_POST['phone'],
    'email' => $_POST['email'],
    'countryCode' => $_POST['countryCode'],
    'box_id' => 28,
    'offer_id' => 5,
    'landingUrl' => $_SERVER['HTTP_REFERER'] ?? 'unknown',
    'ip' => get_user_ip(),
    'password' => 'qwerty12',
    'language' => $_POST['language'],
    'clickId' => '',
    'quizAnswers' => '',
    'custom1' => '',
    'custom2' => '',
    'custom3' => ''
];

$url = 'https://crm.belmar.pro/api/v1/addlead';
$token = 'ba67df6a-a17c-476f-8e95-bcdb75ed3958';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'token: ' . $token
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    die('Помилка при відправці даних: ' . $response);
}
$logData = date('Y-m-d H:i:s') . " - " . $response . "\n";
file_put_contents('leads_backup.log', $logData, FILE_APPEND);
require_once "leads.php";

