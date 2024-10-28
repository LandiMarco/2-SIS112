// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsObj = new Utils();

// Funciones para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

    canvas.width = utilsObj.RoundTablero(canvas.width); // Redondea el ancho a un multiplo de 50
    canvas.height = utilsObj.RoundTablero(canvas.height); // Redondea el largo a un multiplo de 50

    console.log('width', canvas.width) // Muestra en la consola de la pagina el ancho de la pantalla
    console.log('height', canvas.height) // Muestra en la consola de la pagina el largo de la pantalla
}

// Llamamos a la función al cargar la página
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Creamos un objeto
const game = new Game(canvas.width, canvas.height, "start");

// Creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank(100, 100, 'up', 3, game.ancho, game.alto);

const enemyTank1 = new EnemyTank(200, 200, 'down', 2, game.ancho, game.alto);  // Crea al tanque enemigo 1 y lo posiciona en las coordenas 200, 200
const enemyTank2 = new EnemyTank(700, 200, 'down', 2, game.ancho, game.alto);  // Crea al tanque enemigo 2 y lo posiciona en las coordenas 700, 200
const enemyTank3 = new EnemyTank(500, 400, 'down', 2, game.ancho, game.alto);  // Crea al tanque enemigo 3 y lo posiciona en las coordenas 500, 400
const enemyTank4 = new EnemyTank(600, 100, 'down', 2, game.ancho, game.alto);  // Crea al tanque enemigo 4 y lo posiciona en las coordenas 600, 100


//Controles basicos para mover el tanque del jugador
window.addEventListener('keydown', function (e) {
    switch(e.key){
        //Las teclas de las flechas del teclado
        case 'ArrowLeft':
            playerTank.moveLeft();
            break;
        case 'ArrowRight':
            playerTank.moveRight();
            break;
        case 'ArrowUp':
            playerTank.moveUp();
            break;
        case 'ArrowDown':
            playerTank.moveDown();
            break;
            /*
        //Las teclas de las Letras del teclado
        case 'a':
            playerTank.moveLeft();
            break;
        case'd':
            playerTank.moveRight();
            break;
        case 'w':
            playerTank.moveUp();
            break;
        case's':
            playerTank.moveDown();
            break;
            */
    }
});

// Añadir movimientos aleatorios al enemigo
function moveEnemyTankRandomly(enemyTank) {
    const directions = ['left', 'right', 'up', 'down']; // Posibles direcciones
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];

    //console.log(randomDirection)
    // Movemos al tanque enemigo en la dirección elegida
    switch(randomDirection) {
        case 'left':
            enemyTank.moveLeft();
            break;
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;
    }
}

//Hacemos que el tanque enemigo se mueva aleatoriamente cada 500 ms
setInterval(() => {
    moveEnemyTankRandomly(enemyTank1); // Mueve el tanque enemy tank 1 de forma aleatoria a una velocidad de 100 milisegundos
    moveEnemyTankRandomly(enemyTank2); // Mueve el tanque enemy tank 2 de forma aleatoria a una velocidad de 100 milisegundos
}, 100)

setInterval(() => {
    moveEnemyTankRandomly(enemyTank3); // Mueve el tanque enemy tank 3 de forma aleatoria a una velocidad de 300 milisegundos
    moveEnemyTankRandomly(enemyTank4); // Mueve el tanque enemy tank 4 de forma aleatoria a una velocidad de 300 milisegundos
},300)

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

]

const cellSize = 50;

function drawEscenario(ctx, escenario){
    for(let row = 0; row < escenario.length; row++){
        for(let col = 0; col < escenario[row].length; col++){
            const cell = escenario[row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;

            switch(cell){
                case 0: //Espacio vacio
                    ctx.fillStyle = 'black';
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1: //pared
                    ctx.fillStyle = 'gray';
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    //var wall = new Image();
                    //wall.src = './ASSETS/pared.webp';
                    //ctx.drawImage(wall, x, y , cellSize, CellSize);
                    break;

                default:
                    break;
            }
        }
    }
}


// Lógica del juego (actualización de la pantalla)
function updateGame() {
    // Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawEscenario(ctx, escenario); //Dibujamos el escenario en el canvas.
    playerTank.drawTank(ctx);
    enemyTank1.drawEnemyTank(ctx); // Dibujamps el tanque enemigo
    enemyTank2.drawEnemyTank(ctx);
    enemyTank3.drawEnemyTank(ctx);
    enemyTank4.drawEnemyTank(ctx);

    //drawTank(playerTank); // Dibujamos el tanque del jugador
   // drawEnemyTank(enemyTank1); // Dibujamos el tanque enemigo 1 
    //drawEnemyTank(enemyTank2); // Dibujamos el tanque enemigo 2
    //drawEnemyTank(enemyTank3); // Dibujamos el tanque enemigo 3
    //drawEnemyTank(enemyTank4); // Dibujamos el tanque enemigo 4

    // Refrescar los gráficos
    requestAnimationFrame(updateGame);
}

// Iniciar el juego
updateGame();