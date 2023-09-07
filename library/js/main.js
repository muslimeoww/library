const setName = (selector) => {
    const fucking = JSON.parse(window.localStorage.getItem("userflexa"))
    selector.innerHTML = fucking.fname.charAt(0).toUpperCase() + fucking.lname.charAt(0).toUpperCase()
};
const fuckingNAME = (selector) => {
    const fucking = JSON.parse(window.localStorage.getItem("userflexa"))
    selector.innerHTML = fucking.fname.charAt(0).toUpperCase() + fucking.fname.slice(1) +' '+ fucking.lname.charAt(0).toUpperCase() + fucking.lname.slice(1)
};
const cardnumber = (selector) => {
    const fucking = JSON.parse(window.localStorage.getItem("userflexa"))
    selector.innerHTML = fucking.key
};
const loginstate = () => {
    const fucking = JSON.parse(window.localStorage.getItem("userflexa"))
    fucking.visit += 1;
    document.querySelector('.text-one-pr').innerHTML = fucking.visit
    window.localStorage.setItem("userflexa", JSON.stringify(fucking));
    
    let dropdowns = document.getElementsByClassName("card-con");
    for (let dropdown of dropdowns) {
        dropdown.classList.toggle('hidensik')
        
        
    }

    
    const profises = document.querySelector('#profise')
    cardnumber(profises)
    
    const fefs = document.querySelector('.bikecru')
    setName(fefs)
    setName(document.querySelector('.text-tame-js'))
    fuckingNAME(document.querySelector('.enezetiale'))
    cardnumber(document.querySelector('.card-number-newss'))
    



    const buys = document.querySelectorAll('.buy')
    
    for (let buy of buys) {
        buy.addEventListener('click', (event)=> {
        document.querySelector('#buybobe').classList.toggle('modals_sexi')
        event.stopPropagation();
    })
        }

        document.querySelector('.profile_menu_button_one_two').addEventListener('click', (event)=> {
            document.querySelector('#myunderskin').classList.toggle('modals_sexi')
            event.stopPropagation();
        })
    } 
   
    
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
const ilovedogs = document.querySelector('.lelememe');


ilovecats.addEventListener('click', (event) => {
    ilovedogs.classList.toggle('poyvla')
    event.stopPropagation();
})
  
window.onclick = function(event) { 
    if (!event.target.matches('.lelememe')) {
        let dropdowns = document.getElementsByClassName("lelememe");
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

document.querySelector('.down-login-butt').addEventListener('click', (event)=> {
    loginModal.classList.toggle('modals_sexi')
    registerModal.classList.toggle('modals_sexi')

    event.stopPropagation();
})
document.querySelector('.down-login-butt-two').addEventListener('click', (event)=> {
    loginModal.classList.toggle('modals_sexi')
    registerModal.classList.toggle('modals_sexi')

    event.stopPropagation();
})

const registerform = document.querySelector('.login-header-form-gurd-two ');

    registerform.addEventListener('submit', (event)=> {
    event.preventDefault();
    const nameinput = event.target.querySelector("#Fname");
    const name = nameinput.value;
    
    const lname = event.target.querySelector("#Lname");
    const llname = lname.value;

    const mail = event.target.querySelector("#mail");
    const maill = mail.value;

    const password = event.target.querySelector("#password");
    const passwordl = password.value;
    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
    const userflexa = {
        fname : name,
        lname : llname,
        mail : maill,
        password : passwordl,
        key: genRanHex(9),
        visit: 0,
      }
      
      window.localStorage.setItem("userflexa", JSON.stringify(userflexa));
      loginstate()
      
    registerform.closest('.modalka_one').classList.toggle('modals_sexi')
    
})


const loginformic = document.querySelector('.login-header-form-gurd');

    loginformic.addEventListener('submit', (event)=>{
    event.preventDefault(); 
    const maillog = event.target.querySelector("#email");
    const maillogis = maillog.value;

    const holpas = event.target.querySelector("#hollypas");
    const holypas = holpas.value;
    
      const fucking = JSON.parse(window.localStorage.getItem("userflexa"))
      if (fucking.mail === maillogis && 
        fucking.password === holypas)  {
            
            loginformic.closest('.modalka_one').classList.toggle('modals_sexi')
            loginstate()
      } 
      
      
    })
    



