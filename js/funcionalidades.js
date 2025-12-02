const btnFondo = document.getElementById('btnFondo');
btnFondo.addEventListener('click', () => {
    document.body.classList.remove('fondo2');
    document.body.classList.add('fondo3');
});