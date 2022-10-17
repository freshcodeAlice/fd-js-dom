/*
Використовуючи наявну колекцію з 5 кнопок, за натиснення на будь-яку кнопку виведіть на консоль "Клік по кнопці"

*/

function logger(event) {
   console.log(event.target);
   const currentBtn = event.target;
   currentBtn.disabled = true;
   currentBtn.removeEventListener('click', logger);
}

const btnCollection = document.querySelectorAll('button');

for (const btn of btnCollection) {
    btn.addEventListener('click', logger)
}

