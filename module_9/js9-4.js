// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. 
// В input можно ввести любое число. При клике на кнопку происходит следующее:

//  Если оба числа не попадают в диапазон от 100 до 300 или введено не число —
//  выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
//  Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch 
// по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.

function pageLoaded() {


const button = document.createElement('button');
const inputWidth = document.createElement('input');
const inputHeight = document.createElement('input');
const field = document.createElement('div');

inputWidth.setAttribute("placeholder", "enter something");
inputHeight.setAttribute("placeholder", "enter something");
button.setAttribute("type", "submit");
button.textContent = "BUTTON";


document.body.append(button);
document.body.append(inputWidth);
document.body.append(inputHeight);
document.body.append(field);

button.onclick = function setInputValue() {
    validateInput(inputWidth.value, inputHeight.value);
};

function validateInput(width, height) {
    if(
        width >= 100 &&
        height >= 100 &&
        height <= 300 &&
        width <= 300 &&
        !isNaN(width) &&
        !isNaN(height)
    ) {
        displayImage(width, height);
        field.innerHTML = "";
    } else {
        return (field.innerHTML ="limit must be from 100 to 300 for both fields");
    }
}

async function displayImage(width, height) {
    let response = await fetch(`https://picsum.photos/${width}/${height}`);
    if(response.ok) {
        let blob = await response.blob();
        let img = document.createElement('img');
        field.append(img);
        img.src = URL.createObjectURL(blob);
    } else {
        alert("error");
    }
}
}

document.addEventListener("DOMContentLoaded", pageLoaded);





