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
const box = document.querySelector('#box');
const score = document.querySelector('#score');

let scoreCount = 0;
updateScore();

div.addEventListener('click', clickHandler, true);

function clickHandler(event) {
    const {target, currentTarget} = event;
        if (currentTarget === target) {
            updateScore(-1);
        } else {
            updateScore(1);
        }
     box.style.left = `${getRandomCoordinates(currentTarget.offsetWidth)}px`;
     box.style.top = `${getRandomCoordinates(currentTarget.offsetHeight)}px`;
}

function updateScore(step = 0) {
    scoreCount += step;
    score.textContent = scoreCount;
}

function getRandomCoordinates(max){
    return Math.floor(Math.random() * max);
}