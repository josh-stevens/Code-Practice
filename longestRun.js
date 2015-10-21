// Write a function that, given a string, finds the longest run of identical characters
// and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

function longestRun (string) {
  
  // LINEAR SOLUTION
  
  var longestRun = [0,0];
  var longestCount = 1;
  var count = 1;
  
  for(var i=1; i< string.length; i++) {
    if(string[i] === string[i-1]) {
      count++;
    } else {
      if (count > longestCount) {
        longestRun = [i-count,i-1];
        longestCount = count;
      }
      count = 1;
    }
  }
  
  return longestRun;
  
  
  /* QUADRATIC SOLUTION
  var longestRun = [0,0];
  var longestCount = 0;

  for (var i=0; i < string.length; i++) {
    for (var j=i+1; j < string.length; j++) {
      if (string[i] !== string[j]) {
        if (j-i-1 > longestCount) {
          longestRun = [i, j-1];
          longestCount = j-i-1;
        }
        break;
      }
    }
  }
  
  return longestRun;
  */
}
