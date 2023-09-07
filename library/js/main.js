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

const block = document.querySelectorAll('.books_for_my_life');
const clickBut = document.querySelectorAll('.label_season');


clickBut[1].addEventListener('click',() => {
    for (let item of block){
    item.classList.add('display-noneee');
    }
    
        block[1].classList.remove('display-noneee')
        
    
}
)
clickBut[2].addEventListener('click',() => {
    for (let item of block){
    item.classList.add('display-noneee');
    }
    
        block[2].classList.remove('display-noneee')
        
    
}
)
clickBut[3].addEventListener('click',() => {
    for (let item of block){
    item.classList.add('display-noneee');
    }
    
        block[3].classList.remove('display-noneee')
        
    
}
)
clickBut[0].addEventListener('click',() => {
    for (let item of block){
    item.classList.add('display-noneee');
    }
    
        block[0].classList.remove('display-noneee')
        
    
}
)
// Менюшка беленькая с логином и регистером
const ilovecats = document.querySelector('.user');
const ilovedogs = document.querySelector('.profile_menu');


ilovecats.addEventListener('click', (event) => {
    ilovedogs.classList.toggle('poyvla')
    event.stopPropagation();
})
  
window.onclick = function(event) { 
    if (!event.target.matches('.profile_menu')) {
        let dropdowns = document.getElementsByClassName("profile_menu");
        for (let dropdown of dropdowns) {
            if (!dropdown.classList.contains('poyvla')) {
                dropdown.classList.add('poyvla');
            }
        }
    }
}


const loginModal = document.querySelector('#login_form');
const registerModal = document.querySelector('#register_form');
const loginbutton = document.querySelector('.profile_menu_button_one')
const xrestix = document.querySelectorAll('.closebel')
const backgrand = document.querySelectorAll('.backgraundmodal')
const cnopkareg = document.querySelector('.profile_menu_button_two')

for (let xresti of xrestix) {
    xresti.addEventListener('click', (event)=> {
    xresti.closest('.modalka_one').classList.toggle('modals_sexi')
    event.stopPropagation();
})
    }

loginbutton.addEventListener('click', (event)=> {
    ilovedogs.classList.toggle('poyvla')
    loginModal.classList.toggle('modals_sexi')
    event.stopPropagation();
})

for (let backgrands of backgrand) {
    backgrands.addEventListener('click', (event)=> {
        backgrands.parentElement.classList.toggle('modals_sexi')
        event.stopPropagation();
    })
}
    
    cnopkareg.addEventListener('click', (event)=> {
        ilovedogs.classList.toggle('poyvla')
        registerModal.classList.toggle('modals_sexi')
        event.stopPropagation();
    })

