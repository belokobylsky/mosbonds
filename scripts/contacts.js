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