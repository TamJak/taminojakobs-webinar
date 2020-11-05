/* If you're feeling fancy you can add interactivity 
    to your site with Javascript 


window.addEventListener('load', onLoad);

    function onLoad () {
        console.log('loaded')
        slides[0].classList.add('active')
    }
*/

let buttonone = document.querySelector('.first-button');
let buttontwo = document.querySelector('.second-button');

buttonone.addEventListener('click', buttonClick)
buttontwo.addEventListener('click', buttonClick)

function buttonClick () {
    buttonone.classList.add ('active')
}

function buttonClick(e) {
    e.currentTarget.classList.toggle('clicked')
}
    

let testimonial = document.querySelector('.testimonial');
let learnings = document.querySelectorAll('.learnings');
let calendar = document.querySelector('.webinar-schedule');
let lecturer = document.querySelector('.lecturer');
let participants = document.querySelector('.participants');
let portrait = document.querySelector('.portrait');
let about = document.querySelector('.about-box');
let list = document.querySelector('.list-margin');
let webinar = document.querySelectorAll('.section-one');

gsap.from(webinar, {
    opacity: 0,
    x: -300,
    duration: 0.8,
    ease: "back.out(1.7)",
});

gsap.from(calendar, {
    opacity: 0,
    y: 100,
    duration: 0.4,
    scrollTrigger: calendar,
    ease: Power2.easeOut
}, "+=3");

gsap.from(lecturer, {
    opacity: 0,
    y: 100,
    duration: 0.6,
    scrollTrigger: lecturer,
    toggleActions: "play reset play",
    scrub:true,
    ease: Power2.easeOut
});

gsap.from(participants, {
    opacity: 0,
    y: 100,
    duration: 0.8,
    scrollTrigger: participants,
    toggleActions: "play reset play",
    scrub:true,
    ease: Power2.easeOut
});

gsap.from(testimonial, {
    opacity: 0,
    x: -100,
    duration: 0.8,
    scrollTrigger: testimonial,
    ease: Power2.easeOut
});

gsap.from(portrait, {
    opacity: 0,
    scale: 0.6,
    duration: 0.8,
    scrollTrigger: portrait,
    ease: Power2.easeOut
});

gsap.from(about, {
    opacity: 0,
    scale: 0.6,
    duration: 0.8,
    scrollTrigger: about,
    ease: Power2.easeOut
});

let box = document.querySelector('.section-five-one');

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: box,
       
        scrub:true
    }
});

for (let i = 0; i < learnings.length; i++){
    let element = learnings[i];

console.log("hello", element);
tl.from(element, {
    opacity: 0,
    y: 100,
    duration: 0.4,
});

}

/*
let titles = document.querySelectorAll('.animate');
let trial = document.querySelector('.text');


for (let i = 0; i < titles.length; i++){
    let element = titles[i];

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            toggleActions: "play reset play",
            scrub:true
        }
    });

    tl.from(element, {
        opacity: 0,
        y: 100,
        duration: 0.5,
    });

    tl.from(trial, {
        opacity: 0.7,
        y: 100,
        duration: 0.5,
    })
}
*/