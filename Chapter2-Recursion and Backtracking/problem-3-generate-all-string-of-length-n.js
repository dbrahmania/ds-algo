/**
 * Generate all strings of n-bit;
 * 
 * @param {array of numbers} arr 
 * @param {length of array} n 
 * @returns all strings of length n
 */
const A = [0,0,0,0]
function stringGenerator(n) {
    if(n < 1) {
        console.log(A);
    } else {
        A[n-1]=0;
        stringGenerator(n-1);
        A[n-1] = 1;
        stringGenerator(n-1);
    }
}

// example: [a,b] => aa,ab,ba,bb

console.log(stringGenerator(4));