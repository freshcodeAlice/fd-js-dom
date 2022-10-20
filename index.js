const [clsBtn, opnBtn] = document.querySelectorAll('button');

clsBtn.addEventListener('mouseover', switcher);
opnBtn.addEventListener('mouseover', switcher);

clsBtn.addEventListener('mouseleave', switcher);
opnBtn.addEventListener('mouseleave', switcher);

function switcher() {
    let tmp = clsBtn.textContent;
    clsBtn.textContent = opnBtn.textContent;
    opnBtn.textContent = tmp;
}