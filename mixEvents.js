/* 
 Make an eventing system mix-in that adds .trigger() and .on() to any input object.
 Caveats:
- mixEvents should return the original object it was passed after extending it.
- If we repeatedly call .on with the same event name, it should
continue to call the old function as well. That is to say, we can have multiple
listeners for an event.
- If obj.trigger is called with additional arguments, pass those to the
listeners.
- It is not necessary to write a way to remove listeners.
*/

var mixEvents = function(obj) {
  var events = {};

  obj.trigger = function (event) {
    args = [].slice.call(arguments, 1);
    if (!events[event]) return;
    for (var i = 0; i < events[event].length; i++) {
      events[event][i].apply(this, args);
    }
    
  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    if (!events[event]) events[event] = [callback];
    else events[event].push(callback);
  };
  return obj;
};
