// Написать функцию, которая принимает в качестве аргументов строку и объект,
//  а затем проверяет есть ли у переданного объекта 
// свойство с данным именем. Функция должна возвращать true или false.
// const coffe = {
//     sort: "black",
//     saturation: "medium",
//     milk: true
// }

// const drink = "lemon";

// function checkProperty(string, obj) {
//     if(string in obj){
//         console.log(true);
//     } else{
//         console.log(false);
//     }
// }

// checkProperty(drink, coffe);

const coffe = {
    sort: "black",
    saturation: "medium",
    milk: true
}

const drink = "lemon";

function checkProperty(string, obj) {
    if(obj.hasOwnProperty(drink)){
        console.log(true);
    } else {
        console.log(false);
    }
 
}

checkProperty(drink, coffe);