module.exports = function() {
  this.f2c = function(fahrenheit) {
    let celsius = parseInt((fahrenheit - 32) * 5 / 9);
    return celsius;
  };
};
