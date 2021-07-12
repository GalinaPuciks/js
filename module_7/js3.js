// Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObj() {
    const empty = Object.create(null);
    console.log(empty);
}

