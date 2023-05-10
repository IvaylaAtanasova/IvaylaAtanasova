//task:Write a function that calculates overtime and pay associated with overtime. 
  //- Working 9 to 5: regular hours 
  //- After 5pm is overtime
  

  //Your function gets an array with 4 values: 
  //- Start of working day, in decimal format, (24-hour day notation) 
  //- End of working day. (Same format) 
  //- Hourly rate 
  //- Overtime multiplier 

  
  function calcOvertime (arr) {

    
    let start = arr [0]; 
    let end = arr [1]; 
    let hourlyRate = arr [2];
    let multiplier = arr [3];


  //calculate the number of regular hours worked:
    let regular_hours = Math.min(end, 17) - 9;    

    //calculate the number of overtime hours worked
  let overtime_hours = Math.max(end - 17, 0);

  //calculate overtime pay based on the hourly rate and the overtime multiplier
  let overtime_pay = overtime_hours * hourlyRate * multiplier;

  //calculate the total wage by adding the wage for regular hours and the wage for overtime
  let total_pay = regular_hours * hourlyRate + overtime_pay;

  //return the result formatted as a string with the "$" sign and two decimal digits after the decimal point
  return '$' + total_pay.toFixed(2);

}

//calcOvertime ([9, 17])