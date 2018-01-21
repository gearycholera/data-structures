var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    // create a NewNode
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      // if .next assigned .previous needs to point at the previous node
      // save list.tail into temp variable
      var temp = list.tail;
      list.tail = node;
      node.previous = temp;
      // list.tail.previous = temp variable
    }
    // if list is empty
    // head & tail becomes NewNode
    // else the current tails next property becomes the NewNode & NewNode becomes the tail
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else if (list.head !== undefined) {
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeTail = function() {
    if (list.head === null && list.tail === null) {
      return 'can\'t remove tail from empty list';
    } else {
      var oldTailValue = list.tail.value;
      var tempPrev = list.tail.previous;
      delete list.tail;
      list.tail = tempPrev;
      return oldTailValue;
    }
  };

  list.removeHead = function() {
    if (list.head === null && list.tail === null) {
      return 'can\'t remove head from empty list';
    } else {
      var oldHeadValue = list.head.value;
      var tempNext = list.head.next;
      delete list.head;
      list.head = tempNext;
      return oldHeadValue;
    }
    // if list empty return undefined
    // else find the current list.head and assign var oldHeadValue to store its list.head.value
    // find the current list.head.next and assign it to a different temp variable
    // delete current list.head
    // assign list.head to different temp variable
    // return oldHeadValue;
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
    // comments
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
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  // addToTail : O(1) constant time
  // removeHead : O(1) constant time
  // contains : O(n) linear time
 */
