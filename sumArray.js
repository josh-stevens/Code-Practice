// Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
// A single array item will count as a contiguous sum.

function sumArray (array) {
  var greatest = -Infinity;
  for (var index = 0; index < array.length; index++) {
    var sum = array[index];
    
    // Need to check if single number is greatest contiguous sum
    if (sum > greatest) {
      greatest = sum;
    }
    
    for (var next = index + 1; next < array.length; next++) {
      if (sum + array[next] <= 0) {
        break;
      }
      sum += array[next];
      
      // Check if current sum is greatest contiguous sum
      if (sum > greatest) {
        greatest = sum;
      }
    }
  }
  return greatest;
}
