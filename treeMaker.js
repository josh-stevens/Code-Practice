var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node);
}
treeMaker.methods.contains = function(value){
  if (this.value === value) {
    return true;
  }

  for (var child = 0; child < this.children.length; child++) {
    if(this.children[child].contains(value)) {
      return true;
    }
  }
  return false;
}
