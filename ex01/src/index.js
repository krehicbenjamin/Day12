
function myRecursion(arr, n) {
    var sum = 0;
    if (n <= 0) {
        return 0;
    } 
    sum = myRecursion(arr, n - 1) + arr[n - 1];
    return sum;
}

console.log(myRecursion([1, 2, 3, 4], 2));
console.log(myRecursion([1, 2, 3, 4], 3));
console.log(myRecursion([1, 2, 3, 4, 5, 6], 5));
module.exports = myRecursion;