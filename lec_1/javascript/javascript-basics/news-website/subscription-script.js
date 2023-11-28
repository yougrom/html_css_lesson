let page = document.querySelector('.page'); //находим на странице элемент с классом .page
let themeButton = document.querySelector('.theme-button'); //находим кнопку и сохраняем её в переменную.

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};
// onclick - мы указываем JavaScript, что делать, когда по этой кнопке кликнут.
// А та часть инструкции, которая идёт после onclick, называется обработчиком событий.
// Инструкции, которые выполняются после клика по кнопке, располагаются внутри фигурных скобок:


//Меняем текстовое содержимое элемента при подписке
let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');

form.onsubmit = function(evt) {
    // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  // Измените значение textContent на следующей строке
  message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};
