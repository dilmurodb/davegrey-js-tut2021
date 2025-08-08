// JavaScript Errors and Error Handling
"use strict"

// This creates a ReferenceError: 
// variable = "Dilmurod";
// console.log(variable);

// This creates a SyntaxError
// Object..create()

// This creates TypeError
// const userName = "Andrew";
// userName = "Annah";

const makeError = () => {
    try {
        // const userName = "Andrew"
        // userName = "Brandon"

        // This is customError
        // throw new customError("This is a custom error!");

        // This is genericError
        throw new Error("This is an error!");

    } catch (err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack)
    } finally {
        console.log("...finally!")
    }
}
makeError();


// CustomError function
// function customError(message) {
//     this.message = message;
//     this.name = "customeError";
//     this.stack = `${this.name}: ${this.message}`;
// }


// Let's understand how try catch block works

const createError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if ( i % 2 !== 0) {
                throw new Error("Odd number!")
            }
            console.log("Even number!")
        } catch (err) {
            console.error(err.message)
        } finally {
            console.log("...finally!")
            i++;
        }
    }
}

createError();