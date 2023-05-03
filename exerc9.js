// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Set the number of guesses to 10
let numGuesses = 10;

// Prompt the user to guess the number
let userGuess = Number(prompt("Guess the number between 1 and 100. You have " + numGuesses + " guesses."));

// Keep prompting the user to guess until they guess the number or run out of guesses
while (userGuess !== randomNumber && numGuesses > 1) {
  // If the guess is too high, give the user a hint to guess lower
  if (userGuess > randomNumber) {
    numGuesses--;
    userGuess = Number(prompt("Too high! Guess lower. You have " + numGuesses + " guesses."));
  }
  // If the guess is too low, give the user a hint to guess higher
  else if (userGuess < randomNumber) {
    numGuesses--;
    userGuess = Number(prompt("Too low! Guess higher. You have " + numGuesses + " guesses."));
  }
}

// If the user guessed the number, display a message indicating success
if (userGuess === randomNumber) {
  console.log("Congratulations! You guessed the number (" + randomNumber + ") in " + (11 - numGuesses) + " guesses.");
}
// If the user ran out of guesses, display a message indicating failure
else {
  console.log("Sorry, you ran out of guesses. The number was " + randomNumber + ".");
}
