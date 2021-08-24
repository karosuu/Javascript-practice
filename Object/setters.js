/*Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.*/
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    // Add a setter method named numOfSensors
    //Add a check to see if num is a number using the typeof operator.
    //num should also be greater than or equal to 0.
    //If both conditions are met, reassign this._numOfSensors to num.
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num
        }
        //Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.
        else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    }
};
//Use the numOfSensors setter method on robot to assign _numOfSensors to 100
robot.numOfSensors = 100
console.log(robot.numOfSensors)
