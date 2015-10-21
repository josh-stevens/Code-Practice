// Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

function toMilitary (time) {
  
  // Split hours, minutes, and set var for suffix
  time = time.split(':');
  var suffix = time[1].slice(time[1].length-2);
  
  // If pm, strip suffix and add 12 to first part
  if (suffix === "pm") {
    time[1] = time[1].substr(0,2);
    
    if (time[0] !== "12") {
      time[0] = parseInt(time[0]) + 12;
      time[0] = time[0].toString();
    }
    
    return time.join(':');
  }
  
  // If am, strip suffix and make sure first part
  // is two digits
  else if (suffix === "am") {
    time[1] = time[1].substr(0,2);
    
    if (time[0].length !== 2) {
      time[0] = '0' + time[0];
    }
    
    // If 12am, change to 00
    
    if (time[0] === '12') {
      time[0] = '00';
    }
    
    return time.join(':');
  }
  
  // If no suffix, return unchanged time
  else {
    return time.join(':');
  }
}
