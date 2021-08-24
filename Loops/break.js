const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
//Log each element from rapperArray in a for loop with the iterator variable i.
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);

  // if an elemnt is equal to Notorius BIG the loop will stop
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");




