const slider = document.querySelector("#slider");
let slidersection = document.querySelectorAll(".slider-section");
let slidersectionLast = slidersection[slidersection.length -1 ];


const btnLeft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',slidersectionLast);

function Next() {
    let slidersectionFirst=document.querySelectorAll(".slider-section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend', slidersectionFirst);
        slider.style.marginleft = "-100%";

    }, 500);
}

function Prev() {
    let slidersection = document.querySelectorAll(".slider-section");
    let slidersectionLast = slidersection[slidersection.length -1];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend', slidersectionLast);
        slider.style.marginleft = "-100%";

    }, 500);
}
btnright.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click',function(){
    Prev();
} );

setInterval(function(){
    Next();
},5000);