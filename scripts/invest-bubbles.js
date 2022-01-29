let bubblesList = document.querySelector(".invest-bubbles ul");
const curEnd = bubblesList.lastElementChild.getBoundingClientRect().left;
let curX;
if (innerWidth > 1000) {
    curX = bubblesList.getBoundingClientRect().x - curEnd * 0.72;
} else {
    curX = bubblesList.getBoundingClientRect().x - curEnd * 0.975;
}
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