/*Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
-There are a few simple rules for translating text to whale language:
-There are no consonants. Only vowels excluding “y”.
-The u‘s and e‘s are extra long, so we must double them in our program.*/

let input = 'a whale of a deal!'
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j])
      resultArray.push(input[i])
  }
  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
  if (input[i] === 'u') {
    resultArray.push(input[i])
  }
};
/* .join() method make a continuous string with '' as an argument
.join() method make a continuous string with '' as an argument
*/
console.log(resultArray.join('').toUpperCase());