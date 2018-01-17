var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  extend(someInstance, queueMethods);
  someInstance.count = 0;
  someInstance.lowestCount = 0;
  someInstance.magnitude = 0;
  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.magnitude;
  }
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
