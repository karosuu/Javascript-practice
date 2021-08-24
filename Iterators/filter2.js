const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


//he first thing we want to do is check if there are words that are fewer than 6 characters long
console.log(words.some(word => {
  return word.length < 6;
}));

// Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords
const interestingWords = words.filter((word) => {return word.length > 5})

console.log(interestingWords.every((word) => { return word.length > 5} ));
