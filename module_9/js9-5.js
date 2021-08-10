// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input 
//можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, 
// а GET-параметр limit — это введённое число второго input. 

const titleNumberPage = document.createElement('h1');
const titleLimitPage = document.createElement('h1');

const numberPage = document.createElement('input');
const limitPage = document.createElement('input');
const btn = document.createElement('button');
const field = document.createElement('div');

document.body.append(titleLimitPage);
document.body.append(titleNumberPage);
document.body.append(numberPage);
document.body.append(limitPage);
document.body.append(btn);
document.body.append(field);

numberPage.setAttribute("placeholder", "enter number 1-10");
limitPage.setAttribute("placeholder", "enter limit 1-10");
btn.textContent = "request";
titleNumberPage.textContent = "номер страницы";
titleLimitPage.textContent = "лимит";

btn.onclick = () => {
    validateInput(limitPage.value, numberPage.value);
};

function validateInput(page, limit) {
    if(page>=1 && page<=10 && limit >=1 && limit <=10 && !isNaN(page) && !isNaN(limit)) {
        imageDeploy(page, limit);
        field.innerHTML ="";
    } else if((limit < 1 || limit>10) && page>= 1 && page<=10) {
        return (field.innerHTML ="Check page number, must be 1-10");
    } else if ((page < 1 || page >10) && limit >= 1 && limit <=10) {
        return(field.innerHTML ="Check limit, must be 1-10")
    } else {
        return(field.innerHTML ="Check page and limit, must be 1-10")
    }
}

async function imageDeploy(page, limit) {
    let response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    if (response.ok) {
        let content = await response.json();
        let urls = content.map((x) => x.download_url);

        createImages(urls);

        if(urls.length > 0) {
            localStorage.setItem("imagesKey", JSON.stringify(urls));
        }
    
    } else {
        alert("Error HTTP:" + response.status);
    }
}

function createImages(urls) {
    for(url of urls) {
        let image = document.createElement("img");
        image.style.width = "50%";
        image.style.height = "50%";
        image.src = url;
        field.append(image);
    }
}