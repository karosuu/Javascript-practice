const concept = ['arrays', 'can', 'be', 'mutated'];
//change the value of the element
function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

//This function remove the last element from the array  list
function removeElement (newArr){
  newArr.pop()
}

removeElement(concept)
console.log(concept)
