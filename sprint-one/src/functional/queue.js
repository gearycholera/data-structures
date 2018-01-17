var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var lowestCount = 0;
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
    size++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[lowestCount];
    delete storage[lowestCount];
    lowestCount++;
    size--;
    if (size < 0 ) {
      size = 0;
    }
    return dequeued;

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
