const form = document.querySelector('form');
const resultField = document.querySelector('#resultField');
const KOEFFICIENT = 36.6;

form.addEventListener('submit', submitHandler);

function submitHandler (event) {
    event.preventDefault();
    const {target: {amount: {value}}} = event;
    if(Number.isNaN(Number(value))) {
        resultField.textContent = 'Amount must be a number';
    } else {
        resultField.textContent = value * KOEFFICIENT;
    }
}



/*
Маємо input та article.
Зробити конвертер валют.
Користувач вводить в input число в долларах, при відправці форми в article вивести конвертовану суму в грн.

*/