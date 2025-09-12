const wordSets = {
  easy: [
  { word: "apple", hint: "A common fruit" },
  { word: "dog", hint: "Man's best friend" },
  { word: "sun", hint: "The star at the center of our solar system" },
  { word: "book", hint: "Used to read and learn" },
  { word: "tree", hint: "Grows in forests and gardens" },
  { word: "car", hint: "Used for driving" },
  { word: "cat", hint: "A small domesticated animal" },
  { word: "ball", hint: "Used in sports and games" },
  { word: "milk", hint: "White liquid from cows" },
  { word: "fish", hint: "Lives in water" },
  { word: "bird", hint: "Has wings and can fly" },
  { word: "star", hint: "Shines in the night sky" },
  { word: "moon", hint: "Earth's natural satellite" },
  { word: "shoe", hint: "Worn on feet" },
  { word: "rain", hint: "Water falling from clouds" },
  { word: "hat", hint: "Worn on head" },
  { word: "door", hint: "Used to enter or exit rooms" },
  { word: "cake", hint: "Sweet dessert" },
  { word: "pen", hint: "Used to write" },
  { word: "clock", hint: "Shows time" },
  { word: "chair", hint: "Used for sitting" },
  { word: "milk", hint: "Dairy drink" },
  { word: "tree", hint: "Plants that grow tall" },
  { word: "phone", hint: "Used to call people" },
  { word: "cup", hint: "Used to drink liquids" },
  { word: "rainbow", hint: "Colors in the sky after rain" },
  { word: "fish", hint: "Swims in water" },
  { word: "house", hint: "Where people live" },
  { word: "cloud", hint: "Fluffy things in sky" },
  { word: "key", hint: "Opens locks" }
],
  intermediate: [
  { word: "computer", hint: "Electronic device for computing" },
  { word: "keyboard", hint: "You type with it" },
  { word: "elephant", hint: "Largest land animal" },
  { word: "bicycle", hint: "Two-wheeled transportation" },
  { word: "guitar", hint: "Musical instrument with strings" },
  { word: "pencil", hint: "Used to write or draw" },
  { word: "teacher", hint: "Educates students" },
  { word: "window", hint: "Lets light in a room" },
  { word: "camera", hint: "Used to take pictures" },
  { word: "bridge", hint: "Connects two places" },
  { word: "airport", hint: "Where airplanes take off" },
  { word: "library", hint: "Place with many books" },
  { word: "mountain", hint: "High landform" },
  { word: "notebook", hint: "Used to take notes" },
  { word: "restaurant", hint: "Place to eat food" },
  { word: "giraffe", hint: "Tall animal with a long neck" },
  { word: "airplane", hint: "Flies in the sky" },
  { word: "train", hint: "Runs on tracks" },
  { word: "hospital", hint: "Place to treat patients" },
  { word: "painter", hint: "Person who paints" },
  { word: "diamond", hint: "Precious stone" },
  { word: "volcano", hint: "Mountain that erupts" },
  { word: "island", hint: "Land surrounded by water" },
  { word: "printer", hint: "Used to print documents" },
  { word: "backpack", hint: "Used to carry things" },
  { word: "bottles", hint: "Used to hold liquids" },
  { word: "candle", hint: "Gives light when lit" },
  { word: "compass", hint: "Shows directions" },
  { word: "football", hint: "Popular team sport" },
  { word: "hospital", hint: "Place for medical treatment" }
],
 hard: [
  { word: "javascript", hint: "Programming language for web" },
  { word: "encyclopedia", hint: "Book with lots of information" },
  { word: "microbiology", hint: "Study of microorganisms" },
  { word: "architecture", hint: "Art of designing buildings" },
  { word: "astronomy", hint: "Study of stars and planets" },
  { word: "psychology", hint: "Study of mind and behavior" },
  { word: "philosophy", hint: "Study of knowledge and existence" },
  { word: "neurology", hint: "Study of the nervous system" },
  { word: "thermodynamics", hint: "Study of heat and energy" },
  { word: "metamorphosis", hint: "Process of transformation" },
  { word: "cryptography", hint: "Study of secret codes" },
  { word: "photosynthesis", hint: "Plants make food using sunlight" },
  { word: "geography", hint: "Study of Earth's features" },
  { word: "architecture", hint: "Design of structures and buildings" },
  { word: "linguistics", hint: "Study of language" },
  { word: "cyberspace", hint: "Virtual environment of internet" },
  { word: "algorithm", hint: "Step by step procedure" },
  { word: "mathematics", hint: "Study of numbers" },
  { word: "engineering", hint: "Application of science to build" },
  { word: "constellation", hint: "Group of stars in sky" },
  { word: "biochemistry", hint: "Chemistry of living things" },
  { word: "pharmacology", hint: "Study of drugs" },
  { word: "zoology", hint: "Study of animals" },
  { word: "robotics", hint: "Design and use of robots" },
  { word: "quantum", hint: "Physics of very small particles" },
  { word: "cosmology", hint: "Study of universe" },
  { word: "neuroscience", hint: "Study of brain and nerves" },
  { word: "paleontology", hint: "Study of fossils" },
  { word: "linguistics", hint: "Study of languages" },
  { word: "biotechnology", hint: "Technology using biological systems" }
]

};

