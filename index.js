const img = document.querySelector('.img');

const btnCollection = document.querySelectorAll('button');

for (const btn of btnCollection) {
    btn.addEventListener('click', ({target: {dataset}})=>{
        img.setAttribute('src', dataset.src);
    })
}