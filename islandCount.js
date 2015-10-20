/*
Given a string representation of a 2d map, return the number of islands in the map.
Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are
considered connected if they are adjacent (but not diagonal).

Examples:

.0...\n
.00..\n
....0

=> 2

0...0\n
..0..\n
0...0

=> 5

..000.\n
..000.\n
..000.\n
.0....\n
..000.

=> 3

..000.\n
..0...\n
..0.0.\n
..0...\n
..000.

=> 2
*/

function countIslands (mapStr) {
  // find x length of map and initialize our counter
  var xLength = mapStr.indexOf('\n');
  var islandCount = 0;
  for (var i = 0; i < mapStr.length; i++) {
    if (mapStr[i] === '0') {
      // we're looking at land, let's increase our count and recursively
      // destroy all of the land connected to this piece
      islandCount++;
      mapStr = destroyIsland(i, xLength, mapStr);
    }
  }
  return islandCount;
}

function destroyIsland (index, xLength, newMap) {
  // newMap[index] is '0', we need to change it to a '.'
  newMap = newMap.substr(0, index) + '.' + newMap.substr(index+1);
  // destroy land to the right
  if (newMap[index+1] === '0') {
    newMap = destroyIsland (index+1, xLength, newMap);
  }
  // destroy land below
  if (newMap[index+xLength+1] === '0') {
    newMap = destroyIsland (index+xLength+1, xLength, newMap);
  }
  // destroy land to the left
  if (newMap[index-1] === '0') {
    newMap = destroyIsland (index-1, xLength, newMap);
  }
  // destroy land above
  if (newMap[index-xLength-1] === '0') {
    newMap = destroyIsland (index-xLength-1, xLength, newMap);
  }
  return newMap;
}
