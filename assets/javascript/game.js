//Alphabet Fortune Telling Pschic Game

//The computer's choices of letters:
var actualLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Scoreboard
var wins = 0;
var losses = 0;
var remainingGuesses = 5;
var lettersguessedsofar = [];
var computerChoice = [];


//
window.onload = function() {
	var compChoice = actualLetter[Math.floor(Math.random() * actualLetter.length)];
	computerChoice.push(compChoice);
	console.log(computerChoice[0]);
}


//Game
document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersguessedsofar.push(userGuess);
	console.log(computerChoice[0]);

if ((userGuess === computerChoice[0]) && (remainingGuesses > 0)) {
	wins++;
	remainingGuesses = 5;
	lettersguessedsofar.length = 0;
	computerChoice.length = 0;
	var compChoice = actualLetter[Math.floor(Math.random() * actualLetter.length)];
	computerChoice.push(compChoice);
	console.log(computerChoice[0]);
}

else if ((userGuess !== computerChoice[0]) && (remainingGuesses > 0)) {
	remainingGuesses = remainingGuesses-1;
}

else {
	losses++;
	remainingGuesses = 5;
	lettersguessedsofar.length = 0;
	computerChoice.length = 0;
	var compChoice = actualLetter[Math.floor(Math.random() * actualLetter.length)];
	computerChoice.push(compChoice);
	console.log(computerChoice[0]);
}

var html = "<p>Guess which letter I'm thinking of...</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Number of remaining guesses: " + remainingGuesses + "</p>" +
          "<p>Guesses so far: " + lettersguessedsofar + "</p>";
 
document.querySelector("#game").innerHTML = html;

}