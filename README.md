# Hangman PHP Game

A full-stack web-based implementation of the classic Hangman game, built using PHP, MySQL, and JavaScript. The application includes secure user authentication, real-time gameplay interactions, and persistent score tracking.

---

## Overview

This project extends the traditional Hangman game into a structured web application with user accounts, difficulty levels, and performance tracking. It is designed to demonstrate backend integration, session handling, and interactive frontend logic in a cohesive system.

---

## Core Features

### Authentication System

* Secure user registration and login
* Password hashing for data protection
* Session-based authentication and access control

### Gameplay Mechanics

* Interactive Hangman game logic implemented in JavaScript
* Three difficulty levels: Easy, Intermediate, Hard
* Limited attempts (5 lives per session)
* Hint system for assisted gameplay
* Clear win/lose state handling

### Score & Statistics

* Persistent tracking of:

  * Wins
  * Losses
  * Total games played
* Dedicated statistics dashboard
* Asynchronous score updates (AJAX) without page reload

### User Experience

* Responsive layout for desktop and mobile
* Clean and modern UI design
* Smooth interactions and feedback states

---

## Technology Stack

**Frontend**

* HTML5
* CSS3
* JavaScript (Vanilla)

**Backend**

* PHP

**Database**

* MySQL / MariaDB

**Environment**

* XAMPP / Localhost (or any PHP-supported server)

---

## Project Structure

```bash id="k28s9d"
hangman-php-game/
│
├── index.php        # Login page
├── register.php     # User registration
├── game.php         # Main game interface
├── stats.php        # User statistics dashboard
├── logout.php       # Session termination
├── db.php           # Database connection
├── save_score.php   # AJAX handler for score updates
├── style.css        # Global styling
├── script.js        # Game logic
└── README.md
```

---

## Local Setup

### 1. Clone Repository

```bash id="m91xla"
git clone https://github.com/itsareebaah/hangman-php-game.git
cd hangman-php-game
```

---

### 2. Database Setup

Create a database:

```sql id="q2mz8k"
CREATE DATABASE hangman_db;
```

Create table:

```sql id="j3sk92"
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    wins INT DEFAULT 0,
    losses INT DEFAULT 0
);
```

---

### 3. Configure Database

Update credentials in `db.php`:

```php id="t82ls9"
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "hangman_db";
```

---

### 4. Run Application

* Place project in `htdocs` (XAMPP)
* Start Apache & MySQL
* Open in browser:

```
http://localhost/hangman-php-game
```

---

## Gameplay Flow

1. Register or log in to your account
2. Select difficulty level
3. Guess letters to reveal the hidden word
4. Each incorrect guess reduces remaining lives
5. Game ends on win or when all lives are lost
6. Results are stored and reflected in the statistics dashboard

---

## What This Project Demonstrates

* Full-stack development using PHP and JavaScript
* Secure authentication and session management
* Client-server communication using AJAX
* State management for interactive applications
* Database design and integration

---

## Limitations

* Single-player only
* Static word dataset
* No leaderboard or ranking system
* No API-based word generation

---

## Future Improvements

* Global leaderboard and ranking system
* Multiplayer or competitive mode
* Dynamic word API with categories
* Progressive difficulty scaling
* UI enhancements and animations

---

## License

This project is licensed under the MIT License.

---

## Author

Areeba Ahmad
## Live Demo 
[Live Demo](https://hangmangame.xo.je/?i=1)
