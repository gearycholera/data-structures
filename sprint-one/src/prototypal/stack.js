var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    return popped;
  },
  size: function() {
    return this.count;
  }
};


