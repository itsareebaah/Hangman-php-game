<?php
session_start();
require 'db.php';

if (!isset($_SESSION['user'])) {
    http_response_code(401);
    echo json_encode(["error" => "Not logged in"]);
    exit;
}

$userId = $_SESSION['user']['id'];
$type = $_POST['type']; // "win" or "loss"

if ($type === "win") {
    $conn->query("UPDATE users SET wins = wins + 1 WHERE id = $userId");
    $_SESSION['user']['wins']++;
} elseif ($type === "loss") {
    $conn->query("UPDATE users SET losses = losses + 1 WHERE id = $userId");
    $_SESSION['user']['losses']++;
}

echo json_encode([
    "wins" => $_SESSION['user']['wins'],
    "losses" => $_SESSION['user']['losses']
]);
