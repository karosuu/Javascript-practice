// Write your code below
let bobsFollowers = ['Carl', 'Jason', 'Matt', 'Tommy'];
let tinasFollowers = ['Jason', 'Tommy', 'Celia'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}
console.log(mutualFollowers)