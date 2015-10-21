// Implement a function that finds the longest palindrome in a given string.
// For example, in the string “My dad is a racecar athlete”, the longest palindrome
// is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the
// above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

function longestPalindrome (string) {
  var substrings = [];
  var longest = '';
  
  // Build an array of all substrings
  
  for (var i = 0; i < string.length; i++) {
    for (var j = i+1; j <= string.length; j++) {
      substrings.push(string.slice(i,j));
    }
  }
  
  // For each substring, reverse it. If it's still the same string,
  // it's a palindrome. Check to see if it's the longest so far.
  
  for (var i = 0; i < substrings.length; i++) {
    var reverseString = substrings[i].split('').reverse().join('');
    if (reverseString === substrings[i]) {
      if (reverseString.length > longest.length) {
        longest = reverseString;
      }
    }
  }
  
  return longest;
}
