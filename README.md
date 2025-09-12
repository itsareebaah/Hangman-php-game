🎯 Hangman Game – PHP & JavaScript Version

A modern Hangman Game built with PHP, MySQL, JavaScript, HTML, and CSS featuring user authentication, levels, scoring, and a stylish UI. Track your wins, losses, and compete with yourself!

🖥️ Demo

🚀 Features

User Authentication

Secure login & registration with hashed passwords

Session management to protect user data

Hangman Gameplay

Fun and interactive Hangman game

3 difficulty levels: Easy, Intermediate, Hard

5 lives per game

Hints to guess words

Winner/Loser messages

Score Tracking

Track wins, losses, and total games played

View your stats in a dedicated stats page

Real-time score update without page reload

Modern UI

Glassmorphism design

Gradient backgrounds

Animated buttons and inputs

Responsive design for desktop & mobile

📁 Project Structure
hangman/
│
├── index.php        # Login page
├── register.php     # Registration page
├── game.php         # Main Hangman game
├── stats.php        # Stats page (wins/losses)
├── logout.php       # Logout script
├── db.php           # Database connection
├── save_score.php   # AJAX endpoint to update scores
├── style.css        # Styling for all pages
├── script.js        # Game logic (JS)
└── README.md        # Project documentation

🛠️ Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: PHP

Database: MySQL / MariaDB

Server: XAMPP / Localhost (can be hosted on any PHP-supported server)

💾 Installation & Setup

Clone the repository

git clone https://github.com/itsareebaah/Hangman.git
cd hangman-game


Setup Database

Open phpMyAdmin and create a database hangman_db

Run the SQL script:

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    wins INT DEFAULT 0,
    losses INT DEFAULT 0
);


Configure Database Connection

Open db.php and update credentials:

$host = "localhost";
$user = "root"; // your DB username
$pass = "";     // your DB password
$dbname = "hangman_db";


Run on Localhost

Copy the project to htdocs (if using XAMPP)

Open browser: http://localhost/hangman

🎮 How to Play

Register or Login

Choose a difficulty level: Easy / Intermediate / Hard

Guess letters to uncover the word

5 lives only – Wrong guesses reduce lives

Win or Lose messages appear

Check your stats in the Stats page

🔑 Features for Users

Personalized experience with username greeting

Track Wins / Losses / Total Games / Win Rate

Stylish UI with animations and gradient design

Option to Play Again or Logout anytime

📝 Future Enhancements

Leaderboard for top players

Multiplayer mode

Dynamic word database with categories

Mobile app version

📌 Screenshots

Login Page


Game Page


Stats Page


⚡ License

This project is open-source under the MIT License. Feel free to use, modify, and share.