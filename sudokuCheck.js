// Given a string representation of a sudoku board (with \n characters for newlines), return
// 'solved' if the board is solved or 'invalid' if the board is invalid.

function sudokuCheck (boardStr) {
  
  // Grab the rows by splitting on newlines
  var rows = boardStr.split('\n');
  
  // Placeholder empty strings for columns and squares
  var cols = ['','','','','','','','',''];
  var squares = ['','','','','','','','',''];
  
  // Grab the columns by iterating through the rows
  for (var i = 0; i < rows[0].length; i++) {
    for (var j = 0; j < rows.length; j++) {
      cols[i] = cols[i].concat(rows[j][i]);
    }
  }

  // Grab the squares by iterating through rows and columns several times :(
  for (var i = 0; i < squares.length/3; i++){
    for (var j = 0; j < 3; j++) {
      for (var col = 0; col < 3; col++) {
          squares[i] = squares[i].concat(rows[j+i*3][col]);
      }
  }
}

  for (var i = 0; i < squares.length/3; i++) {
    for (var j = 0; j < 3; j++) {
      for (var col = 3; col < 6; col++) {
        squares[i+3] = squares[i+3].concat(rows[j+i*3][col]);
      }
    }
  }

  for (var i = 0; i < squares.length/3; i++) {
    for (var j = 0; j < 3; j++) {
      for (var col = 6; col < 9; col++) {
        squares[i+6] = squares[i+6].concat(rows[j+i*3][col]);
      }
    }
  }

  // Check each row, column, and square to equal 45.
  // The inner strings must be converted to arrays using split.
  // The individual number strings have to be parsed to Ints in order
  // to add them.
  for (var i = 0; i < rows.length; i++) {
    rows[i] = rows[i].split('');
    cols[i] = cols[i].split('');
    squares[i] = squares[i].split('');

    if (rows[i].reduce(function(a, b) {return parseInt(a) + parseInt(b);}) !== 45) return 'invalid';
    if (cols[i].reduce(function(a, b) {return parseInt(a) + parseInt(b);}) !== 45) return 'invalid';
    if (squares[i].reduce(function(a, b) {return parseInt(a) + parseInt(b);}) !== 45) return 'invalid';
  }

  return 'solved';
}
