// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.

// Подсказка: получение данных из input. const value = document.querySelector('input').value;


function pageLoaded() {
   
    const input = document.createElement('input');
    const button = document.createElement('button');
    const field = document.createElement('div');
    
    
    document.body.append(input);
    document.body.append(button);
    document.body.append(field);
    
    input.setAttribute("placeholder", "enter something");
    button.setAttribute("type", "submit");
    button.textContent = "BUTTON";
    
    button.onclick = ()=> {
        checkValueInput;
    };
    
    function checkValueInput() {
        if(input.value <=10 && input.value>=1 && !isNaN(input.value) ) {
            xhrRequest(inputValue);
        } else {
            alert("error");
        }
    }
    
    function xhrRequest(inputValue) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `https://picsum.photos/v2/list?limit=${input.value}`);
        request.setRequestHeader('Content-type', 'application/json; charset-8');
        xhr.responseType = "json";
        xhr.send();
        xhr.onload = () => {
            if(xhr.status===200) {
                let xhrData = xhr.response;
                showImg(xhrData);
            }else {
                console.log("error");
            }
        };
    }
    
    function showImg(data) {
        let cards = "";
        data.forEach((item) => {
            const cardBlock = `<img 
                                src="${item.download_url}" 
                                class ="image" 
                                />`;
            cards = cards + cardBlock;
        });
        field.innerHTML = cards;
    }
}

 document.addEventListener('DOMContentLoaded', pageLoaded);

// function xhrRequest(inputValue) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://picsum.photos/v2/list?limit=${input.value}`);
//     xhr.responseType = "json";
//     xhr.send();
//     xhr.onload = () => {
//         if(xhr.status===200) {
//             let xhrData = xhr.response;
//             deployImg(xhrData);
//         }else {
//             console.log("error");
//         }
//     };
// }



    
    







