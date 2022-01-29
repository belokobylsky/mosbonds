document.addEventListener("DOMContentLoaded", function() {
    const email = document.querySelector(".contacts__email");

    const length = separateElem(email, "contacts__email-letter");
    ScrollTrigger.create({
        trigger: ".contacts__email",
        start: "bottom bottom",
        onToggle: function() {
            [...document.querySelectorAll(".contacts__email-letter span")].forEach(function(item) {
                console.log(item)
                setTimeout(() => item.classList.add("contacts_animated"), item.dataset.index * 100)
            })
        }
    })
});