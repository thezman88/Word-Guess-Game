var winCount = 1;
var lossCount = 0;
var guessesRemaining = 20;
var guessedLetters = [];
// computers choice of letters
var alaphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// computers choice logic
var randomIndex = Math.floor(Math.random()*alaphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);

// listner for user key press
document.onkeyup = function(event){
  var userChoice = event.key;

  // reset if user loses

  if(guessesRemaining <=0 ){
    lossCount++;
    document.getElementById("lossCount").innerHTML = lossCount++;
    alert("You lost!");
    guessesRemaining = 20;
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("guessesRemaining").innerHTML = 20;
    randomIndex = Math.floor(Math.random()* alaphabet.length);
    computerChoice = alaphabet[randomIndex]
  }




}
