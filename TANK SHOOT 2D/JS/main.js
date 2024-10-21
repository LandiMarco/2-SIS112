//Seleccionamos ele canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//Funciones para ajustar el tamano del canvas a la ventana
function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight *0.9;
}

//Llamamos a la funcion al cargar la pagina
resizeCanvas();

//Ajustamos el canvas cuando la ventana cambie de tamano
window.addEventListener('resize', resizeCanvas)

// Creamos un objeto
const game = new Game(canvas.width, canvas.height, "start")

//creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank (100, 100, 'up', 3);
const enemyTank = new EnemyTack (500, 100, 'down', 2);

//Dibujamos los elemtos en el canvas
function drawTank(tank){
    ctx.fillStyle = 'green';
    //Represenramos el tanque como un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

function drawEnemyTank(tank){
    ctx.fillStyle = 'red';
    //Represenramos el tanque enemigo como un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

//Logica del juego(actualizacion de la pantalla)
function updateGame(){
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0,0, canvas.width, canvas.height);

    drawTank(playerTank); // Dibujamos el tanque del jugador
    drawEnemyTank(enemyTank); // Dibujamos el tanque enemigo

    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}

//Inicar el juego
updateGame();