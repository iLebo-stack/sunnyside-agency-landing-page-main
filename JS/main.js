let menuBtn = document.getElementById('menu_bar');
let links = document.getElementById('navbar_links');

function menu() {
    if (links.style.display === 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
}

menuBtn.addEventListener('click', menu, false);