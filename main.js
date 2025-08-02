// Arrays

const myArray = [];

// Add an elements to an array:
myArray[0] = "Dilmurod";
myArray[1] = 1001;
myArray[2] = true;

// Refer to an array:
console.log(myArray);

// Length property:
console.log(myArray.length)

// Last element in an array:
console.log(myArray[myArray.length - 1]);

// An element in an array by index number:
console.log(myArray[1]);

// Add an element to the end of an array:
myArray.push("school")
console.log(myArray);

// Delete an element from the end of an array:
const lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

// Add an element to the beginning of an array:
myArray.unshift(77);
console.log(myArray);

// Delete an element from the beginning of an array:
const firstItem = myArray.shift();
console.log(myArray);
console.log(firstItem);

let newArray = ["Dilmurod", 77, true];

// Delete element from array at any position - this method not recommended

// delete newArray[2];
// console.log(newArray);
// console.log(newArray[2]);

// Delete element from array at any position

// newArray.splice(1, 1);
// console.log(newArray);

// Delete element and replace with other element

// newArray.splice(0, 1, "Bukharov");
// console.log(newArray);

// splice() method also adds an element to an array

newArray.splice(1, 0, 88);
console.log(newArray);

// slice() method

let lettersArray = ["A", "B", "C", "D", "E", "F"];
// let slicedArray = lettersArray.slice(2);
// let slicedArray = lettersArray.slice(2, 5);
// console.log(slicedArray);

// reverse() method

// let reversedArray = lettersArray.reverse();
// console.log(reversedArray);

// join() method

// let joinedArray = lettersArray.join();
// console.log(joinedArray);

// concat() method

let arrayA = [1, 2, 3, 4];
let arrayB = [5, 6, 7, 8];
// let numbersArray = arrayA.concat(arrayB);
// console.log(numbersArray);

// spread operator (...)

let numbersArray = [...arrayA, ...arrayB];
console.log(numbersArray);

// Nested arrays

let nestedArrayOne = ['Bread', 'Water', 'Butter'];
let nestedArrayTwo = [['Apples', 'Cashews'], nestedArrayOne];
let nestedArrayThree = [nestedArrayTwo, ['Detergent', 'Soap']];

let nestedArray = [nestedArrayThree, ['Shampoo', 'Shave gel', 'Body wash']];
console.log(nestedArray[0][0][0][1]);