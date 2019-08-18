var winCount = 1;
var lossCount = 0;
var guessesRemaining = 20;
var guessedLetters = [];
// computers choice of letters
var alaphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// computers choice logic
var randomIndex = Math.floor(Math.random()*alaphabet.length);
var computerChoice = alphabet[randomIndex];
