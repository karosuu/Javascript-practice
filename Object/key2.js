//The second way to access a key’s value is by using bracket notation, [ ].

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  let isActive = spaceship['Active Mission']
  let fuelT = spaceship['homePlanet']
  
  console.log(isActive)
  console.log(fuelT)