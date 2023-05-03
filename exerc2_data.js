// prompt the user for input string
let inputString = prompt("Enter a string: ");

// prompt the user for the specific letter to count
let targetLetter = prompt("Enter a letter to count: ");

let count = 0;

// loop through each character in the input string
for (let i = 0; i < inputString.length; i++) {
  // check if the current character matches the target letter
  if (inputString[i] === targetLetter) {
    count++;
  }
}

// display the count to the user
console.log(`The letter '${targetLetter}' occurs ${count} times in the input string.`);
