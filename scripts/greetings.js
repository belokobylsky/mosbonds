document.addEventListener("DOMContentLoaded", function() {
    const greetHead = document.querySelector(".greet-anim h1"),
        mainStyle = getComputedStyle(document.querySelector(".main-block")),
        curHeight = parseFloat(mainStyle.height) + parseFloat(mainStyle.paddingTop);
    let idx = 0,
        maxIdx = 0;
    document.querySelector(".greet-anim").style.minHeight = curHeight + "px";

    greetHead.innerHTML = "<p>" + [...greetHead.innerText].map(function(letter) {
        if (letter === " ") {
            if (idx > maxIdx) {
                maxIdx = idx;
            }
            idx = 0;
            return "</p><p>";
        }
        idx++;
        if (idx > maxIdx) {
            maxIdx = idx;
        }
        return `<span class="greet-anim-letter"><span data-index="${idx}">${letter}</span></span>`;
    }).join("") + "</p>";


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