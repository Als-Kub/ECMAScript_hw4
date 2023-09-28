"use strict";

// ---Задание 3. "Изменение стиля элемента через заданное время"---
// Напишите функцию changeStyleDelayed, которая принимает идентификатор
// элемента и время задержки (в миллисекундах) в качестве аргументов. Функция
// должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет
// стиль элемента с id 'myElement'

const myElement = document.querySelector("#myelement");

function changeStyleDelayed(myElement, delay) {
  setTimeout(() => {
    myElement.style.backgroundColor = "orange";
  }, delay);
}

changeStyleDelayed(myElement, 2000);
