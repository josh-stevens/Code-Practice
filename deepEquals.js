// Write a function that, given two objects, returns whether or not the two are deeply
// equivalent – meaning the structure of the two objects is the same, and so is the structure
// of each of their corresponding descendants.

// DO NOT use JSON.stringify.

deepEquals = function(a, b){
  for(var key in a) {
    if(b[key] === undefined) {
      return false;
    }
    else if (typeof a[key] === 'object') {
      if(!deepEquals(a[key], b[key])) {
        return false;
      }
    } else if(a[key] !== b[key]) return false;
  }
  for(var key in b) {
    if(a[key] === undefined) {
      return false;
    }
  }
  return true;
}; 
