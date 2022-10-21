const root = document.querySelector('#root');

const array = [
    './images/136acde59b8ec0fc271f534e3f5a6494.jpeg',
    './images/1617079715_51-p-oboi-priroda-vecher-53.jpg',
    './images/1622211351_27-oir_mobi-p-russkaya-priroda-priroda-krasivo-foto-28.jpg',
    './images/Живая-природа.jpg',
    './images/Desert_Electric.jpg'
]
function createImage(imgSrc) {
    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    img.classList.add('img');
    return img;
}

/*
Відобразити 5 картиночок всередині div#root
*/

const imageArray = array.map(createImage);
root.append(...imageArray);