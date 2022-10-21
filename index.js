const root = document.querySelector('#root');

/*
Створити квадрат 100 на 100пкс і відобразити його на сторінці
(він має бути дитиною div#root)

*/


const square = document.createElement('div');
square.style.width = '100px';
square.style.height = '100px';
square.style.border = '1px solid black';


root.append(square);