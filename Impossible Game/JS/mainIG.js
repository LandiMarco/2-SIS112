// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player; // Variable para el jugador
let enemies; // Array de enemigos


// Mapa del nivel 1
const level1Map = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4],
    [4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 4, 4, 4],
    [3, 3, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 3],
    [3, 3, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3, 3],
    [4, 4, 4, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4],
    [4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

// Mapa del nivel 2
const level2Map = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4],
    [4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 4, 4, 4],
    [3, 3, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 3],
    [3, 3, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3, 3],
    [4, 4, 4, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4],
    [4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

// Cargar nivel 1
function loadLevel1() {
    console.log("Cargando nivel 1");
    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    // Inicialización del jugador
    player = new Rojo(50, 150, "right", 3, canvas.width, canvas.height);
    console.log("Jugador inicializado:", player);

    // Inicialización de los enemigos
    enemies = [
        new Enemigo(200, 150, 20, 2, 1, canvas.height),
        new Enemigo(400, 150, 20, 2, -1, canvas.height),
    ];
    console.log("Enemigos inicializados:", enemies);

    drawMap(ctx, level1Map); // Dibuja el mapa
    player.draw(ctx); // Dibuja al jugador
    enemies.forEach((enemy) => enemy.draw(ctx)); // Dibuja los enemigos

    updateGame(); // Inicia el loop del juego
}

// Cargar nivel 2
function loadLevel2() {
    console.log("Cargando nivel 2");
    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    

    // Inicialización del jugador
    player = new Rojo(50, 150, "right", 3, canvas.width, canvas.height);
    console.log("Jugador inicializado:", player);

    // Inicialización de los enemigos
    enemies = [
        // Fila superior
        new Enemigo(125, 125, 20, 2, 1, canvas.height),
        new Enemigo(225, 125, 20, 2, -1, canvas.height),
        new Enemigo(325, 125, 20, 2, 1, canvas.height),
        new Enemigo(425, 125, 20, 2, -1, canvas.height),
        new Enemigo(525, 125, 20, 2, 1, canvas.height),
        new Enemigo(625, 125, 20, 2, -1, canvas.height),
    
        // Fila inferior
        new Enemigo(125, 275, 20, 2, -1, canvas.height),
        new Enemigo(225, 275, 20, 2, 1, canvas.height),
        new Enemigo(325, 275, 20, 2, -1, canvas.height),
        new Enemigo(425, 275, 20, 2, 1, canvas.height),
        new Enemigo(525, 275, 20, 2, -1, canvas.height),
        new Enemigo(625, 275, 20, 2, 1, canvas.height),
    ];
    
    console.log("Enemigos inicializados:", enemies);

    drawMap(ctx, level2Map); // Dibuja el mapa
    player.draw(ctx); // Dibuja al jugador
    enemies.forEach((enemy) => enemy.draw(ctx)); // Dibuja los enemigos

    updateGame(); // Inicia el loop del juego
}

// Dibujar el mapa
function drawMap(ctx, mapa) {
    for (let row = 0; row < mapa.length; row++) {
        for (let col = 0; col < mapa[row].length; col++) {
            const cell = mapa[row][col];
            const x = col * 50;
            const y = row * 50;

            switch (cell) {
                case 0:
                    ctx.fillStyle = "#fff"; // decoracion 1
                    break;
                case 1:
                    ctx.fillStyle = "#e0dcfc"; // Decoracion 2
                    break;
                case 3:
                    ctx.fillStyle = "#00ff00"; // Entrada
                    break;
                case 4:
                    ctx.fillStyle = "#CCCCFF"; // Bordes
                    break;
            }
            ctx.fillRect(x, y, 50, 50);
        }
    }
}

// Actualizar el juego
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

    drawMap(ctx, level1Map); // Dibuja el mapa
    player.draw(ctx); // Dibuja al jugador

    enemies.forEach((enemy) => {
        enemy.move(); // Mueve al enemigo
        enemy.draw(ctx); // Dibuja al enemigo
    });

    checkCollisions(); // Verifica colisiones
    requestAnimationFrame(updateGame); // Loop del juego
}

// Verificar colisiones entre el jugador y los enemigos
function checkCollisions() {
    enemies.forEach((enemy) => {
        const dx = player.posX + 25 - enemy.x;
        const dy = player.posY + 25 - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 25 + enemy.radius) {
            playerDied(); // Llama a la función para manejar la muerte del jugador
        }
    });
}

// Manejar la muerte del jugador
function playerDied() {
    alert("¡Has muerto! Reiniciando nivel...");
    loadLevel1(); // Reinicia el nivel
}

// Ajustar tamaño del canvas
function resizeCanvas() {
    canvas.width = 1000;
    canvas.height = 400;
}

// Control del teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") player.moveLeft();
    if (event.key === "ArrowRight") player.moveRight();
    if (event.key === "ArrowUp") player.moveUp();
    if (event.key === "ArrowDown") player.moveDown();
});

// Inicializar el juego
window.onload = () => {
    loadLevel1(); // Carga el nivel 1 al iniciar
};
