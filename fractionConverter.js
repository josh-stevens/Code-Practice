/*
Write a function that takes a number as its argument and returns a string that represents that
number’s simplified fraction. Whole numbers and mixed fractions should be returned as improper fractions.

Examples:

0.5   => "1/2"
3     => "3/1"
2.5   => "5/2"
2.75  => "11/4"
-1.75 => "-7/4"

*/

function fractionConverter (number) {
  var numArr = number.toString().split('.');
  
  // If there are no numbers after the decimal, return
  // the number over 1
  if (numArr[1] === undefined) {
    return numArr[0] + "/1";
  }
  
  // Find out if the fraction is in tenths, hundredths,
  // thousandths, etc.
  var denominator = Math.pow(10, numArr[1].length);
  
  // Find the commonDenominator
  var commonDenom = gcd(parseInt(numArr[1]), denominator);
  
  // Reduce the fraction
  var numerator = parseInt(numArr[1])/commonDenom;
  denominator = denominator / commonDenom;
  
  // Add (or subtract) the number before the decimal,
  // depending on if its negative or not
  if (numArr[0][0] === "-") {
    numerator = parseInt(numArr[0])*denominator - numerator;
  } else {
    numerator = parseInt(numArr[0])*denominator + numerator;
  }
  
  // Return numerator over denominator
  return numerator.toString() + "/" + denominator.toString();
}

// Euclid's algorithm for finding greatest common denominator
var gcd = function(a,b) {
  if(!b) return a;
  return gcd(b, a%b);
}
