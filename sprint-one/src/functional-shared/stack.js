var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var popped = this.storage[this.count - 1];
    delete this.storage[this.count];
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

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

