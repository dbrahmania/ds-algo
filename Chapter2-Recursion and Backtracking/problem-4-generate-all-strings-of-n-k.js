/**
 * Generate all the strings of length n drawn from 0...k-1
 */

const A = [0, 0];

function KstringGenerator(n, k) {
  if (n < 1) {
    console.log(A);
    return;
  } else {
    for (let i = 0; i < k; i++) {
      A[n - 1] = i;
      KstringGenerator(n - 1, k);
    }
  }
}

console.log(KstringGenerator(2, 3));
