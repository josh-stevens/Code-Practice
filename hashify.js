// This will turn any string into an object, where every character is a key that points to the next character.
// The last character will be the key for the first character. When duplicates exist, they are grouped
// in an array.

String.prototype.hashify = function () {
  var newObj = {};
  for (var i = 0; i < this.length; i++) {
    var next = this[i+1] || this[0];
    if (newObj[this[i]]) {
      if (Array.isArray(newObj[this[i]])) {
        newObj[this[i]].push(next);
      } else {
        var tmp = newObj[this[i]];
        newObj[this[i]] = [];
        newObj[this[i]].push(tmp);
        newObj[this[i]].push(next);
      }
    } else {
      newObj[this[i]] = next;
    }
  }
  return newObj;
}

// Example output:
// var josh = "josh";
// josh.hashify() => {'j':'o', 'o':'s', 's':'h', 'h':'j'}
// var nums = "11234";
// nums.hashify() => {'1':['1', '2'], '2':'3', '3':'4', '4':'1'}
