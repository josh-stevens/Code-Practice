// Given a number n (represented as a binary number string), convert n to base 10.

function binaryToDecimal (n) {
  var result = 0;
  var multiplier = 1;
  for(var i = n.length-1; i >= 0; i--) {
    if(n[i] === '1') {
      result += multiplier;
    }
    multiplier *= 2;
  }
  
  return result;
}
