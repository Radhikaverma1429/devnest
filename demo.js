// const carouselslide = document.querySelector('.carousel-slide');
// const carouselImages=document.querySelectorAll('.carousel-slide img');

// //button
// const preBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#.nextBtn');

// let couter =1;

// const size =  carouselImages[0].clientWidth;
// carouselImages.style.transform='translatex('+(-size*couter)+'px)';

// //button listeners
// nextBtn.addEventListener('click',()=>{
// carouselslide.style.transition='transform 0.4s ease-in-out';
// couter++;
// carouselslide.style.transform='translatex('+(-size*couter)+'px)';

// })
// nextBtn.addEventListener('click',()=>{
//     carouselslide.style.transition='transform 0.4s ease-in-out';
//     couter++;
//     carouselslide.style.transform='translatex('+(-size*couter)+'px)';
    
// })

const prev =document.getElementById('prev')
const prev =document.getElementById('next')

const slides =document.getElementsByClassName('item');
let tslides =tslides.length;

var position=0;
// console.log(slides);
upadateposition =()=>{
    for(let slide of slides){
        slide,classList.remove('item-visible');
        slide.classList.add('item-hidden');
    }
    slides[position].classList.add('item-visible');
}

prevSlide=()=>{
    if(position===0){
        position = tslides-1;
    }
    else{
        position--;
    }
    upadateposition();
};
nextSlide=()=>{
    if(position===tslides-1){
        position=0
    }
    else{
        position++;
    }
    upadateposition();
}

prev.addEventListener('click',()=>{
    prevSlide();
})
next.addEventListener('click',()=>{
    nextSlide();
})



