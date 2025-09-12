<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: index.php");
    exit;
}
$user = $_SESSION['user']; // make sure $user is defined
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hangman Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<!-- Navbar -->
  <nav class="navbar">
    <div class="logo">🎯 Hangman</div>
    <ul class="nav-links">
      <li><a href="stats.php">View Stats</a></li>
      <li><a href="logout.php">Logout</a></li>
    </ul>
    <div class="user-greeting">Welcome, <?php echo htmlspecialchars($user['username']); ?></div>
  </nav>


  <!-- Level Selection Screen -->
  <div class="start-screen" id="startScreen">
    <h1>Hangman</h1>
    <p class="choose-level">Choose Difficulty</p>
    <div class="level-buttons">
      <button class="level-btn" data-level="easy">Easy</button>
      <button class="level-btn" data-level="intermediate">Intermediate</button>
      <button class="level-btn" data-level="hard">Hard</button>
    </div>
  </div>

  
  <!-- Game Screen -->
<div class="hangman-container hidden" id="gameScreen" style="margin: top 1000px;">
  <div class="game-header">
      <!-- <p>
          Wins: <span id="winCount"><?php echo $user['wins']; ?></span> |
          Losses: <span id="lossCount"><?php echo $user['losses']; ?></span>
      </p> -->
      <!-- <div class="lives" id="livesDisplay">
          <span class="life" id="life1">❤️</span>
          <span class="life" id="life2">❤️</span>
          <span class="life" id="life3">❤️</span>
          <span class="life" id="life4">❤️</span>
          <span class="life" id="life5">❤️</span>
      </div> -->
  </div>

  <canvas id="hangmanCanvas" width="150" height="150"></canvas>

  <p class="hint" id="hint"></p>
  <p class="word" id="wordDisplay"></p>
  <div class="keyboard" id="keyboard"></div>
  <p class="message" id="message"></p>
  <button id="playAgainBtn" class="play-again hidden">Play Again</button>
  <button id="backBtn" class="back-btn hidden">Back to Levels</button>
</div>



  <script src="script.js"></script>
</body>
</html>
