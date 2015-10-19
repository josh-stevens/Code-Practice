// Implement the bind() function, which accepts a function and a context as its arguments.
// The context argument should override an existing context that the function is defined in.
// Your bind function should return the passed in function.

var bind = function(func, context){
  var args = [].slice.call(arguments, 2);
  return function(){
    newArgs = args.slice(0);
    newArgs = newArgs.concat([].slice.call(arguments));
    return func.apply(context, newArgs);
  }
}; 

// Now implement bind as a method of the Function prototype.

Function.prototype.bind = function(context) {
  var args = [].slice.call(arguments, 1);
  fn = this;
  return function(){
    newArgs = args.slice(0);
    newArgs = newArgs.concat([].slice.call(arguments));
    return fn.apply(context, newArgs);
  }
};
