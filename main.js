// User input

// alert("Hello World!");

// let myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

let userName = prompt("Please enter your name");
if (userName) {
    console.log(userName.length);
    console.log(userName.trim().length)
    console.log(userName.trim());
} else {
    console.log("You didn't enter your name!");
};
