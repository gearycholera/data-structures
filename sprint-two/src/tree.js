var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tempTree = new Tree(value);
  this.children.push(tempTree);
  
};

treeMethods.contains = function(target) {
  var isFound = false;
  var recursiveContains = function(tree) {
    if (tree.value === target) {
      isFound = true;
    } else if (tree.children.length > 0) {
      for (var i = 0; i < tree.children.length; i++) {
        recursiveContains(tree.children[i]);
      }
    }
  };
  recursiveContains(this);
  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
  // addChild = O(1) - constant
  // contains = O(n) - linear
 */
