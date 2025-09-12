<?php
session_start();
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username=?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($user = $result->fetch_assoc()) {
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user;
            header("Location: game.php");
            exit;
        } else {
            $error = "Invalid password!";
        }
    } else {
        $error = "User not found!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <title>Login</title>
  <style>
    /* ===== Global Body ===== */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
}

/* ===== Auth Container (Glassmorphism Card) ===== */
.auth-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 35px;
  border-radius: 25px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  width: 360px;
  text-align: center;
  animation: fadeIn 0.7s ease-in-out;
  transition: transform 0.3s ease;
}

.auth-container:hover {
  transform: scale(1.02);
}

.auth-container h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===== Form Inputs ===== */
.auth-container form {
  display: flex;
  flex-direction: column;
}

.auth-container input[type="text"],
.auth-container input[type="password"] {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  padding: 14px 18px;
  margin: 12px 0;
  border-radius: 15px;
  color: #fff;
  font-size: 1rem;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.auth-container input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.auth-container input:focus {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

/* ===== Buttons ===== */
.auth-container button {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
  border: none;
  padding: 14px;
  margin-top: 18px;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.auth-container button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* ===== Links ===== */
.auth-container p {
  margin-top: 18px;
  font-size: 0.95rem;
}

.auth-container a {
  color: #fff;
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.auth-container a:hover {
  color: #ffd700;
}

/* ===== Messages ===== */
.error-message {
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-weight: 500;
}

.success-message {
  color: #7bed9f;
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-weight: 500;
}

/* ===== Animations ===== */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* ===== Responsive ===== */
@media (max-width: 400px) {
  .auth-container {
    width: 90%;
    padding: 30px 20px;
  }

  .auth-container h2 {
    font-size: 2rem;
  }

  .auth-container input,
  .auth-container button {
    font-size: 0.95rem;
    padding: 12px;
  }
}

  </style>
</head>
<body>
  <div class="auth-container">
    <h2>Login</h2>
    <?php if (!empty($error)) echo "<p class='error-message'>$error</p>"; ?>
    <?php if (!empty($_GET['registered'])) echo "<p class='success-message'>Registered successfully! Please login.</p>"; ?>
    <form method="post">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p>No account? <a href="register.php">Register</a></p>
  </div>
</body>

</html>
