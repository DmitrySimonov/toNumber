if (!Array.prototype.first) {
  Array.prototype.toNumber = function(string) {
     let result = parseInt(this.concat());
     return result;
  }
}
