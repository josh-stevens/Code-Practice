// Write a function that rotates an MxN matrix 90 degrees clockwise.

function rotateMatrix (matrix) {
  var rotatedMatrix = [];
  var matrixHeight = matrix.length;
  var matrixWidth = matrix[0].length;
  
  // First time through we need to create the
  // rows of the matrix
  for (var i = 0; i < matrixWidth; i++) {
    rotatedMatrix.push([matrix[0].shift()]);
  }
  
  // Now we can just unshift to add the rest of the values
  for (var i = 1; i < matrixHeight; i++) {
    for (var j = 0; j < matrixWidth; j++) {
      rotatedMatrix[j].unshift(matrix[i].shift());
    }
  }
  
  return rotatedMatrix;
}

/*
4x4 MATRIX EXAMPLE:

[ [ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, “A”,”B”,”C”],
[“D”,”E”,”F”,”G”] ]

Rotated:

[ [“D”, 9, 5, 1],
[“E”, “A”, 6, 2],
[“F”,”B”, 7, 3],
[“G”,”C”, 8, 4] ]
*/
