// Given an array of arbitrarily nested arrays, return n, where n is the deepest level
// that contains a non-array value.
// Examples:
// [ 10, 20, 30, 40 ]                 => 1
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] => 4
// [ [ [ ] ] ]                        => 0

function arrayception (array, counter, deepest) {
  var counter = counter || 0;
  var deepest = deepest || 0;
  counter++;
  for(var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      deepest = arrayception(array[i], counter, deepest);
    }
    else if(array[i] !== undefined && counter > deepest) {
      deepest = counter;
    }
  }
  return deepest;
}
