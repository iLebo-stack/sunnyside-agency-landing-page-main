let menuBtn = document.getElementById('menu_bar');
let links = document.getElementById('navbar_links');

function menu() {
    if (links.className === 'links') {
        links.className = 'links ' + 'responsive';
    }else {
        links.className = 'links';
    }
}

menuBtn.addEventListener('click', menu, false);