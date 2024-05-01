// 1)  Write a program to print the factorial of every digit in the number, do not consider a digit if it is repeated.

// input: 335645
// output: 6 120 720 24 
num ="335645";
s=""
for(n of num){
    prod=true
    for(i=1;i<=n;i++){
        prod=prod*Number(i)
    }
    s=s+prod+" "
}
console.log(s);

let num1 = 5;
let factorial = 1;
let equation = "";

for (let i = 1; i <= num1; i++) {
    factorial *= i;
    equation += i;
    if (i < num1) {
        equation += "*";
    }
}

console.log(equation + "=" + factorial);


let n1 = 10;
let sum = 0;
let a = 0, b = 1;

for (let i = 0; i < n1; i++) {
    let c = a + b;
    a = b;
    b = c;

    if (c <= 1) {
        continue;
    }

    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(c); j++) {
        if (c % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        sum += c;
    }
}

console.log(sum);
