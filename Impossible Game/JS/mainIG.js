// Función para iniciar el juego cuando se hace clic en el botón "Continuar"
function startGame() {
    const canvas = document.getElementById('gameCanvas');
    canvas.style.display = 'block'; // Muestra el canvas

    // Inicializa el contexto y el juego
    const ctx = canvas.getContext('2d');
    resizeCanvas();

    const game = new Game(canvas.width, canvas.height, "start");
    updateGame();
}

// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsObj = new Utils();

// Funciones para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerHeight * 0.9;
    canvas.height = window.innerHeight * 0.9;

    canvas.width = utilsObj.RoundTablero(canvas.width); // Redondea el ancho a un múltiplo de 50
    canvas.height = utilsObj.RoundTablero(canvas.height); // Redondea el largo a un múltiplo de 50

    console.log('width', canvas.width); // Muestra en la consola el ancho de la pantalla
    console.log('height', canvas.height); // Muestra en la consola el largo de la pantalla
}

// Llamamos a la función al cargar la página
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Definición del escenario y mapas
const escenario = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Mapas adicionales
const mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 2, 0, 2, 2, 2, 0, 0, 0, 0, 1],
    [1, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 1],
    [1, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 1],
    [1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1],
    [1, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 1],
    [1, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 1],
    [1, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 1],
    [1, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 1],
    [1, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 1],
    [1, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 1],
    [1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const mapa2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1],
    [1, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 1],
    [1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1],
    [1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1],
    [1, 0, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 1],
    [1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 1],
    [1, 0, 2, 2, 2, 0, 2, 0, 2, 2, 2, 0, 1],
    [1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1],
    [1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1],
    [1, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 1],
    [1, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 1],
    [1, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Funciones para dibujar el mapa
function DibujarCero(ctx, x, y, x1, y1) {
    ctx.fillStyle = "brown";
    ctx.fillRect(x, y, x1, y1);
}

function DibujarUno(ctx, x, y, x1, y1) {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, x1, y1);
}

function DibujarDos(ctx, x, y, x1, y1) {
    ctx.fillStyle = "pink";
    ctx.fillRect(x, y, x1, y1);
}

function DibujarMapa(ctx, mapa) {
    for (let row = 0; row < mapa.length; row++) {
        for (let col = 0; col < mapa[row].length; col++) {
            const cell = mapa[row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;
            switch (cell) {
                case 0:
                    DibujarCero(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1:
                    DibujarUno(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 2:
                    DibujarDos(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                default:
                    break;
            }
        }
    }
}

// Lógica del juego (actualización de la pantalla)
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DibujarMapa(ctx, mapa2);
    requestAnimationFrame(updateGame);
}

// Iniciar la actualización del juego
updateGame();
