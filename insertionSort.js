// Implement an insertion sort

function insertionSort (array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        array.splice(j, 0, array[i]);
        array.splice(i+1, 1);
      }
    }
  }
  return array;
}
