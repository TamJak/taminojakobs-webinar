/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
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
