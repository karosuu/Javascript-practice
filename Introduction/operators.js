// calculates # of weeks in a year, rounds down to nearest integer
const weekInYears = Math.floor(365/7)

// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7;
console.log("A year has " + weekInYears + " weeks and " + daysLeftOver + " days")