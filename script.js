const menuActive = document.querySelector('.menu-active');
const burger = document.querySelector('.menubtn3');


function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);

