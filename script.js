let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');
let menu = document.getElementById('menu');

openMenu.addEventListener('click', () => {
    menu.style.display = "block";
});

closeMenu.addEventListener('click', () => {
    menu.style.display = "none";
});