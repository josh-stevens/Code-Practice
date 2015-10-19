// Write a function that takes as its input a string and returns an array of arrays as shown below
// sorted in descending order by frequency and then by ascending order by character.
// Example:
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

function characterFrequency (string) {
  var chars = [];
  
  // Count the characters
  
  for (var i = 0; i < string.length; i++) {
    var pFlag = false;
    currentChar = string.charAt(i);
    
    // IF character already exists in chars, increment
    // its count
    
    for (var j = 0; j < chars.length; j++) {
      if (chars[j].indexOf(currentChar) > -1) {
        chars[j][1] = chars[j][1] + 1;
        pFlag = true;
        continue;
      }
    }
    
    // IF character does not exist in chars, add tuple
    
    if (!pFlag) {
      chars.push([currentChar, 1]);
    }
  }
  
  // Sort the results
  
  for (var i = 0; i < chars.length; i++) {
    for (var j = 0; j < i; j++) {
      
      // IF the count is greater at index i, it goes before index j
      
      if (chars[i][1] > chars[j][1]) {
        var temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
      }
      
      // IF the count is equal at i and j, sort by letter
      
      if (chars[i][1] === chars[j][1]) {
        if (chars[i][0] < chars[j][0]) {
          var temp = chars[i];
          chars[i] = chars[j];
          chars[j] = temp;
        }
      }
      
    }
  }
  
  return chars;
}
