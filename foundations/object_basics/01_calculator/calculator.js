const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(...args) {
  return args.reduce((acc, val) => acc + val, 0);
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
