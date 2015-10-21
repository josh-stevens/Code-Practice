// Implement a queue using two stacks.

var Stack = function() {
  var storage = [];

  this.push = function(val){
    storage.push(val)
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val){
    inbox.push(val)
  };

  this.dequeue = function(){
    var size = inbox.size();
    for (var i = 0; i < size; i++) {
      outbox.push(inbox.pop());
    }
    var result = outbox.pop();
    size = outbox.size();
    for (var i = 0; i < size; i++){
      inbox.push(outbox.pop());
    }
    return result;
  };

  this.size = function(){
    return inbox.size();
  };
};
