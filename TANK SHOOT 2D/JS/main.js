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

// Creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank(100, 100, 'up', 3, game.ancho, game.alto);

const enemyTank1 = new EnemyTank(200, 200, 'down', 2, game.ancho, game.alto);  // Crea al tanque enemigo 1 y lo posiciona en las coordenas 200, 200
const enemyTank2 = new EnemyTank(700, 200, 'down', 2, game.ancho, game.alto);  // Crea al tanque enemigo 2 y lo posiciona en las coordenas 700, 200
const enemyTank3 = new EnemyTank(500, 400, 'down', 2, game.ancho, game.alto);  // Crea al tanque enemigo 3 y lo posiciona en las coordenas 500, 400
const enemyTank4 = new EnemyTank(600, 100, 'down', 2, game.ancho, game.alto);  // Crea al tanque enemigo 4 y lo posiciona en las coordenas 600, 100

// Dibujamos los elementos en el canvas
function drawTank(tank) {
    ctx.fillStyle = 'green';
    // Representamos el tanque como un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

function drawEnemyTank(tank) {
    ctx.fillStyle = 'red';
    // Representamos el tanque enemigo como un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

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


// Lógica del juego (actualización de la pantalla)
function updateGame() {
    // Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawTank(playerTank); // Dibujamos el tanque del jugador
    drawEnemyTank(enemyTank1); // Dibujamos el tanque enemigo 1 
    drawEnemyTank(enemyTank2); // Dibujamos el tanque enemigo 2
    drawEnemyTank(enemyTank3); // Dibujamos el tanque enemigo 3
    drawEnemyTank(enemyTank4); // Dibujamos el tanque enemigo 4

    // Refrescar los gráficos
    requestAnimationFrame(updateGame);
}

// Iniciar el juego
updateGame();