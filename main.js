// Loops

let myNumber = 0;

while (myNumber < 50) {
    console.log(myNumber);
    // myNumber = myNumber + 1;
    // myNumber++;
    myNumber += 5
};

let anotherNumber = 2;
do {
    anotherNumber += 2;
    console.log(anotherNumber)
} while (anotherNumber < 20);

let personName = "Dilmurod Bukharov";
for (let i = 0; i < personName.length; i++) {
    console.log(`${i}: ${personName.charAt(i)}`)
}

let personAddress = 'Slippery rock';
let counter = 0;

while(true) {
    let addressLetter = personAddress[counter];
    console.log(addressLetter);
    if (addressLetter === 'y') break;
    counter++;
}

let word = "Great"
let index = 0;

while(index <= 3) {
    let wordLetter = word[index];
    console.log(wordLetter);
    if (index === 1) {
        index += 2;
        continue;
    }
    if (wordLetter === 'e') break;
    index ++
}
console.log(index);