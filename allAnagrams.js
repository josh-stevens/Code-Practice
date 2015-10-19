// This function returns an array of all anagrams of a given string.
// Since it doesn't include duplicates, the returned array is a list of
// combinations, not permutations.
// The time complexity is O(n^2), since I used Array.slice() inside of a for loop.

function allAnagrams (string) {
  var permutations = [];
  var results = [];
  var recurse = function(acc, remainingLetters) {
    if(!remainingLetters.length) {
      acc = acc.join('');
      permutations.push(acc);
    }
    else {
      for(var i = 0; i<remainingLetters.length; i++) {
        var letter = remainingLetters[i];
        letter=letter.split('');
        var nextLetters = remainingLetters.slice(0,i) + remainingLetters.slice(i+1);
        recurse(acc.concat(letter), nextLetters);
      }
    }
  }
  recurse([], string);
  
  // remove duplicates
  for (var i = 0; i < permutations.length; i++) {
    if (results.indexOf(permutations[i]) === -1) {
      results.push(permutations[i]);
    }
  }
  return results;
}
