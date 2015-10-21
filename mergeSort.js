function mergeSort(arr){
  // Convert array of numbers into array of arrays
  for (var i = 0; i < arr.length; i++) {
    arr[i] = [arr[i]];
  }
  // Recursive sort function
  var sort = function(oldArr) {
    if (oldArr.length === 1) {
      return oldArr[0];
    }
    var nextArr = [];
    for (var i=0; i<oldArr.length; i+=2) {
      var nextVal = [];
      if (oldArr[i+1] === undefined) {
        nextArr.push(oldArr[i]);
        break;
      }
      while (oldArr[i].length || oldArr[i+1].length) {
        if(oldArr[i][0] === undefined) {
          nextVal.push(oldArr[i+1][0]);
          oldArr[i+1] = oldArr[i+1].slice(1);
        }
        else if (oldArr[i+1][0] === undefined) {
          nextVal.push(oldArr[i][0]);
          oldArr[i] = oldArr[i].slice(1);
        }
        else if(oldArr[i][0] < oldArr[i+1][0]) {
          nextVal.push(oldArr[i][0]);
          oldArr[i] = oldArr[i].slice(1);
        }
        else {
          nextVal.push(oldArr[i+1][0]);
          oldArr[i+1] = oldArr[i+1].slice(1);
        }
      }
      nextArr.push(nextVal);
    }
    return sort(nextArr);
  }
  return sort(arr);
}
