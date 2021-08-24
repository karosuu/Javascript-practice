//Removes the first item from the list
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift()


//Add an item to the beginning of the list
groceryList.unshift('popcorn')
console.log(groceryList.unshift())

//remove elemtns and printd just the on i want 'bananas', 'coffee beans', and 'brown rice'
console.log(groceryList.slice(1,4,5,6))

//Find index of an element and its store on a variable
const pastaIndex = groceryList.indexOf('pasta')
console.log (pastaIndex)