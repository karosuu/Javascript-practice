const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep () {
        console.log('Beep Boop')
      }
    }
  };
  //Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.
  const tinCan  = robotFactory('P-500', true)
  tinCan.beep()