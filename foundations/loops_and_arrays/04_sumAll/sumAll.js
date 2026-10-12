const sumAll = function(num1, num2) {
  const isValid = (n) => typeof n === 'number' && Number.isInteger(n) && n > 0;

  if (!isValid(num1) || !isValid(num2)) {
    return "ERROR";
  }

  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  const count = max - min + 1;
  return (count * (min + max)) / 2;
};

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
