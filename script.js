let wrapper = document.getElementById('wrapper');
let genbtn = document.getElementById('genbtn');
let copybtn = document.getElementById('copybtn');
let colorhead = document.getElementById('colorhead');

function generateColor() {
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#"+randomNumber.toString(16);
    wrapper.style.background = randomCode;
    colorhead.innerHTML = randomCode;
    copybtn.addEventListener('click',()=>{
        navigator.clipboard.writeText(randomCode);
    })
}

genbtn.addEventListener('click',generateColor);

generateColor();