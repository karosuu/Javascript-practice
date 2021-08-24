// Reasign the value og lightWaves and print both values. The one inside the block and the global outside the block
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if ( region === 'The Arctic'){
  let lightWaves = 'Northern Lights'
  console.log (lightWaves)
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();