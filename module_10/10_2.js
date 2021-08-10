// Сверстайте кнопку, клик на которую будет выводить 
// данные о размерах экрана с помощью alert. 

const btn = document.createElement('button');

document.body.append(btn);
btn.textContent = 'Information about device';

btn.addEventListener('click', () => {
    alert('width: ' + window.screen.width + 'px', + 'height: ' + window.screen.height + 'px');
    alert('width screen without panel: ' + window.screen.availWidth + 'px', + 'height screen without panel: ' + window.screen.availHeight + 'px');
    alert('width browser: ' + window.outerWidth + 'px', + 'height brouser: ' + window.outerHeight + 'px');
    alert('width inner brouser: ' + window.innerWidth + 'px', + 'height inner brouser: ' + window.innerHeight + 'px');
    alert('width web-page: ' + document.documentElement.clientWidth + 'px', + 'height web-page: ' + document.documentElement.clientHeight + 'px');

})