let selectedWord, guessedLetters, lives, currentWords;
const wordDisplay = document.getElementById("wordDisplay");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const canvas = document.getElementById("hangmanCanvas");
const ctx = canvas.getContext("2d");
const livesDisplay = document.getElementById("livesCount");

const playAgainBtn = document.getElementById("playAgainBtn");
const backBtn = document.getElementById("backBtn");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");

function pickRandomWord() {
  const randomObj = currentWords[Math.floor(Math.random() * currentWords.length)];
  selectedWord = randomObj.word.toUpperCase();
  hint.textContent = `Hint: ${randomObj.hint}`;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function updateLives() {
  for (let i = 1; i <= 5; i++) {
    const heart = document.getElementById(`life${i}`);
    if (i <= lives) {
      heart.classList.remove("lost");
    } else {
      heart.classList.add("lost");
    }
  }
if (lives === 0) {
    showMessage(`You lost! The word was "${selectedWord}"`, "loss");
    endGame();
  }
}

function drawHangman() {
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#000";
  ctx.beginPath();

  if (lives <= 4) ctx.moveTo(10, 140), ctx.lineTo(140, 140);
  if (lives <= 3) ctx.moveTo(40, 140), ctx.lineTo(40, 20);
  if (lives <= 2) ctx.lineTo(100, 20), ctx.lineTo(100, 40);
  if (lives <= 1) ctx.moveTo(100, 50), ctx.arc(100, 60, 10, 0, Math.PI * 2);
  if (lives <= 0) {
    ctx.moveTo(100, 70), ctx.lineTo(100, 100);
    ctx.moveTo(100, 80), ctx.lineTo(85, 90);
    ctx.moveTo(100, 80), ctx.lineTo(115, 90);
    ctx.moveTo(100, 100), ctx.lineTo(85, 120);
    ctx.moveTo(100, 100), ctx.lineTo(115, 120);
  }
  ctx.stroke();
}

function updateWordDisplay() {
  wordDisplay.textContent = selectedWord
    .split("")
    .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
}

function checkGameStatus() {
  if (!wordDisplay.textContent.includes("_")) {
    message.textContent = "🎉 Winner! Great Job!";
    message.className = "message winner";
    disableAllKeys();
    playAgainBtn.classList.remove("hidden");
    backBtn.classList.remove("hidden");
  } else if (lives <= 0) {
    message.textContent = `💀 Loser! The word was: ${selectedWord}`;
    message.className = "message loser";
    disableAllKeys();
    playAgainBtn.classList.remove("hidden");
    backBtn.classList.remove("hidden");
  }
}

function handleGuess(letter, button) {
  if (guessedLetters.includes(letter)) return;
  guessedLetters.push(letter);
  button.disabled = true;

  if (!selectedWord.includes(letter)) {
    lives--;
    drawHangman();
  }

  updateWordDisplay();
  checkGameStatus();
}

function disableAllKeys() {
  document.querySelectorAll(".key").forEach(btn => (btn.disabled = true));
}

function createKeyboard() {
  keyboard.innerHTML = "";
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
    const button = document.createElement("button");
    button.textContent = letter;
    button.className = "key";
    button.addEventListener("click", () => handleGuess(letter, button));
    keyboard.appendChild(button);
  });
}

function initGame() {
  clearCanvas();
  lives = 5;
  guessedLetters = [];
  pickRandomWord();
  updateWordDisplay();
  createKeyboard();
  message.textContent = "";
  message.className = "message";
  playAgainBtn.classList.add("hidden");
  backBtn.classList.add("hidden");
}

document.querySelectorAll(".level-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const level = btn.dataset.level;
    currentWords = wordSets[level];
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    initGame();
  });
});

playAgainBtn.addEventListener("click", initGame);
backBtn.addEventListener("click", () => {
  gameScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});
function saveScore(result) {
  fetch("save_score.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "type=" + result
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("winCount").textContent = data.wins;
    document.getElementById("lossCount").textContent = data.losses;
  });
}

function checkGameStatus() {
  if (!wordDisplay.textContent.includes("_")) {
    message.textContent = "🎉 Winner! Great Job!";
    message.className = "message winner";
    disableAllKeys();
    saveScore("win"); // ✅ Save win
    playAgainBtn.classList.remove("hidden");
    backBtn.classList.remove("hidden");
  } else if (lives <= 0) {
    message.textContent = `💀 Loser! The word was: ${selectedWord}`;
    message.className = "message loser";
    disableAllKeys();
    saveScore("loss"); // ✅ Save loss
    playAgainBtn.classList.remove("hidden");
    backBtn.classList.remove("hidden");
  }
}
function updateLives() {
  for (let i = 1; i <= 5; i++) {
    const heart = document.getElementById(`life${i}`);
    if (i <= lives) {
      heart.classList.remove("lost");
    } else {
      heart.classList.add("lost");
    }
  }

  if (lives === 0) {
    showMessage(`You lost! The word was "${selectedWord}"`, "loss");
    endGame();
  }
}
