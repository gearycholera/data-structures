var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  size: function() {
    return this.count;
  }
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

