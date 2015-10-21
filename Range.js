var Range = function(start, end, step) {
 if ( start === undefined ) return null;
 this.start = start;
 
 if ( end === undefined ) {
   this.end = start;
 } else this.end = end;
 
 if ( start > end && step === undefined ) {
   this.step = -1;
 } else {
   this.step = step || 1;
 }
};

Range.prototype.size = function () {
  var count = 0;
  this.each(function(number) {
    count++;
  });
  return count;
};

Range.prototype.each = function (callback) {
 if ( this.step > 0 ) {
   for ( var i = this.start; i <= this.end; i = i + this.step ) {
     callback(i);
   }
 } else {
   for ( var i = this.start; i >= this.end; i = i + this.step ) {
     callback(i);
   }
 }
};

Range.prototype.includes = function (val) {
  var included = false;
  this.each(function(number){
    if(number===val) included = true;
  });
  return included;
};
