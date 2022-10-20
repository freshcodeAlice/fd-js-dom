const btnCollection = document.querySelectorAll('section > button');


for (const btn of btnCollection) {
    btn.addEventListener('click', clickHandler)
}

function clickHandler ({target, target: {parentNode, dataset: {color}}} ) {
   parentNode.style.backgroundColor = color;
}