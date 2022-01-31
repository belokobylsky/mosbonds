const header = document.querySelector("header");

function toggleHeader() {
    let headerRect = header.getBoundingClientRect();
    if (headerRect.bottom < 0 && !header.classList.contains("header-fixed")) {
        header.classList.add("header-fixed");
        toggleHeader(); // for calling "else if" block
    } else if (headerRect.bottom * 3 - pageYOffset >= 0 && header.classList.contains("header-fixed")) {
        if (headerRect.bottom - pageYOffset >= 0) {
            header.classList.remove("header-fixed");
            header.style.opacity = "1";
        } else {
            header.style.opacity = `${(pageYOffset - headerRect.bottom) / headerRect.height}`;
        }
    }
}
toggleHeader();
document.addEventListener("scroll", toggleHeader);