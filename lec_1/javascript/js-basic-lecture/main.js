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
  
