// Write a function that takes up to four digits of a phone number, and returns a list
// of all of the words that can be written on the phone with that number. (You should
// return all permutations, not only English words.)

function telephoneWords (digitString) {
  var results = [];
  var numArray = digitString.split('');
  var digits = {
    0:'0',
    1:'1',
    2:'ABC',
    3:'DEF',
    4:'GHI',
    5:'JKL',
    6:'MNO',
    7:'PQRS',
    8:'TUV',
    9:'WXYZ'
  };
  
  var firstNum = numArray.shift();
  
  for (var i = 0; i < digits[firstNum].length; i++){
    results.push(digits[firstNum][i]);
  }
  
  var recurse = function(remainder, resultsSoFar) {
    var newResults = [];
    
    if (remainder.length === 0) {
      return resultsSoFar;
    }
    
    var nextNum = remainder.shift();
    
    for (var i = 0; i < resultsSoFar.length; i++) {
      for (var j = 0; j < digits[nextNum].length; j++) {
        newResults.push(resultsSoFar[i] + digits[nextNum][j]);
      }
    }
    
    return recurse(remainder, newResults);
  }
  
  return recurse(numArray, results);
}
