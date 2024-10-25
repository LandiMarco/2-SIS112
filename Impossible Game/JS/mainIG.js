// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Funciones para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

    canvas.width = Math.round(canvas.width/50) * 50; // Redondea el ancho a un multiplo de 50
    canvas.height = Math.round(canvas.height/50) * 50; // Redondea el largo a un multiplo de 50

    console.log('width', canvas.width) // Muestra en la consola de la pagina el ancho de la pantalla
    console.log('height', canvas.height) // Muestra en la consola de la pagina el largo de la pantalla
}


// Llamamos a la función al cargar la página
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Creamos un objeto
const game = new Game(canvas.width, canvas.height, "start");