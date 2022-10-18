document.addEventListener('keydown', handler);
document.addEventListener('click', handler);



function handler(event) {
    console.log(event);
}



const ev = new PointerEvent('click');
document.dispatchEvent(ev);