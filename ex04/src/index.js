function sumFibonacci(num) {
  var fibArray = [1, 1];
  if (num === 1) {
    return 1;
  } else if (num < 1) {
    return 0;
  }
  for (var i = 2; i < num; i++) {
    fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
  }
  var oddNums = [];
  for (i = 0; i < num; i++) {
    if (fibArray[i] <= num && fibArray[i] % 2 != 0) oddNums.push(fibArray[i]);
  }
  var sum = 0;
  for (var i = 0; i < oddNums.length; i++) {
    sum += oddNums[i];
  }
  return sum;
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
