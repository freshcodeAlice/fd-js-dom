/*
Використовуючи наявну колекцію з 5 кнопок, за натиснення на будь-яку кнопку виведіть на консоль "Клік по кнопці"

*/

function logger() {
    console.log('BUTTON CLICKED')
}

const btnCollection = document.querySelectorAll('button');

for (const btn of btnCollection) {
    btn.addEventListener('click', logger)
}

