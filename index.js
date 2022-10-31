/* TODO:

Частина 1:
Динамічно створити картки юзерів з даними, що містяться в масиві userData
Приклад вигляду картки юзера:
https://pbs.twimg.com/media/EIopEQ6XYAEqzUk.jpg
(всі картки одночасно на екрані)

В html тільки <div id="root"></div>

Частина 2:
За натиснення на картку юзера картка має підсвітитися червоним бордером - картка "обрана"
Якщо обрати іншу картку, то з попередньої картки підсвітка знімається.
Тобто одночасно може бути обрана тільки одна картка.

*/

const root = document.querySelector('#root');

const cardArray = userData.map(user => createUserCard(user));

root.append(...cardArray);

/* TODO:
1. Refactor repeating code
2. Create image placeholder: first Letter of name + random color
3. Dont show image while it's downloading.

*/

function createUserCard(user){
      const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('avatar');

    const h2 = createElement('h2', {}, user.name);
    const p = createElement('p', {classNames: ['desc']}, user.description);
    const button = createElement('button', {}, 'Connect');
    const wrapper = createElement('div', {classNames: ['card-wrapper']}, img, h2, p, button);
    wrapper.addEventListener('click', getActiveCard);
    return wrapper;
}

/**
 * 
 * @param {String} type 
 * @param {Object} options 
 * @param {String[]} options.classNames
 * @param  {Node} children 
 */

function createElement(type, {classNames = []}, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}


function getActiveCard(event){
    const activeCard = document.querySelector('.active');
    if (activeCard === event.currentTarget) {
        return;
    }
    if(activeCard){
        activeCard.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
}