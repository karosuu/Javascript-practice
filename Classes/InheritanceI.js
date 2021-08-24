class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword() {
    return Math.floor(Math.random() * 1000)
  }
}

//reate the Nurse class as a child of the HospitalEmployee class
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name)
    this._certifications = certifications
  }
  get certifications() {
    return this._certifications;
  }
  //Add a method called addCertification 
  addCertification(newCertification) {
   
    /* The method should accept one input (newCertification). Inside the method, 
    use the push method to add the newCertification value to the nurse’s certifications array*/
    this._certifications.push(newCertification);
  }
}

/* Under the Nurse class, create a new instance of Nurse and save it to a constant variable 
named nurseOlynyk. Pass in the following values for each property:
name: 'Olynyk'
certifications: ['Trauma', 'Pediatrics']*/
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5) // Call .takeVacationDays() with an input of 5 on your nurseOlynyk instance.
console.log(nurseOlynyk.remainingVacationDays)//Under the method call, log the value saved to the remainingVacationDays property in nurseOlynyk.

nurseOlynyk.addCertification('Genetics') // add parameter 'Genetics
console.log(nurseOlynyk.certifications)