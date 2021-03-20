function rangeOfNumbers(startN, endN) {
  if (startN > endN) {
    return "The starting number will always be less than or equal to the ending number";
  }
  if (startN == endN) {
    return [startN];
  }
  const myArray = rangeOfNumbers(startN, endN - 1);
  myArray.push(endN);
  return myArray;
}

console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;
