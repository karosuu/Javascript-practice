const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

/* Use .map() to create a new array that contains the first character of each string in the animals array. 
Save the new array to a const variable named secretMessage. */
const secretMessage = animals.map (animals => {
  return animals [0]
})
console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];
/* Use .map() to divide all the numbers in bigNumbers by 100. 
Save the returned values to a variable declared with const called smallNumbers. */

const smallNumbers = bigNumbers.map (num => num/100)
console.log(smallNumbers)