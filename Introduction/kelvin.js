// store the value 293 as kelvin measurement
const kelvin = 293
const celsius = kelvin - 273

// this ecuation calculates the fahrenheit
let fahrenheit = celsius *  (9/5) + 32

//Save result to fehrenheit. We need to use decimal because we can get decimal number
 fahrenheit = Math.floor (fahrenheit)
console.log (`The tempeture is  ${fahrenheit}  degress Farenheit.`)