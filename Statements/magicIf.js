let userName = 'Carlos'

userName ? console.log(`Hello, ${userName}`) : console.log("Hello!")

let userQuestion = 'can you answer my question?'

console.log(`The user asked, ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = ''

if (eightBall === randomNumber && 0) {
  console.log('It is certain')
}
else if ( eightBall=== randomNumber &&  1) {
  console.log('It is decidedly so')
}
else if (eightBall=== randomNumber && 2) {
  console.log('Reply hazy try again')
}
else if (eightBall=== randomNumber && 3) {
  console.log('Cannot predict now')
}
else if (eightBall=== randomNumber && 4) {
  console.log('Do not count on it')
}

else if (eightBall=== randomNumber && 5) {
  console.log('My source say no')
}
else if (eightBall=== randomNumber && 6) {
  console.log('Outlook not so good')
}
else if (eightBall=== randomNumber && 7) {
  console.log('Signs point to yes')
}
console.log(`The eight ball answered: ${eightBall}`)
