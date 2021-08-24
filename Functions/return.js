function monitorCount (rows,columns){
  return rows * columns
  }
  const numOfMonitors = monitorCount(5,4)
  console.log(numOfMonitors)

// calculate total price in monitors
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows,columns){
    return monitorCount(rows,columns) * 200
  }
  const totalCost = costOfMonitors(5,4)
  console.log(totalCost)
  
  