const robot = {
    energyLevel: 100,
    
    // shorthand format
    checkEnergy () {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
       
       // longhand format
      /* giveDetails: function() {
      console.log(`${this.name} is a ${this.color} goat.`)
    }*/
  }
}
 robot.checkEnergy();