const burger = document.querySelector('.burger'),
      menu = document.querySelector('.main_nav'),
      back = document.querySelector('.back')

burger.addEventListener('click', () => {
  menu.classList.add('main_nav_active')
  back.classList.add('back_active')
  burger.style.display = 'none'
})

back.addEventListener('click', () => {
  menu.classList.remove('main_nav_active')
  back.classList.remove('back_active')
  burger.style.display = 'block'
})
