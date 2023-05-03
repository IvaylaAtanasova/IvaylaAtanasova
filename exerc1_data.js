// Get the current year
const currentYear = new Date().getFullYear();

// Ask the user for their birth year
const birthYear = prompt("What year were you born in?");

// Calculate the age based on the current year and the user's birth year
const age = currentYear - birthYear;

// Display the calculated age to the user
alert(`You are ${age} years old.`);
