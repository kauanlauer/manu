function abrirMenu() {
    document.querySelector('.menu').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}

function fecharMenu() {
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}