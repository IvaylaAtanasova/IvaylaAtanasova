let sentence = prompt("Enter a sentence:");
let count = 0;

for(let i = 0; i < sentence.length; i++) {
  let letter = sentence.charAt(i).toLowerCase();
  if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    count++;
  }
}

console.log("The number of vowels in the sentence is: " + count);
