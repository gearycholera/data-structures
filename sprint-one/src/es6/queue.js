class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;
    this.magnitude = 0;
  }
  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
    this.magnitude++;
  }
  dequeue() {
    var dequeued = this.storage[this.lowestCount];
    this.lowestCount++;
    this.magnitude--;
    if (this.magnitude < 0) {
      this.magnitude = 0;
    }
    return dequeued;
  }
  size() {
    return this.magnitude;
  }
}
