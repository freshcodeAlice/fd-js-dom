/*
Динамічне створення елементу

1. Створити об'єкт елемента і отримати адресу цього об'єкта в пам'яті
2. Доєднати елемент до батьківського (приаппендити)

*/

const element = document.createElement('h1');
element.textContent = 'Hello, DOM';
document.body.append(element);