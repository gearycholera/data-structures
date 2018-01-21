var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var keyValue = [k, v];
  if (this._storage.get(index)) {
    this._storage.get(index).push(keyValue);
  } else {
    this._storage.set(index, bucket);
    this._storage.get(index).push(keyValue);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  var output;
  for (var i = 0; i < temp.length; i++) {
    if (temp[i][0] === k) {
      output = temp[i][1]; 
    } 
  }
  return output;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  for (var i = 0; i < temp.length; i++) {
    if (temp[i][0] === k) {
      temp.splice(i, 1);
    } 
  }
};

HashTable.prototype.size = function() {
  var count = 0;
  var i = 0;
  while (i < 8) {
    var temp = this._storage.get(i);
    if (temp !== undefined) {
      count += temp.length;
    }
    i++;
  }
  return count;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert: O(1)
// retrieve: O(n)
// remove: O(n);