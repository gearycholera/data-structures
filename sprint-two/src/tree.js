var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.toggle = false;
  newTree.parent = null;
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tempTree = new Tree(value);
  this.children.push(tempTree);
  tempTree.parent = this;
};

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i].value === this.value) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
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

treeMethods.depthFirstLog = function(callback) {
  var recursiveDepth = function(tree) {
    if (tree.value !== undefined) {
      callback(tree.value);
    }
    for (var i = 0; i < tree.children.length; i++) {
      if (tree.children[i].toggle === false) {
        recursiveDepth(tree.children[i]);
        tree.children[i].toggle = true;
      }
    }
  };
  recursiveDepth(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
  // addChild = O(1) - constant
  // contains = O(n) - linear
 */
