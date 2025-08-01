// Functions

// Methods = Built-in Functions!
let userName = "Dilmurod";
userName.toLowerCase() // Built-in function - Method
Math.random() // Built-in function - method

// Function Declaration Syntax:

function sum() {
    return 2 + 2;
};

console.log(sum());

function sumNum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
};

console.log(sumNum(3));

function getUserNameFromEmail (email) {
    return email.slice(0, email.indexOf("@"))
}

console.log(getUserNameFromEmail("userName@yahoo.com"))

// Anonymus Functions
const multiplyNumbers = function (a, b, c) {
    return a * b * c;
}

console.log(multiplyNumbers(2, 3, 4))

// Arrow functions
const subtractNumbers = (x, z) => {
    return x - z;
}
console.log(subtractNumbers(10, 5))

const toProperCase = (userName) => {
    return userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
};
console.log(toProperCase("dilmurOD"))
