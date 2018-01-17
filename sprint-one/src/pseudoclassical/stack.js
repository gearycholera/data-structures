var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.storage = {};
Stack.prototype.count = 0;
Stack.prototype.push = function(value) {
  this.count++;
};
Stack.prototype.pop = function() {
  this.count--;
  if (this.count < 0) {
    this.count = 0;
  }
};
Stack.prototype.size = function() {
  return this.count;
};
