// Переписать консольное приложение из предыдущего юнита на классы.

class Devices{
    constructor(model, power) {
        this.model = model;
        this.power = power;
        }
        turnOn(){
            console.log(`${this.model} is turn on and have ${this.power} power`);
        }
    
        turnOff(){
            console.log(`${this.model} is turn off and have no power`);
        }
    }


class Tablet extends Devices{
    constructor(weight, price, model, power) {
        super(power, model);
        this.weight = weight;
        this.price = price;
        this.model = model;
        this.power = power;
        }
        showDescription(){
            console.log(`weight: ${this.weight} price: ${this.price} model: ${this.model} power: ${this.power}`);
        }
    }


class Phone extends Devices{
    constructor(weight, price, model, power) {
        super(power, model);
        this.weight = weight;
        this.price = price;
        this.model = model;
        this.power = power;
        
        }
        showDescription(){
            console.log(`weight: ${this.weight} price: ${this.price} model: ${this.model} power: ${this.power} `);
        }
    }



const somePhone = new Phone(100, "400$", "Iphone10", 200);
const someTablet = new Tablet(200, "600$", "Samsung", 300);

somePhone.turnOff();
someTablet.turnOn();

somePhone.showDescription();
somePhone.showDescription();

console.log(someTablet);