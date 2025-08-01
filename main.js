// Loops

let myNumber = 0;

while (myNumber < 50) {
    // console.log(myNumber);
    // myNumber = myNumber + 1;
    // myNumber++;
    myNumber += 5
};

let anotherNumber = 2;
do {
    anotherNumber += 2;
    // console.log(anotherNumber)
} while (anotherNumber < 20);

let personName = "Dilmurod Bukharov";
for (let i = 0; i < personName.length; i++) {
    // console.log(`${i}: ${personName.charAt(i)}`)
}

// let personAddress = 'Slippery rock';
// let counter = 0;

// while(true) {
//     let addressLetter = personAddress[counter];
//     console.log(addressLetter);
//     if (addressLetter === 'y') break;
//     counter++;
// }

let word = "Great"
let index = 0;

while(index <= 3) {
    let wordLetter = word[index];
    // console.log(wordLetter);
    if (index === 1) {
        index += 2;
        continue;
    }
    if (wordLetter === 'e') break;
    index ++
}
console.log(index);


let sentence = "Central Asia’s landscape can be divided into the vast grassy steppes of Kazakhstan in the north and the Aral Sea drainage basin in the south. About 60 percent of the region consists of desert land, the principal deserts being the Karakum, occupying most of Turkmenistan, and the Kyzylkum, covering much of western Uzbekistan. Most of the desert areas are unsuitable for agricultural use except along the margins of the Amu Darya and Syr Darya river systems, which wind their way northwestward through Kyrgyzstan, Tajikistan, and eastern Uzbekistan and Turkmenistan after rising in mountain ranges to the south and east. Those two major rivers drain into the Aral Sea and provide most of the region’s water resources, though northern Kazakhstan is drained by rivers flowing north into Russia. On the east and south Central Asia is bounded by the western Altai and other high mountain ranges extending into Iran, Afghanistan, and western China."

let counter = 0;
let sentenceArray = sentence.toLowerCase().split(' ')
console.log(sentenceArray)
let theArray = []
while (counter < sentenceArray.length) {
    if (sentenceArray[counter] === 'the') {
        theArray.push(sentenceArray[counter])
    }
    counter++;
}
console.log(theArray);
console.log(theArray.length)
// while (counter < sentence.length) {
    
// }
