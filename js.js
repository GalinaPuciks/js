// Напишите программу, которая работала бы следующим образом: в prompt 
// вводится значение. С помощью унарного плюса (арифметический оператор) 
// необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит 
// ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную 
// проверку для этого значения.

//done

let x = + (prompt('insert eny value'));
console.log(typeof(x));

if(x == "") {
  console.log("error");
}
else if((typeof(x) == 'number' && !isNaN(x) && x%2 == 0)) {
  console.log('odd');
} 
else if(x%2 != 2) {
  console.log('even');
} 


// let a = +prompt("vvedite chislo");
// if(isNaN(a) && a == "string") {
//     console.log("chto-to netak");
// } else if (a%2==0){
//     console.log("vi vveli chetnoe chislo")
//   } else {
//     console.log("vi vveli nechetnoe chislo");


//done
       
