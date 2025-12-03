// Boton para cambiar el fondo al fondo1.

const btnFondo = document.getElementById('btnFondo');
btnFondo.addEventListener('click', () => {
    cambiarFondo('fondo1');
});

// Funcion para cambiar el fondo a uno nuevo

function cambiarFondo(fondoNuevo) {
    const heroSection = document.querySelector('.hero-section');
    const clasesHero = heroSection.classList;
    const clasesArray = Array.from(clasesHero);
    // Buscar la clase de fondo actual (fondo1, fondo2, fondo3, fondo4)
    const fondoActual = clasesArray.find(clase => clase.startsWith('fondo'));

    heroSection.classList.remove(fondoActual);
    heroSection.classList.add(fondoNuevo);
}

const fondo2 = document.getElementById('fondo2');
fondo2.addEventListener('click', () => {
    cambiarFondo('fondo2');
});

const fondo3 = document.getElementById('fondo3');
fondo3.addEventListener('click', () => {
    cambiarFondo('fondo3');
});

const fondo4 = document.getElementById('fondo4');
fondo4.addEventListener('click', () => {
    cambiarFondo('fondo4');
});

// Cambia el color del Navbar dependiendo del fondo del Hero-section.

const navbar = document.querySelector('.navbar-nav');
navbar.addEventListener('mouseenter', () => {
    cambiarColorNavbar();
})
function cambiarColorNavbar() {
    const heroSection = document.querySelector('.hero-section');
    const clasesHero = heroSection.classList;
    const clasesArray = Array.from(clasesHero);
    const fondoActual = clasesArray.find(clase => clase.startsWith('fondo'));
    if (fondoActual === 'fondo1' || fondoActual === 'fondo3') {
        navbar.classList.remove('nav-color-green');
        navbar.classList.add('nav-color-red');
    } else {
        navbar.classList.remove('nav-color-red');
        navbar.classList.add('nav-color-green');
    }
}