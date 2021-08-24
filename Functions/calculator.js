const getSleepHours = day => {
    if (day === 'monday'){
    return 8
    }
    else if (day === 'tuesday'){
      return 7
    }
    else if (day === 'wednesday'){
      return 10
    }
  else if (day === 'thursday'){
      return 9
    }
    else if (day === 'friday'){
      return 7
    }
    else if (day === 'saturday'){
      return 8.5
    }
    else if (day === 'sunday'){
      return 8
    }
  else {
  return 'Error'
  }
  
  };
  const getActualSleepHours = () => getSleepHours ('monday') +
  getSleepHours ('tuesday') + getSleepHours ('wednesday') + 
  getSleepHours ('thursday') + getSleepHours ('friday') +
  getSleepHours ('saturday') + getSleepHours ('sunday') 
  
    const getIdealSleepHours = () => {
    const idealHours = 8
    return idealHours * 7 
  }
  console.log (getActualSleepHours())
  console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours){
  return 'You got the perfect amount of sleep hours'
  }
  else if (actualSleepHours >  idealSleepHours){
  console.log("You got " + ( actualSleepHours - idealSleepHours ) + " more sleep hours than needed") 
  }
  else if (actualSleepHours <  idealSleepHours){
  console.log("You got " + (idealSleepHours - actualSleepHours) + " hour(s) less sleep than you needed this week. Get some rest.")
  }
  }
  calculateSleepDebt()