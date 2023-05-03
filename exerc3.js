// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the number
let guess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the guess is correct
if (guess === randomNumber) {
  console.log("Congratulations, you guessed the number!");
} else {
  // Give a hint and let the user try again
  if (guess < randomNumber) {
    console.log("Your guess is too low. Try again!");
  } else {
    console.log("Your guess is too high. Try again!");
  }
}
