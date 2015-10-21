// Implement a function that checks a linked list for a cycle

var hasCycle = function(linkedList){
  var slow = linkedList;
  var fast = linkedList;
  var pause = true;

  while(fast = fast.next) {
    if (fast === slow) { return true; }
    slow = pause ? slow : slow.next;
    pause = !pause;
  }

  return false;
};
