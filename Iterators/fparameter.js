const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};

// Write your code below
/*time2p2 assign as its value the result of invoking the timeFuncRuntime() 
function with the checkThatTwoPlusTwoEqualsFourAMillionTimes()function.*/
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
/*Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. */
const checkConsistentOutput = (func, val) => {
    /* It should call the argument function with the value two times. If the callback function produces the same result twice, 
    it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results' */
    let firstTry = func(val)
    let secondTry = func(val)
    if (firstTry === secondTry) {
        return firstTry
    }
    else {
        return 'This function returned inconsistent results'
    }
};
checkConsistentOutput(addTwo, 10)

