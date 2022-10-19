const DB = [
    './images/136acde59b8ec0fc271f534e3f5a6494.jpeg',
    './images/1617079715_51-p-oboi-priroda-vecher-53.jpg',
    './images/1622211351_27-oir_mobi-p-russkaya-priroda-priroda-krasivo-foto-28.jpg',
    './images/1623706543_34-oir_mobi-p-krasivaya-priroda-mira-priroda-krasivo-fot-35.jpg',
    './images/Живая-природа.jpg',
    './images/Desert_Electric.jpg'
];


const img = document.querySelector('.img');
const [prevBtn, nextBtn] = document.querySelectorAll('.slider-wrapper > .btn');

const slider = new Slider(DB);

function updateView(){
    img.setAttribute('src', slider.currentSlide);
}


const buttonHandler = (direction = 'next') => {
    return function(){
        slider.currentIndex = slider[direction];
        updateView();
    }
}

prevBtn.addEventListener('click', buttonHandler('prev'));

nextBtn.addEventListener('click', buttonHandler('next'));


updateView();