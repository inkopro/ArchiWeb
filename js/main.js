const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__top__burger');
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    menuBtn.classList.toggle('rotate')
    body.classList.toggle('lock')
  })
}