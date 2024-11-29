// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player; // Variable para el jugador
let enemies; // Array de enemigos
let initialPlayerPosition = { x: 50, y: 150 }; 




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
    player = new Rojo(initialPlayerPosition.x, initialPlayerPosition.y, "right", 3, canvas.width, canvas.height);


    coins = [
        new Moneda(325, 225, 20, 20),
        new Moneda(625, 225, 20, 20),
        new Moneda(500, 150, 20, 20),
    ];

    
    // Inicialización de los enemigos
    enemies = [
        //Arriba
        new Enemigo(225, 50, 20, 2, 1, canvas.height),
        new Enemigo(275, 50, 20, 2, 1, canvas.height),
        new Enemigo(475, 50, 20, 2, 1, canvas.height),
        new Enemigo(425, 50, 20, 2, 1, canvas.height),
        new Enemigo(675, 50, 20, 2, -1, canvas.height),
        new Enemigo(625, 50, 20, 2, 1, canvas.height),
        //Abajo
        new Enemigo(375, 350, 20, 2, 1, canvas.height),
        new Enemigo(325, 350, 20, 2, 1, canvas.height),
        new Enemigo(575, 350, 20, 2, 1, canvas.height),
        new Enemigo(525, 350, 20, 2, 1, canvas.height),
        new Enemigo(775, 350, 20, 2, -1, canvas.height),
        new Enemigo(725, 350, 20, 2, 1, canvas.height),
    ];

    
    console.log("Enemigos inicializados:", enemies);

    drawMap(ctx, level1Map); // Dibuja el mapa
    player.draw(ctx); // Dibuja al jugador
    enemies.forEach((enemy) => enemy.draw(ctx)); // Dibuja los enemigos
    coins.forEach((coin) => coin.draw(ctx)); // Dibuja las monedas
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

    coins = [
        new Moneda(225, 75, 20, 20),
        new Moneda(775, 75, 20, 20),
        new Moneda(775, 325, 20, 20),
    ];

    // Inicialización de los enemigos
    enemies = [
        // Fila superior
        new Enemigo(275, 50, 20, 2, 1, canvas.height),
        new Enemigo(375, 50, 20, 2, 1, canvas.height),
        new Enemigo(475, 50, 20, 2, 1, canvas.height),
        new Enemigo(575, 50, 20, 2, -1, canvas.height),
        new Enemigo(675, 50, 20, 2, -1, canvas.height),
        new Enemigo(775, 50, 20, 2, -1, canvas.height),
    
        // Fila inferior
        new Enemigo(225, 350, 20, 2, 1, canvas.height),
        new Enemigo(325, 350, 20, 2, -1, canvas.height),
        new Enemigo(425, 350, 20, 2, 1, canvas.height),
        new Enemigo(525, 350, 20, 2, 1, canvas.height),
        new Enemigo(625, 350, 20, 2, 1, canvas.height),
        new Enemigo(725, 350, 20, 2, 1, canvas.height),
    ];
    
    console.log("Enemigos inicializados:", enemies);

    drawMap(ctx, level2Map); // Dibuja el mapa
    player.draw(ctx); // Dibuja al jugador
    enemies.forEach((enemy) => enemy.draw(ctx)); // Dibuja los enemigos
    coins.forEach((coin) => coin.draw(ctx)); // Dibuja las monedas
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


// Restricción basada en el mapa
// Restricción basada en el mapa
// Restricción basada en el mapa
function canMoveTo(newX, newY) {
    // Dimensiones del jugador
    const playerWidth = 25;
    const playerHeight = 25;

    // Coordenadas de las esquinas del jugador
    const corners = [
        { x: newX, y: newY }, // Esquina superior izquierda
        { x: newX + playerWidth, y: newY }, // Esquina superior derecha
        { x: newX, y: newY + playerHeight }, // Esquina inferior izquierda
        { x: newX + playerWidth, y: newY + playerHeight }, // Esquina inferior derecha
    ];

    // Verifica si todas las esquinas están en una celda válida
    return corners.every((corner) => {
        const col = Math.floor(corner.x / 50);
        const row = Math.floor(corner.y / 50);

        // Verifica límites del mapa y si la celda no está bloqueada
        return (
            row >= 0 &&
            row < level1Map.length &&
            col >= 0 &&
            col < level1Map[0].length &&
            level1Map[row][col] !== 4
        );
    });
}


// Mover jugador con restricciones
function movePlayer() {
    let newX = player.posX + player.dx; // Nueva posición X propuesta
    let newY = player.posY + player.dy; // Nueva posición Y propuesta

    // Valida cada eje independientemente
    if (canMoveTo(newX, player.posY)) player.posX = newX; // Movimiento horizontal
    if (canMoveTo(player.posX, newY)) player.posY = newY; // Movimiento vertical
}


// Actualizar el juego
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMap(ctx, level1Map);
    movePlayer(); // Aplica movimiento con restricciones
    player.draw(ctx);

    coins.forEach((coin) => coin.draw(ctx));
    enemies.forEach((enemy) => {
        enemy.move();
        enemy.draw(ctx);
    });

    checkCoinCollection();
    checkCollisions();
    requestAnimationFrame(updateGame);
}


// Verificar colisiones entre el jugador y los enemigos
function checkCollisions() {
    enemies.forEach((enemy) => {
        const dx = (player.posX + 12.5) - enemy.x; // Centro del jugador
        const dy = (player.posY + 12.5) - enemy.y; // Centro del enemigo
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 12.5 + enemy.radius) { // Colisión si la distancia es menor que la suma de radios
            playerDied(); // Manejar la muerte del jugador
        }
    });
}

function checkCoinCollection() {
    coins.forEach((coin) => {
        if (
            !coin.collected &&
            player.posX < coin.posX + coin.ancho &&
            player.posX + 25 > coin.posX &&
            player.posY < coin.posY + coin.alto &&
            player.posY + 25 > coin.posY
        ) {
            coin.collected = true; // Marca la moneda como recolectada
            console.log("¡Moneda recolectada!");
        }
    });
}

function playerDied() {
    alert("¡Has muerto! Reiniciando nivel...");
    player.posX = initialPlayerPosition.x; // Reinicia la posición X del jugador
    player.posY = initialPlayerPosition.y; // Reinicia la posición Y del jugador
}

// Ajustar tamaño del canvas
function resizeCanvas() {
    canvas.width = 1000;
    canvas.height = 400;
}

// Control del teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") player.setDirection(-player.velocidad, 0);
    if (event.key === "ArrowRight") player.setDirection(player.velocidad, 0);
    if (event.key === "ArrowUp") player.setDirection(0, -player.velocidad);
    if (event.key === "ArrowDown") player.setDirection(0, player.velocidad);
});

document.addEventListener("keyup", (event) => {
    if (
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown"
    ) {
        player.stop(); // Detiene el movimiento cuando se suelta la tecla
    }
});

// Inicializar el juego
window.onload = () => {
    loadLevel1(); // Carga el nivel 1 al iniciar
};
