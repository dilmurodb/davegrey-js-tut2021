// Code challenge

// let myName = "Dilmurodbukharov";
// let nameLength = myName.length;
// let maxRandomNumber = nameLength - 1;
// let randomNumber = Math.floor(Math.random() * nameLength);
// let randomLetter = myName.charAt(randomNumber)
// console.log(randomNumber)
// console.log(randomLetter)

let playerOne = 'paper';
let playerTwo = 'rock';

const result = playerOne === playerTwo 
? 'It is a tie!' : playerOne === 'paper' && playerTwo === 'scissors' 
? 'PlayerTwo wins!' : playerOne === 'scissors' && playerTwo === 'rock' 
? 'PlayerTwo wins!' : playerOne === 'rock' && playerTwo === 'paper' 
? 'PlayerTwo wins!' : 'PlayerOne wins!';
console.log(result)