"use strict";

let dinosaurs = ['tiranosaurus', 
                'triceratops', 
                'stegosaurus', 
                'brachiosaurus', 
                'pterodactyl', 
                'allosaurus', 
                'apatosaurus', 
                'dilophosaurus'
            ];
// доступ к элементам массива осуществляется по индексу
                console.log(dinosaurs[2]); // stegosaurus
                console.log(dinosaurs[0]); // tiranosaurus


// создание и изменение элементов массива
dinosaurs[0] = 'tyrannosaurus rex';
console.log(dinosaurs); // ["tyrannosaurus rex", "triceratops", "stegosaurus", "brachiosaurus", "pterodactyl", "allosaurus", "apatosaurus", "dilophosaurus"]

let dinosaursFirst = [];
dinosaursFirst[0] = 'tyrannosaurus rex';
dinosaursFirst[1] = 'triceratops';
dinosaursFirst[2] = 'stegosaurus';
dinosaursFirst[3] = 'brachiosaurus';
console.log(dinosaursFirst); // ["tyrannosaurus rex", "triceratops", "stegosaurus", "brachiosaurus"]

dinosaursFirst[10] = 'pterodactyl';
console.log(dinosaursFirst); // ["tyrannosaurus rex", "triceratops", "stegosaurus", "brachiosaurus", empty × 6, "pterodactyl"]


// разные типы данных в одном массиве
let dinosaursAndNumbers = ['tyrannosaurus rex', 10000, ['apatosaurus', 3.1234], 10];
console.log(dinosaursAndNumbers[2][1]); // 3.1234

// работаем с массивами 
// — работать с массивом помогают свойства и методы
//   — свойства — это переменные, которые хранят информацию о массиве
//   — методы — это функции, которые выполняют действия с массивом, то есть либо изменяет его либо возвращают новый массив.

// длина массива
let dinosaursLength = ['brachiosaurus', 'pterodactyl', 'tyrannosaurus rex', 'triceratops', 'stegosaurus'];
console.log(dinosaursLength.lenght); // 5
console.log(dinosaursLength[dinosaursLength.lenght - 1]); // stegosaurus


// добавление элементов в массив
// метод push добавляет элемент в конец массива
let animals = [];
animals.push('Cat');
animals.push('Dog');
animals.push('Cow');

console.log(animals); // ["Cat", "Dog", "Cow"]
console.log(animals.lenght); // 3
console.log(animals[animals.lenght - 1]); // Cow

animals[1] = 'Good Dog';
console.log(animals); // ["Cat", "Good Dog", "Cow"]
// запуск методов в программировании называется — вызовом метода
// при вызове метода Push происходит две вещи:
// 1. В массив добавляется элемент указанный в скобках
// 2. Метод задаёт новую длину массива

// метод unshift добавляет элемент в начало массива
animals.unshift('Lama');
console.log(animals); // ["Lama", "Cat", "Good Dog", "Cow"]

// удаление элементов из массива
// метод pop удаляет последний элемент массива

// сохраняем переменную
let lastAnimal = animals.pop();  
console.log(lastAnimal); // Cow
console.log(animals); // ["Lama", "Cat", "Good Dog"]

let lastAnimalNew = animal.pop();
console.log(lastAnimalNew); // Good Dog
console.log(animals); // ["Lama", "Cat"]

// не сохраняем переменную
console.log(animals.pop()); // Cat
console.log(animals); // ["Lama"]

// метод unshift добавляют элемент в начало массива
console.log(animals.unshift(lastAnimal));
console.log(animals); // ["Cow", "Lama"]

// метод shift удаляет первый элемент массива
let firstAnimal = animals.shift();
console.log(animals); // ["Lama"]
console.log(firstAnimal); // Cow

// методы unshift и shift добавляют и удаляют элементы с начала массива.
// методы push и pop добавляют и удаляют элементы с конца массива.


// объединение массивов 
let furryAnimals = ['Alpaca', 'Ring-tailed Lemur', 'Yeti'];
let scalyAnimals = ['Boa Constrictor', 'Godzilla'];
let furryAndScallyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScallyAnimals); // ["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla"]

// объединение больше двух массивов
let featheredAnimals = ['Macaw', 'Dodo'];
let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals); // ["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla", "Macaw", "Dodo"]

// поиск индекса элементов в массиве
let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
console.log(colors.indexOf('blue')); // 2
console.log(colors[2]); // blue

// простой способ получения последнего элемента массива
console.log(colors.length); // 6 - элементов массива всегда на одну позицию больше, чем длина массива
// последний элемент массива всегда находится на одну позицию меньше, чем длина массива
console.log(colors[colors.length - 1]); // purple
// мы попросили джаваскрипт вернуть элемент из нашего массива, который находится на позиции 5 (6 - 1) и он вернул нам элемент purple.

// поиск индекса элемента в массиве
console.log(colors.indexOf('purple')); // 5

// поиск индекса элемента, которого нет в массиве
console.log(colors.indexOf('pink')); // -1 - если элемента нет в массиве, то метод indexOf вернёт -1

// если элемент массиве встречается больше чем один раз, то метод indexOf вернёт индекс первого вхождения элемента в массиве метод индекс он вернёт индекс
