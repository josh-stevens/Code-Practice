// Write a function that accepts a 2-dimensional array and prints out every value
// found, but in a spiral from the upper left in to the center.

function spiralTraversal (matrix) {

  var newArray = [];
  var left = 0;
  var right = matrix[0].length-1;
  var top = 0;
  var bottom = matrix.length-1;
  
  while (top <= bottom && left <= right) {

    // Go right!
    for (var i = left; i <= right; i++) {
      newArray.push(matrix[top][i]);
    }
    top++;

    // Go down!
    for (var i = top; i <= bottom; i++) {
      newArray.push(matrix[i][right]);
    }
    right--;
    
    // Go left!
    if (top <= bottom) {
       for (var i = right; i >= left; i--) {
         newArray.push(matrix[bottom][i]);
       }
       bottom--;
    }
   

    // Go up!
    if (left <= right) {
      for (var i = bottom; i >= top; i--) {
        newArray.push(matrix[i][left]);
      }
      left++;
    }

  }

  return newArray;
}
