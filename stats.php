<?php
session_start();
require 'db.php';

if (!isset($_SESSION['user'])) {
    header("Location: index.php");
    exit;
}

$user = $_SESSION['user'];
$totalGames = $user['wins'] + $user['losses'];
$winRate = $totalGames > 0 ? round(($user['wins'] / $totalGames) * 100, 1) : 0;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Player Stats</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="auth-container">
    <h2>📊 Your Game Stats</h2>

    <div class="stats-card">
      <p><strong>Username:</strong> <?php echo htmlspecialchars($user['username']); ?></p>
      <p><strong>Total Games:</strong> <?php echo $totalGames; ?></p>
      <p><strong>Wins:</strong> <span class="win-text"><?php echo $user['wins']; ?></span></p>
      <p><strong>Losses:</strong> <span class="loss-text"><?php echo $user['losses']; ?></span></p>
      <p><strong>Win Rate:</strong> <?php echo $winRate; ?>%</p>
    </div>

    <button onclick="window.location.href='game.php'">🎮 Play Again</button>
    <button onclick="window.location.href='logout.php'">🚪 Logout</button>
  </div>
</body>
</html>
