document.addEventListener('click', clickHandler,{capture: true});
document.body.addEventListener('click', clickHandler, true);

const parent = document.querySelector('#parent');
parent.addEventListener('click', clickHandler, true);

const btn = document.querySelector('button');
btn.addEventListener('click', clickHandler, true);

function clickHandler(event) {
    console.log(event.currentTarget);
    if(event.currentTarget === document.querySelector('#parent')) {
        event.stopPropagation(); //Зупиняє занурення події
        console.log('Button is bisy');
    }
}


/*
Шлях події

1. Фаза занурення (Capture phase)
Подія стається на рівні ОС, передається браузеру, браузер "занурює" об'єкт по ланцюжку до того об'єкта, на якому подія спрацювала.

2. Фаза цілі (Target phase)
Об'єкт події дійшов до елемента, на якому подія сталась.

3. Фаза сплиття (Bubbling phase)
Об'єкт події "спливає" наверх до рівня браузера, попутно активуючі всі обробники події, які зустріне.

*/