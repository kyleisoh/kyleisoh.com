const menu = document.querySelector('.navbar__toggle')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
})

function crossX(x) {
    x.classList.toggle("change");
}

menuLinks.addEventListener('click', function() {
    menuLinks.classList.toggle('is-active');
})

function showMenu(x) {
    x.classList.toggle("change");
}