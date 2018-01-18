var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    // create a NewNode
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
    // if list is empty
    // head & tail becomes NewNode
    // else the current tails next property becomes the NewNode & NewNode becomes the tail
  };

  list.removeHead = function() {
    if (list.head === null && list.tail === null) {
      return undefined;
    } else {
      var newHeadValue = list.head.value;
      var tempNext = list.head.next;
      delete list.head;
      list.head = tempNext;
      return newHeadValue;
    }
    // if list empty return undefined
    // else find the current list.head and assign var newHeadValue to store its list.head.value
    // find the current list.head.next and assign it to a different temp variable
    // delete current list.head
    // assign list.head to different temp variable
    // return newHeadValue;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    if (list.tail.value === target) {
      return true;
    }
    return false;
    // first assign var currentNode to list.head
    // create a while loop (currentNode.next)
    // if currentNode.value = target
    // return true;
    // reassign currentNode = currentNode.next
    // end while loop
    // if tail.value = target 
    // return true;
    // return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
