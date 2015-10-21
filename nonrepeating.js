// Given an arbitrary input string, return the first non-repeating character. 
// For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter (string) {
  for (var i = 0; i < string.length; i++) {
    var flag = false;
    for (var j = 0; j < string.length; j++) {
      if (i !== j && string[i] === string[j]) {
        flag = true;
      }
      
    }
    if (!flag) return string[i];
  }
  
  return "sorry";
}
