"use strict";

prompt('What is your name?'); 
document.write('Hello, %username%');

// Исходные данные
var time = 3;
var speedofFirst = 12;
var speedofSecond = 14;

// Линейный Aлгоритм
var distanceOfFirst = speedofFirst * time;
var distanceOfSecond = speedofSecond * time;
var totalDistance = distanceOfFirst + distanceOfSecond;

console.log(totalDistance);


//Function

// Часть которая будет повторяться вне зависимости от исходных данных.
// внутри скобочек записываем то от чего наша функция зависит
// решение у нас абстрактно и мы можем пользоваться разными значениями
function.calculateTotalDistance(time, speedofFirst, speedofSecond) {
    // Aлгоритм
    var distanceOfFirst = speedofFirst * time;
    var distanceOfSecond = speedofSecond * time;
    var totalDistance = distanceOfFirst + distanceOfSecond;
    // то что выходит из функции записывается с помощью ключевого слово Return
    return totalDistance;
    // если функция ничего не возвращает она возвращает undefined
}
calculateTotalDistance(3, 12, 14);
  

//Покупка хлеба:
//Купи батон хлеба.Если будут яйца- купи десяток.

// Функция покупки хлеба
function buyABread(number) {
    return number;
}

//Флаг, который говорит,есть ли в магазине яйца
var eggsAreThere = true;
//Если есть яйца- купить десяток батонов,
if (eggsAreThere) {
    buyABread(10);
}

// если нет - достаточнои одного.
else{
    buyABread(1);
}

// Циклические алгоритмы
// Циклическийалгоритм:
// Почистить все апельсины на столе.

// Алгоритм
//1 взять апельсин со стола
//2 почистить его
//3 убрать в тарелку
//4 если есть еще апельсины — повторить

// рекурсия
var orangestLeft = 3;
// Алгоритм
function peelNextOrange() {
//1 взять апельсин со стола
    //2 почистить его
    //3 убрать в тарелку
    orangesLeft -= 1;
    //4 если есть еще апельсины — повторить
    if (orangesLeft > 0) {
        peelNextOrange(); // рекурсия - вызов функции из неё самой.
    }
}
peelNextOrange();
orangesLeft;


// Цикл — while

var orangestLeft = 3;
// Алгоритм
function peelNextOrange() {
//1 взять апельсин со стола
    //2 почистить его
    //3 убрать в тарелку
    //4 если есть еще апельсины — повторить
    while (orangesLeft > 0) {
        orangesLeft -= 1; // Цикл — повторяет действие до тех пор пока условиe - true.
    }
}
peelNextOrange();
orangesLeft;

