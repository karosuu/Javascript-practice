// Let you know that type of variable is and value is reasigned
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable)
newVariable = 1
console.log(typeof newVariable)

// find the data type of the resulting value when you concatenate variables containing two different data types
let age = 7;
console.log(typeof age)
age = (`Tommy is ${age} years old.`)
console.log('Two data types in one variable')
console.log(typeof age)