const previous = document.querySelector('.arrow_left');
const next = document.querySelector('.arrow_right');

const slider = document.querySelector('.slider_inner');
const slides = Array.from(slider.children)

let current = 0

slides[current].style.opacity = '1'

previous.addEventListener('click', ()=> {

    for (let i = 0; i < slides.length; i++) {
        
        slides[i].style.opacity = '0';   
    } 
    if (current == 0) {
        current = slides.length 
    }
    slides[current - 1].style.opacity = '1'
    current --;
})
next.addEventListener('click', ()=> {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';   
    }
    if (current == slides.length - 1) {
        current = -1
    }
    slides[current + 1].style.opacity = '1';
    current ++;
})

//***************DOTS SLIDER***************//

const dots = Array.from(document.querySelector('.slider_dots').children);
const testimonials_slider = Array.from(document.querySelector('.testimonials_slider').children) 

const currentDot = dots[0]

let targetDot = 0;

testimonials_slider[targetDot].style.opacity = '1'

dots.map((item, index)=> {
    item.addEventListener('click', dotsSlider)
});
function dotsSlider(e){
    dots.map(item => item.classList.remove('active'))

    testimonials_slider.map(item => {
        item.style.opacity = '0'
    })

     targetDot = dots.findIndex(dot => dot === e.target);
    
    testimonials_slider[targetDot].style.opacity = '1';
    dots[targetDot].classList.add('active') 
}
function dotsSlideshow() {
    dots.map(item => item.classList.remove('active'))

    testimonials_slider.map(item => {
        item.style.opacity = '0'
    })

    if (targetDot == testimonials_slider.length - 1) {
        targetDot = -1
    }
    
    testimonials_slider[targetDot + 1].style.opacity = '1';
    dots[targetDot + 1].classList.add('active') 
    targetDot ++;
}
setInterval(dotsSlideshow, 3000)

const footer = document.querySelector('.footer')

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.zIndex = 1
    }else{
        footer.style.zIndex = -1
    }
};

//************** NAVBAR *************//

const hamburger_menu = document.querySelector('.hamburger_menu');
const collapse_menu = document.querySelector('.collapse_menu');

hamburger_menu.addEventListener('click', e => {
    if (hamburger_menu.classList.contains('colapse')) {
        hamburger_menu.classList.remove('colapse')
        collapse_menu.style.display = 'none'
       
    }else{
        hamburger_menu.classList.add('colapse')
        collapse_menu.style.display = 'block'
    }
})