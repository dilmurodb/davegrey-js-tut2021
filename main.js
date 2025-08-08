// JavaScript Classes

class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType,
        this.size = pizzaSize,
        this.crust = "original",
        this.toppings = [];
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.crust} crust ${this.type} pizza.`)
    }
};

const myPizza = new Pizza("pepperoni", "small");
// myPizza.type = "supreme" // Not the right way - not recommneded
myPizza.pizzaCrust = "thin"
myPizza.bake();
console.log(myPizza.size)