/*
Маленький квадратик #box всередині великого діва .field
За натиснення на .field перемістити квадратик туди, куди було натиснуто.

Remaster:
Зелений #box має переміщатись рандомним чином, ми маємо курсором його наздоганяти.
Зробити поряд з полем секцію-каунтер.

За натиснення на поле, якщо курсор бувв межах зеленого box, збільшити рахунок на 1.
Якщо "промазав", то зменшити рахунок на 1.

в будь-якому разі перемістити box на нові координати

*/


const div = document.querySelector('.field');

div.addEventListener('click', clickHandler, true);

function clickHandler(event) {
    event.stopPropagation();
    if(event.currentTarget === event.target) {
        const box = event.target.children.box;
        box.style.left = `${event.clientX - (box.offsetWidth / 2)}px`;
        box.style.top = `${event.clientY - (box.offsetHeight / 2)}px`;
    }
}