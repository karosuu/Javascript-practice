//Anonymous  fucntion because is store with a variable
const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return 'You need to put water on your plant'
    }
    else {
        return 'Your plant only need water one day per week'
    }
}
console.log(plantNeedsWater('Tuesday'))

