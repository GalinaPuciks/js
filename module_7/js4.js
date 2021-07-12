// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
//  Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. П
// осчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

function Devices(model, power) {
    this.model = model;
    this.power = power;

    this.turnOn = function() {
        console.log(`${this.model} is turn on and have ${this.power} power`);
    }

    this.turnOff = function() {
        console.log(`${this.model} is turn off and have no power`);
    }
}

function Tablet(weight, price, model, power) {
    this.weight = weight;
    this.price = price;
    this.model = model;
    this.power = power;

    this.showDescription = function (){
        console.log(`weight: ${this.weight} price: ${this.price} model: ${this.model} power: ${this.power}`);
    }
}

function Phone(weight, price, model, power) {
    this.weight = weight;
    this.price = price;
    this.model = model;
    this.power = power;

    this.showDescription = function (){
        console.log(`weight: ${this.weight} price: ${this.price} model: ${this.model} power: ${this.power} `);
    }
}

Phone.prototype = new Devices;
Tablet.prototype = new Devices;

const somePhone = new Phone(100, "400$", "Iphone10", 200);
const someTablet = new Tablet(200, "600$", "Samsung", 300);

somePhone.turnOff();
someTablet.turnOn();

somePhone.showDescription();
somePhone.showDescription();

console.log(someTablet);