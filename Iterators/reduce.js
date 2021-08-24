const newNumbers = [1, 3, 5, 7];

//create a new variable as arrpw function with 2 parameters
const newSum = newNumbers.reduce((accumulator, currentValue) => {
//To check the value being used as we iterate through the array, add three statements to the function body of the callback:
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
//a return statement that adds accumulator to currentValue.  
  return accumulator + currentValue;
//Add a second argument of 10 to .reduce()
},10);

console.log(newSum);
