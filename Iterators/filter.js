// Call .filter() on randomNumbers below to show numbers minor to 250
//arrow sampel: const filteredNums = numbers.filter(number => number < 250);
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter (function(number) {
  if (number < 250){
    return true
    // return number < 250 //
  }

}) 
console.log(smallNumbers)

/*Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. 
Save the returned array to a const variable named longFavoriteWords.*/

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

console.log(longFavoriteWords)

