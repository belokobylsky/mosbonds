document.addEventListener("DOMContentLoaded", function() {
    let bubblesList = document.querySelector(".invest-bubbles ul");
    const curEnd = bubblesList.lastElementChild.getBoundingClientRect().x;
    const curX = bubblesList.getBoundingClientRect().x - curEnd * 0.975;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".invest-bubbles ul", {
        x: () => curX,
        ease: "none",
        scrollTrigger: {
            trigger: ".invest-bubbles ul",
            start: "top top",
            end: () => curEnd * 2,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
        }
    });
});