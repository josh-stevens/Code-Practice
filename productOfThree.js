// Write a function that accepts an array of integers and returns
// the largest product possible from three of those numbers.

function largestProductOfThree (array) {

  // Have to account for negative numbers
  var largestProduct = -Infinity;
  
  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      for (var k = j+1; k < array.length; k++) {
        if (array[i]*array[j]*array[k] > largestProduct)
          largestProduct = array[i]*array[j]*array[k];
      }
    }
  }
  return largestProduct;
}
