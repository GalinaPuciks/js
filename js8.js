// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let myMap = new Map();

myMap.set(1, 'a');
myMap.set(2, 'b');
myMap.set(3, 'c');

for (let entry of myMap) {
  console.log(entry);
}

for (let [key, value] of myMap) {
  console.log(value);
}

for(let key of myMap.keys()) {
    console.log(key); 
}

