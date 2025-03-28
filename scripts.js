const nav = document.querySelector('.header-list')
const open = document.querySelector('.menu-open');
const close = document.querySelector('.menu-close');

function entrar() {
    open.style.display = 'none';
    close.style.display = 'block';
    nav.style.display = 'flex';
}

function sair() {
    open.style.display = 'block';
    close.style.display = 'none';
    nav.style.display = 'none';
}