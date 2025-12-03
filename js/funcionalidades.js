const btnFondo = document.getElementById('btnFondo');
btnFondo.addEventListener('click', () => {
    cambiarFondo('fondo1');
});

function cambiarFondo(fondoNuevo) {
    const clasesBody = document.body.classList;
    const clasesArray = Array.from(clasesBody);
    const fondo = clasesArray[1];
    document.body.classList.remove(fondo);
    document.body.classList.add(fondoNuevo);
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

