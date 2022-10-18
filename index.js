/*
Зробити дів розмірами 200 на 200, кольором фона і бордером
Поряд з ним зробити невеликий елемент з бордером, де відображати координати натиснення всередині діва.



*/

const div = document.querySelector('.field');

div.addEventListener('click', (event) => {
    console.log(event.clientX, event.clientY);
    const section = document.querySelector('#coodinats');
    section.innerText = `X: ${event.clientX} \n Y: ${event.clientY}`;
})