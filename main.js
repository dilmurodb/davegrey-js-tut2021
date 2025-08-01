// Scope
// var, let, const

// var - function scoped!!!
// let and const - block scoped!!!

// Legasy code uses var
var x = 1;
var x = 2;

let y = 3;
// let y = 4; Can not declare same variable twice using let
y = 4; // You can reassign the value of the variable declared using let

const z = 5;
// z = 10; You can not reassign value of the variable which was declared using const -> const = constant
// console.log(z);
// console.log(x);
// console.log(y);


// Global Scope
var a = 15;
let b = 20;
const c = 25;

// Local Scope - there are two type of local scope - Block and Function

// Black Scope
{
    let b = 10;
    console.log(b)
}

// Function Scope (We can put Block inside of a function and function inside of a function)

function myFunc() {
    const d = 50;
    
    {
        let c = 100;
        console.log(d);
    }
    console.log(c)
}

myFunc();
// console.log(b);
// console.log(c);

// Examples of Block code
let one = 2;
let two = 2;
if (one === two) {
    one + two;
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}