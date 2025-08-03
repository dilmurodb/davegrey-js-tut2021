// Objects
// Key - value pairs in curly braces

const myObj = { userName: "Dilmurod"}
console.log(myObj)
console.log(myObj.userName)

const anotherObject = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`
    }
}
console.log(anotherObject["beverage"]["afternoon"])
console.log(anotherObject.action())

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrooooom!"
    }
}

// Inheritence
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.engine = function() { return "Whoooosh!"};
car.doors = 4;
console.log(car);
console.log(car.wheels);
console.log(car.engine());
console.log(car.doors); 

const tesla = Object.create(car);
console.log(tesla.wheels)
console.log(tesla.engine())
tesla.engine = function() {
    return "Shhhhhh..."
};
console.log(tesla.engine());


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    // console.log(band[job])
    console.log(`On ${job}, it's ${band[job]}`)
}

// Destucturing objects

// const { guitar: myVariable, bass : myBass } = band;
// console.log(myVariable);
// console.log(myBass);

const { vocals, guitar, bass, drums } = band;
console.log(vocals);
console.log(guitar);
console.log(bass);
console.log(drums);

function sings({vocals}) {
    return `${vocals} sings!`
}
console.log(sings(band));