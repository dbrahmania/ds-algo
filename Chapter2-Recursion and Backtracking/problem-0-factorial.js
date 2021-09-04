// factorial using Recursion

function fact(n) {
    if(n==0 || n == 1)
        return 1;
    else 
        return n*fact(n-1);
}

console.log(fact(3));
console.log(fact(10));