/**
 * Given an array of numbers, find out if the array is sorted or not using recursion
 * 
 * Base condition
 * 
 * n = 1 
 *  return n
 * 
 */

// 1st approach
function isSorted(arr) {
    if(arr.length === 1) {
        return true;
    } else {
        const a = arr.shift();
        return a < arr[0] && isSorted(arr);
    }
}

// 2nd approach
function isSorted2(arr, n) {
    if(n === 1) {
        return 1; 
    }
    return (arr[n-1] < arr[n-2]) ? 0: isSorted2(arr, n-1);
}

console.log(isSorted2([1,2,3,4,5,6,7,8,9], 9));