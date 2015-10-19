// Implement a Tree class with getClosestCommonAncestor and getAncestorPath functions.

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(child1, child2){
  
  // edge case
  if (child1 === child2 || this === child1) {
    return child1;
  }

  // edge case
  if (!this.isDescendant(child1) || !this.isDescendant(child2)) {
    return null;
  }
  
  // recursive case
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].isDescendant(child1) &&
    this.children[i].isDescendant(child2))
      return this.children[i].getClosestCommonAncestor(child1, child2)
  }

  // base case
  return this;
  
}

Tree.prototype.getAncestorPath = function(child, path){
  path = path || [];
  
  path.push(this);
  
  // base case
  if (this === child) {
    return path;
  }
  
  // recursive case
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].isDescendant(child) || 
        this.children[i] === child) {
      return this.children[i].getAncestorPath(child,path)
    }
  }
  
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
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

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
