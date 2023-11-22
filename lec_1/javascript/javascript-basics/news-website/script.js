// Меню
let menu = document.querySelector('.menu');

menu.onclick = function () {
  menu.classList.toggle('menu-open');
  menu.classList.toggle('menu-close');
};

// Раскладка
let rowViewButton = document.querySelector('.row-view');
let tileViewButton = document.querySelector('.tile-view');
let newsList = document.querySelector('.news-list');

rowViewButton.onclick = function () {
  rowViewButton.classList.add('view-checked');
  tileViewButton.classList.remove('view-checked');
  newsList.classList.remove('list-tiles-view');
};

tileViewButton.onclick = function () {
  rowViewButton.classList.remove('view-checked');
  tileViewButton.classList.add('view-checked');
  newsList.classList.add('list-tiles-view');
};

// Кукис! Ом-ном-ном...
let cookies = document.querySelector('.cookies-agreement');
let cookiesButton = document.querySelector('.button');

cookiesButton.onclick = function () {
  cookies.classList.add('cookies-agreement-closed');
};
