// Find the first item that occurs an even number of times in an array. Remember to handle
// multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

function evenOccurence (arr) {
  var alreadyTested = [];
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    
    if (alreadyTested.indexOf(value) > -1) {
      continue;
    }
    
    var counter = 1;
    for (var j = i+1; j < arr.length; j++) {
      if (arr[j] === value) {
        counter++;
      }
    }
    if (counter % 2 === 0) {
      return value;
    }
    
    alreadyTested.push(value);
    
  }
  
  return null;
}
