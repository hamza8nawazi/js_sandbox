//q1plus any 3 nos
function num(x,y,z){
    return x+y+z
}
console.log(num(2,3,4))

//q2table of any no.

function table(num,limit){
    for (let i=1; i<=limit ;i++){
        console.log(`${num} x ${i} = ${num*i}`);

    }
}
table(2,10)

//q3write a function which receives an array and print

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let arr = [1, 2, 3, 4, 5];
printArray(arr);

//q4Write a function which calculates factorial of number

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); 
