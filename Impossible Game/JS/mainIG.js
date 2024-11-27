// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player; // Variable para el jugador
let enemies; // Array de enemigos

// Mapa del nivel 1
const level1Map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 2, 2, 0, 1],
    [3, 0, 0, 0, 0, 0, 4],
    [1, 0, 2, 2, 2, 0, 1],
    [1, 1, 1, 1, 1, 1, 1]
];

// Ajustar el tamaño del canvas
function resizeCanvas() {
    canvas.width = 1000;
    canvas.height = 400;
}

// Dibujar el mapa en el canvas
function drawMap(ctx, mapa) {
    for (let row = 0; row < mapa.length; row++) {
        for (let col = 0; col < mapa[row].length; col++) {
            const cell = mapa[row][col];
            const x = col * 100;
            const y = row * 100;

            switch (cell) {
                case 0: // Espacio vacío
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(x, y, 100, 100);
                    break;
                case 1: // Bordes
                    ctx.fillStyle = "#0000ff";
                    ctx.fillRect(x, y, 100, 100);
                    break;
                case 3: // Entrada
                    ctx.fillStyle = "#00ff00";
                    ctx.fillRect(x, y, 100, 100);
                    break;
                case 4: // Salida
                    ctx.fillStyle = "#00ff00";
                    ctx.fillRect(x, y, 100, 100);
                    break;
            }
        }
    }
}

// Inicializar el nivel 1
function loadLevel1() {
    console.log("Cargando nivel 1");
    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player = new Rojo(150, 150, "right", 3, canvas.width, canvas.height);
    console.log("Jugador inicializado:", player);

    enemies = [
        new Enemigo(200, 150, 20, 2, 1, canvas.height),
        new Enemigo(400, 150, 20, 2, -1, canvas.height)
    ];
    console.log("Enemigos inicializados:", enemies);

    drawMap(ctx, level1Map);
    console.log("Mapa dibujado");

    player.draw(ctx);
    console.log("Jugador dibujado");

    enemies.forEach(enemy => enemy.draw(ctx));
    console.log("Enemigos dibujados");

    updateGame();
    console.log("Loop de juego iniciado");
}


// Actualizar el estado del juego
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el mapa
    drawMap(ctx, level1Map);

    // Dibujar y mover jugador
    player.draw(ctx);

    // Dibujar y mover enemigos
    enemies.forEach(enemy => {
        enemy.move();
        enemy.draw(ctx);
    });

    // Verificar colisiones u otras condiciones del juego aquí
    checkCollisions();

    // Continuar el loop del juego
    requestAnimationFrame(updateGame);
}

// Verificar colisiones entre el jugador y los enemigos
function checkCollisions() {
    enemies.forEach(enemy => {
        const dx = player.posX + 25 - enemy.x;
        const dy = player.posY + 25 - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 25 + enemy.radius) {
            playerDied(); // Llama a la función para manejar la muerte del jugador
        }
    });
}

// Reiniciar el juego si el jugador muere
function playerDied() {
    alert("¡Has muerto! Reiniciando nivel...");
    loadLevel1(); // Reinicia el nivel
}
