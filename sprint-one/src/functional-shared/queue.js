var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  extend(someInstance, queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowestCount = 0;
  someInstance.magnitude = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
    this.magnitude++;
  },
  dequeue: function() {
    var dequeued = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    this.magnitude--;
    if (this.magnitude < 0) {
      this.magnitude = 0;
    }
    return dequeued;
  },
  size: function() {
    return this.magnitude;
  }
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
