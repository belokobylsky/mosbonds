gsap.registerPlugin(ScrollTrigger);

// --- BUBBLES ---
const bubblesList = document.querySelector(".invest-bubbles ul");
const curEnd = bubblesList.lastElementChild.getBoundingClientRect().left;
let curX;
if (innerWidth > 1000) {
    curX = bubblesList.getBoundingClientRect().x - curEnd * 0.72;
} else {
    curX = bubblesList.getBoundingClientRect().x - curEnd * 0.975;
}
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

const animations = {
    chart(entry) {
        if (entry.target.classList.contains("percent-animated")) {
            return
        }
        entry.target.classList.add("percent-animated");
        const percent = entry.target.dataset.percent,
            percentEl = entry.target.querySelector(".n");
        for (let i = 0; i <= percent * 10; i++) {
            setTimeout(function () {
                let percentage = `${i}`.split("").reverse();
                percentage.splice(1, 0, ",");
                percentage.reverse()
                percentEl.innerText = percentage.join("") + "%";
                entry.target.querySelector(".moscow__chart-line").style.transform = `rotate(${360 * i / 1000}deg)`;
            }, 4 * i);
        }
    },


    rating(entry) {
        const ratingMax = separateElem(entry.target, "rating__place-letter")
        setTimeout(function () {
            for (let i = 1; i <= ratingMax; i++) {
                setTimeout(function () {
                    const curEls = [...document.querySelectorAll(`.rating__place-letter span[data-index="${i}"]`)];
                    curEls.forEach((item) => item.classList.add("rating__visible-letter"));
                }, 80 * i);
            }
        }, 1000);
    },


    support(entry) {
        if (entry.target.classList.contains("support-animated")) {
            return
        }
        entry.target.classList.add("support-animated");

        const numIdx = separateElem(entry.target.querySelector('.n'), "info__sup-letter");
        separateElem(entry.target.querySelector('.t'), "info__sup-letter");
        let maxIdx = numIdx;
        [...entry.target.querySelectorAll(".t .info__sup-letter span")].forEach(function(item) {
            maxIdx++;

            item.dataset.index = maxIdx;
        })
        for (let i = 1; i <= maxIdx; i++) {
            setTimeout(function () {
                const curEls = [...document.querySelectorAll(`.info__sup-letter span[data-index="${i}"]`)];
                curEls.forEach((item) => item.classList.add("info__visible-letter"));
            }, 50 * i);
        }
    }
}


let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            return;
        }
        if (entry.target.classList.contains("can-anim_css")) {
            entry.target.classList.add("css-animate")
        } else {
            animations[entry.target.dataset.anim](entry);
        }
    });
});


window.addEventListener("load", function () {
    [...document.querySelectorAll(".can-anim")].forEach(function (elem) {
        observer.observe(elem);
    });


// --- INVESTMENTS ---
    gsap.to(".investments__anim-red", {
        scrollTrigger: {
            trigger: ".investments__anim-red",
            scrub: true,
            start: "top 80%",
            end: "top 40%",
        },
        maxWidth: () => innerWidth,
        transformOrigin: "center center",
        ease: "none"
    });


    gsap.utils.toArray(".animated-line").forEach(function (line) {
        gsap.from(line, {
            scrollTrigger: {
                trigger: line,
                scrub: true,
                start: "top bottom",
                end: "top 60%",
            },
            scaleX: "0.5",
            transformOrigin: "left center",
            ease: "none"
        });
    });

// --- METRO ---
    gsap.to(".metro-logo-anim", {
        scrollTrigger: {
            trigger: ".metro-logo-anim",
            scrub: true,
            start: "10% bottom",
            end: "top center",
        },
        rotate: "90deg",
        transformOrigin: "top left",
        ease: "none"
    });


    gsap.utils.toArray(".animated-opacity").forEach(function (el) {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                scrub: true,
                start: "10% bottom",
                end: "top center",
            },
            opacity: "0",
            ease: "none"
        });
    });


    function setMetroPhotoWidth() {
        const metroPhoto = document.querySelector(".metro-photo-anim"),
            metroPhotoWidth = document.querySelector(".metro-logo-anim").parentElement.getBoundingClientRect().left;
        if (metroPhotoWidth) {
            metroPhoto.style.width = `${metroPhotoWidth}px`;
        } else {
            metroPhoto.style.width = "";
        }
    }

    setMetroPhotoWidth();
    window.addEventListener("resize", setMetroPhotoWidth);

// --- BUS ---
    gsap.from(".greenbonds__electrobus", {
        scrollTrigger: {
            trigger: ".greenbonds__electrobus",
            scrub: true,
            start: "top bottom",
            end: "top 60%"
        },
        scale: "0",
        transformOrigin: "center center",
        ease: "none"
    });


// --- MOSCOW ---
    gsap.from(".moscow__background", {
        scrollTrigger: {
            trigger: ".moscow .bl_1 .wg_3",
            scrub: true,
            start: "20% 70%",
            end: "40% 20%",
        },
        opacity: "0",
        ease: "none"
    });


    gsap.to(".moscow__sticky", {
        scrollTrigger: {
            trigger: ".moscow .bl_1 .wg_4",
            scrub: true,
            start: "top center",
            end: "bottom 25%",
        },
        opacity: "0",
        ease: "none"
    });


// --- INFO ---
    gsap.from(".information__support-anim", {
        scrollTrigger: {
            trigger: ".information__support-anim",
            scrub: true,
            start: "top 80%",
            end: "top 40%",
        },
        scale: "0",
        transformOrigin: "top right",
        ease: "none"
    });


// --- CONTACTS ---
    const email = document.querySelector(".contacts__email");
    separateElem(email, "contacts__email-letter");
    ScrollTrigger.create({
        trigger: ".contacts__email",
        start: "bottom bottom",
        onToggle: function () {
            [...document.querySelectorAll(".contacts__email-letter span")].forEach(function (item) {
                setTimeout(() => item.classList.add("contacts_animated"), item.dataset.index * 100)
            })
        }
    })
});

