let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

/* create an alienShip object. It should contain a method
 .retreat() which will console.log() the retreatMessage.*/
let alienShip = {
retreat () {
  console.log(retreatMessage)
},
//Add another method to your object literal. This method, .takeOff(),
// should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
takeOff () {
  console.log('Spim... Borp... Glix... Blastoff!')
}
}
alienShip.retreat()
alienShip.takeOff()