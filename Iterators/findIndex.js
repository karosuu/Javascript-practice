/*on the animals array to find the index of the element that has the value 'elephant' and save the returned value
 to a const variable named foundAnimal.*/
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const  foundAnimal = animals.findIndex(position =>  {
  return position === "elephant"
  
})
console.log(foundAnimal)

/*  on the animals array return the index of the first element that starts with 's'. 
Assign the returned value to a const variable named startsWithS.*/
const startsWithS = animals.findIndex(animal => {
return animal[0] === 's' ? true : false
})
console.log (startsWithS)