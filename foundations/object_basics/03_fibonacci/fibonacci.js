const fibonacci = function(num) {
  if (typeof num !== 'number' || !Number.isFinite(num) || num <= 0) {
    return "OOPS";
  }

  if (num === 1 || num === 2) {
    return 1;
  }

  let prev = 1;
  let curr = 1;

  for (let i = 3; i <= num; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
