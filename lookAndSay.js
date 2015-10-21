// https://en.wikipedia.org/wiki/Look-and-say_sequence

function lookAndSay (n) {
  
  var sequence = '1';
  var newSeq = '';
  
  // Starting from a base sequence of '1', we're going to
  // generate the next part of the sequence N times
  for (var i = 1; i < n; i++) {
    
    // We're going to iterate over each number in the base sequence
    // and count how many times it occurs in a row. Once we get to
    // a number that is different, we break out of the inner for
    // loop and append the count plus the value to the new sequence.
    for (var j = 0; j < sequence.length; j=k) {
      var counter = 1;
      for (var k = j+1; k < sequence.length; k++) {
        if (sequence[k] !== sequence[j]) break;
        else counter++;
      }
      newSeq += counter;
      newSeq += sequence[j];
      
      // We want to skip over the numbers we just counted (not including k,
      // since it was NOT a match by the time we get here)
    }
    
    // Set our base sequence equal to our new sequence and clear the
    // new sequence variable
    sequence = newSeq;
    newSeq = '';
  }
  
  return sequence;
}
