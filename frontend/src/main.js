import Widget from "./core/Widget.js";

// Configuración del canvas
const canvas = document.getElementById('espacioEstudio');
const ctx = canvas.getContext('2d');

function ajustrarPantalla() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//para que se ajuste automatico 
ajustrarPantalla();
window.addEventListener('resize', ajustrarPantalla);

const widgetPrueba = new Widget(0.35, 0.4, 400, 180);

function loop() {

// Limpiamos todo el lienzo para dibujar el siguiente fotograma
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let degradado = ctx.createLinearGradient(0, 0, 0, canvas.height);
    degradado.addColorStop(0, '#131326');
    degradado.addColorStop(1, '#0b0b13');
    ctx.fillStyle = degradado;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    widgetPrueba.update();
    widgetPrueba.draw(ctx, canvas.width, canvas.height);

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
