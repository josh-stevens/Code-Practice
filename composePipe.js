// Implement compose and pipe functions.

// Compose should return a function that is the composition of a list of functions of arbitrary
// length. Each function is called on the return value of the function that follows.
// You can think of compose as moving right to left through its arguments.

// Pipe composes a series of functions and returns the resulting function. Each function is called
// on the return value of the preceding function.
// You can think of pipe as moving left to right through its arguments.

var compose = function(){
  var args = arguments;
  return function(result) {
    for (var i=args.length-1; i>=0; i--) {
      result = args[i](result);
    }
    return result;
  };
};

var pipe = function(){
  var args = arguments;
  return function(result) {
    for (var i=0; i < args.length; i++) {
      result = args[i](result);
    }
    return result;
  };
};
