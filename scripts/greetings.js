document.addEventListener("DOMContentLoaded", function() {
    const greetHead = document.querySelector(".greet-anim h1"),
        mainStyle = getComputedStyle(document.querySelector(".main-block")),
        curHeight = parseFloat(mainStyle.height) + parseFloat(mainStyle.paddingTop);

    document.querySelector(".greet-anim").style.minHeight = curHeight + "px";
    let maxIdx = separateElem(greetHead, "greet-anim-letter","p")

    for (let i = 1; i <= maxIdx; i++) {
        setTimeout(function() {
            const curEls = [...document.querySelectorAll(`.greet-anim-letter span[data-index="${i}"]`)];
            curEls.forEach((item) => item.classList.add("greet-anim_visible"));
        }, 80*i);
    }


    setTimeout(function() {
        for (let i = maxIdx; i > 0; i--) {
            setTimeout(function() {
                const curEls = [...document.querySelectorAll(`.greet-anim-letter span[data-index="${i}"]`)];
                curEls.forEach((item) => item.classList.remove("greet-anim_visible"));
            }, 80 * (maxIdx - i));
        }

        setTimeout(function() {
            document.querySelector(".greet-anim").classList.add("hidden");
            document.querySelector(".main-block__img").classList.add("visible");
            setTimeout(function() {
                document.querySelector(".greet-anim").style.display = "none";
            }, 500);
        }, maxIdx*180);
    }, maxIdx*250);
});