const burger = document.querySelector('.burger'),
    menu = document.querySelector('.main_nav'),
    back = document.querySelector('.back'),
    header = document.querySelector("header");

burger.addEventListener('click', () => {
    menu.classList.add('main_nav_active')
    back.classList.add('back_active')
    console.log(header)
    burger.style.display = 'none'
})

back.addEventListener('click', () => {
    menu.classList.remove('main_nav_active');
    back.classList.remove('back_active')
    burger.style.display = 'block'
})

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