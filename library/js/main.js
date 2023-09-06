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
        position = 475 * index;
        wraperlel.style.left= -position + 'px'
        dotindex = index;
        dota(dotindex)
    })
})


const ArOne = document.querySelector('.arrow_one');
const ArTwo = document.querySelector('.arrow_two');

ArTwo.addEventListener('click', () => {
    if (position < (prepre.length - 1 )* 475) {
        position += 475 
        dotindex++;
    }
    else {
        position = (prepre.length - 1) * 475; 
        dotindex = prepre.length - 1;
    }
     
    wraperlel.style.left = -position + 'px'
   
    dota(dotindex)
})
ArOne.addEventListener('click', () => {
    if (position > 0) {
        position -= 475;
        dotindex--;
      } else {
        position = 0
        dotindex = 0
      }
    
      wraperlel.style.left = -position + 'px'
    
        dota(dotindex)
})

// слайдер в блоке фаворитес 

let block = document.querySelector('.books_for_my_life');
let clickBut = document.querySelectorAll('.label_season')[0];

clickBut.addEventListener('Click', () => {
    if (block.classList.contains('books_for_my_life')) {
        block.classList.add('fuckingslaw')
        block.classList.remove('green')
    } else {
        block.classList.add('green')
        block.classList.remove('fuckingslaw')
    }
})