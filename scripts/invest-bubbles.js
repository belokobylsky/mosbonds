document.addEventListener("DOMContentLoaded", function() {
    let bubblesList = document.querySelector(".invest-bubbles ul");
    const curEnd = bubblesList.lastElementChild.getBoundingClientRect().x + parseFloat(getComputedStyle(bubblesList.lastElementChild).width);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".invest-bubbles ul", {
        // xPercent: -100,
        x: () => bubblesList.getBoundingClientRect().x - curEnd * 0.85,
        ease: "none",
        scrollTrigger: {
            trigger: ".invest-bubbles ul",
            start: "top top",
            end: () => curEnd * 1.5,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
        }
    });
});