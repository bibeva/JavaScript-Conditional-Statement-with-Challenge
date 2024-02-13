// Store correct answers. When quiz begins, no answers are correct
let correct = 0;

// Store the rank of a player
let rank;

/* 
   Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers 
*/
const answer1 = prompt('What is the capital of France?');
if(answer1.toLowerCase() === 'paris') {
  correct += 1;
}

const answer2 = prompt('What is the capital of Japan?');
if(answer2.toLowerCase() === 'tokyo') {
  correct += 1;
}

const answer3 = prompt('What is the largest mammal on land?');
if(answer3.toLowerCase() === 'elephant') {
  correct += 1;
}

const answer4 = prompt('What is the currency of the United Kingdom?');
if(answer4.toLowerCase() === 'pound') {
  correct += 1;
}

const answer5 = prompt('Which country is famous for the Pyramids of Giza?');
if(answer5.toLowerCase() === 'egypt') {
  correct += 1;
}

/* 
   Rank player based on number of correct answers
   - 5 correct = Gold
   - 3 - 4 correct = Silver 
   - 1 - 2 = Bronze
   - 0 = Try again
*/
if(correct === 5) {
  rank = 'Gold';
} else if(correct >= 3) {
  rank = 'Silver';
} else if(correct >= 1) {
  rank = 'Bronze';
} else {
  rank = 'No medal!'
}

// Output results to the <main> element
const main = document.querySelector('main');
main.innerHTML = `<h2>You got ${correct} out of 5 questions correct.</h2>
                  <p>You earn: <strong>${rank}</strong></p>`;