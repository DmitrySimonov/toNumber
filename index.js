if (!Array.prototype.toNumber) {
  Array.prototype.toNumber = function(string) {
     let result = parseInt(this.concat());
     return result;
  }
}
