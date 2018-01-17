var Queue = function(obj) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.obj = obj;
};

Queue.prototype.storage = {};
Queue.prototype.count = 0;
Queue.prototype.lowestCount = 0;
Queue.prototype.magnitude = 0;
Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
  this.magnitude++;
};
Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  this.magnitude--;
  if (this.magnitude < 0) {
    this.magnitude = 0;
  }
  return dequeued;
};
Queue.prototype.size = function() {
  return this.magnitude;
};

