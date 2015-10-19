// Implement a bubble sort.

var bubbleSort = function(array) {
  do {
    var sorted = true;
    for (var i=0; i<array.length; i++) {
      if (array[i] > array[i+1]) {
        var tmp = array[i];
        array[i]=array[i+1];
        array[i+1]=tmp;
        sorted = false;
      }
    }
    
  } while(!sorted)
  return array;
};
