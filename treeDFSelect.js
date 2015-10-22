// Implement a depth-first method on a Tree class.
// DFSelect accepts a filter function, calls that function on each of the nodes in Depth First
// order, and returns a flat array of node values of the tree for which the filter returns true.

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter, prevResult, prevDepth) { 
  var results = prevResult || [];
  var depth = prevDepth+1 || 0;
  
  if(filter(this.value, depth)){
    results.push(this.value);
  }

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].DFSelect(filter, results, depth);
  }
  
  return results;
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
