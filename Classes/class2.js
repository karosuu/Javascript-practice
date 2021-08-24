class Surgeon {
  constructor(name, department) {
    this._name = name; // Underscore which indicate these properties should not be accessed
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name
  }

  get department() {
    return this._department
  }

  get remainingVacationDays() {
    return this._remainingVacationDays
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff //Inside of the method, subtract daysOff from the number saved to _remainingVacationDays
  }
}

//const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
//const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name)
surgeonRomero.takeVacationDays(3)
console.log(surgeonRomero.remainingVacationDays)