// Написать, функцию, которая принимает в качестве аргумента объект и выводит в
//  консоль все ключи и значения только собственных свойств.
//  Данная функция не должна возвращать значение.

const some = {
    
    food: "meat",
    color: "orange",
    animal: "tiger"
}

function checkSome(){
    for(let key in some){
        if(some.hasOwnProperty(key)){
            console.log(key + " " + some[key]);
        }
    }
}

checkSome(some);




