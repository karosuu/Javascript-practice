let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = true
const runnerAge = 18

if ( regEarly && runnerAge > 18){
  raceNumber += 10000
}
if (regEarly && runnerAge > 18){
  console.log (`Race will begin at 9:30am, your race number is:  ${raceNumber}`)
}
else if (!regEarly &&  runnerAge > 18 ){
  console.log (`Race will begin at 11:00am, your race number is:  ${raceNumber}`)
}
else if (runnerAge < 18){
  console.log (`Race will begin at 12:30m, your race number is:  ${raceNumber}`)
}
else {
  console.log('Please approach the registration desk, thanks')
}