var BinarySearchTree = function(value) {
  var bst = {};
  bst.value = value;
  bst.toggle = false;
  bst.left = null;
  bst.right = null;
  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var tempBST = BinarySearchTree(value);
  var recursion = function(tree) {
    if (tempBST.value < tree.value) {
      if (tree.left === null) {
        tree.left = tempBST;
      } else {
        recursion(tree.left);
      }
    }
    if (tempBST.value > tree.value) {
      if (tree.right === null) {
        tree.right = tempBST;
      } else {
        recursion(tree.right);
      }
    }
  };
  recursion(this);
};

bstMethods.contains = function(target) {
  var target = target;
  var isFound = false;
  var recursion = function(tree) {
    if (target === tree.value) {
      isFound = true;
    }
    if (target > tree.value && tree.right !== null) {
      recursion(tree.right);
    }
    if (target < tree.left && tree.left !== null) {
      recursion(tree.left);
    }
  };
  recursion(this);
  return isFound;
};

bstMethods.depthFirstLog = function(callback, tree) {
  var count = 0;
  var recursion = function(tree) {
    callback(tree.value);
    // if (tree.left === null && tree.toggle === false) {
    //   tree.toggle = true;
    // }
    // if (tree.right === null && tree.toggle === false) {
    //   tree.toggle = true;
    // }
    if (tree.left !== null && tree.left.toggle === false) {
      tree.toggle = true;
      recursion(tree.left);
    }
    if (tree.right !== null && tree.right.toggle === false) {
      tree.toggle = true;
      recursion(tree.right);
    }
    count++;
  };
  recursion(this);
};