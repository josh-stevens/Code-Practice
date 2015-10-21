// A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner.
// The robot can move either up, down, left, or right, but cannot visit the same spot twice.
// How many possible unique paths are there to the bottom right corner?

function robotPaths (n) {
  
  var counter = 0;
  var board = makeBoard(n);
    
  function movePiece(x,y,board) {
    board.togglePiece(x,y);
    
    // Check if we moved into winning position
    if (x === n-1 && y === n-1) {
      counter++;
      board.togglePiece(x,y);
      return;
    }
    
    // Check each position to see if it's a valid move, if so, move Piece
    // there
    if(checkPosition(x-1,y)) {
      movePiece(x-1,y,board);
    }
    if (checkPosition(x+1,y)) {
      movePiece(x+1,y,board);
    }
    if (checkPosition(x,y+1)) {
      movePiece(x,y+1,board);
    }
    if (checkPosition(x,y-1)) {
      movePiece(x,y-1,board);
    }
    
    // We've recursed through all possibilities, so let's remove the piece
    // and return up the tree
    board.togglePiece(x,y);
    return;
    
  }
  
  // Check position to see if it's a valid move
  function checkPosition(x,y) {
    if (board[x] !== undefined) {
      if (board[x][y] === undefined || board.hasBeenVisited(x,y)) {
        return false;
      }
      return true;
    }
    return false;
  }

  movePiece(0,0,board);
  
  return counter;
    
}

function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}
