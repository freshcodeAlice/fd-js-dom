
function clickHandler() {
    alert('Achievement unlocked')
}

const btn = document.querySelector('#first-btn');


btn.addEventListener('click', function(){
    console.log('BUTTON CLICKED')
});

function logger() {
    prompt('How old are you')
}

btn.addEventListener('click', logger)


btn.removeEventListener('click', logger)