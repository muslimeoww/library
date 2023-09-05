document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector(".header").classList.toggle("open")
    })
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burg_butt").addEventListener("click", function () {
        document.querySelector(".header").classList.toggle("open")
    })
});

document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithUnMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithUnMenu = true;
});

document.body.addEventListener('click', event => {
    if (event._isClickWithUnMenu) return;
    document.querySelector(".header").classList.remove("open")
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav_men").addEventListener("click", function () {
        document.querySelector(".header").classList.toggle("open")
    })
});

// Слайдер 
const wraperlel = document.querySelector('.wraper_lele');
const butonslide = document.querySelectorAll('.suck');
const prepre = document.querySelectorAll('.pre');

let position = 0;
let dotindex = 0;

const nextSlide = () => {
    position += 475
    sliderLine.style.left = -position + 'px'
}

const dota = (index) => {
for (let dot of butonslide) {
    dot.classList.remove('button_one')
}
butonslide[index].classList.add('button_one')
}

prepre.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 475 * (index - 1);
        wraperlel.style.left= -position + 'px'
        dotindex = index;
        dota(dotindex)
    })
})

