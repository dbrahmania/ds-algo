// print the number backwords using recursion

function print(n) {
    // breaking condition
    if(n === 0) {
        return;
    } else {
        console.log(n);
        return print(n-1);
    }
}

print(10);