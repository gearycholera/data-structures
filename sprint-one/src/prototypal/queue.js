var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowestCount = 0;
  someInstance.magnitude = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.magnitude++;
  },
  dequeue: function() {
    this.magnitude--;
    if (this.magnitude < 0) {
      this.magnitude = 0;
    }
  },
  size: function() {
    return this.magnitude;
  }
};