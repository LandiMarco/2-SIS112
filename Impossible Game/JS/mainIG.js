// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


///////////////////// CONSTANTES
let player; // Variable para el jugador
let enemies; // Array de enemigos
let initialPlayerPosition = { x: 50, y: 150 }; 
let deathCount = 0; // Variable global para almacenar el número de muertes
let currentLevel = 1; // Nivel actual
let gameLoopId; // ID del bucle de animación
let loadingScreen = false; // Indica si estamos mostrando el mensaje de carga
let loadingMessage = ""; // Mensaje que se muestra en la pantalla negra

////////////////////////////MAPAS

// Mapa del nivel 1
const level1Map = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4],
    [4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 4, 4, 4],
    [5, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 3],
    [5, 5, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3, 3],
    [4, 4, 4, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4],
    [4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

// Mapa del nivel 2
const level2Map = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4],
    [4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 4, 4, 4],
    [5, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 3],
    [5, 5, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3, 3],
    [4, 4, 4, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4],
    [4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];




///////////////////////////////CARGAR NIVELES

// Cargar nivel 1
function loadLevel1() {
    stopGameLoop(); // Detiene el loop del juego actual
    currentLevel = 1; // Actualiza el nivel actual
    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    // Inicialización del jugador
    player = new Rojo(50, 150, "right", 3, canvas.width, canvas.height);
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
        new Enemigo(675, 50, 20, 2, 1, canvas.height),
        new Enemigo(625, 50, 20, 2, 1, canvas.height),
        //Abajo
        new Enemigo(375, 350, 20, 2, 1, canvas.height),
        new Enemigo(325, 350, 20, 2, 1, canvas.height),
        new Enemigo(575, 350, 20, 2, 1, canvas.height),
        new Enemigo(525, 350, 20, 2, 1, canvas.height),
        new Enemigo(775, 350, 20, 2, 1, canvas.height),
        new Enemigo(725, 350, 20, 2, 1, canvas.height),
    ];

    updateGame(); // Inicia el loop del juego
}

// Cargar nivel 2
function loadLevel2() {
    stopGameLoop(); // Detiene el loop del juego actual
    currentLevel = 2; // Actualiza el nivel actual
    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    

    // Inicializacion del jugador
    player = new Rojo(50, 150, "right", 3, canvas.width, canvas.height);

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
                case 5:
                    ctx.fillStyle = "#ed8311"; // Bordes
                    break;
            }
            ctx.fillRect(x, y, 50, 50);
        }
    }
}



/////////////////////////////////FUNCIONES


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
    let allCoinsCollected = true;

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

        if (!coin.collected) {
            allCoinsCollected = false;
        }
    });

    return allCoinsCollected;
}


function playerDied() {
    updateDeathCounter(); // Incrementa el contador de muertes

    // Reinicia la posición inicial del jugador
    player.posX = initialPlayerPosition.x;
    player.posY = initialPlayerPosition.y;

    // Reinicia el estado de las monedas
    coins.forEach((coin) => {
        coin.collected = false; // Marca todas las monedas como no recolectadas
    });
}

function updateDeathCounter() {
    deathCount++; // Incrementa el contador
    const deathCounterElement = document.getElementById('deathCounter'); // Obtén el elemento HTML
    if (deathCounterElement) {
        deathCounterElement.textContent = deathCount; // Actualiza el contenido del contador
    }
}

// Función para detener el loop del juego
function stopGameLoop() {
    if (gameLoopId) {
        cancelAnimationFrame(gameLoopId);
        gameLoopId = null; // Reiniciar el ID
    }
}


///////////////////////////////////PASAR AL OTRO NIVEL

// Función para verificar si se completa el nivel
function checkCompletion() {
    const col = Math.floor(player.posX / 50); // Columna actual del jugador
    const row = Math.floor(player.posY / 50); // Fila actual del jugador

    if (currentLevel === 1) {
        if (level1Map[row][col] === 3 && checkCoinCollection()) {
            mostrarMensaje1("¡Nivel 1 Completado!");
            setTimeout(() => {
                showLoadingScreen("Cargando Nivel 2", 5000); // Muestra la pantalla negra por 5 segundos
                loadLevel2(); // Inicia el nuevo nivel inmediatamente
            }, 2000); // Espera 2 segundos después del mensaje de nivel completado
        }
    } else if (currentLevel === 2) {
        if (level2Map[row][col] === 3 && checkCoinCollection()) {
            mostrarMensaje2("¡Terminaste el juego!");
            setTimeout(() => {
                stopGameLoop(); // Detiene el juego
            }, 2000); // Espera 2 segundos antes de terminar
        }
    }
}



///////////////////////////////MENSAJES

function mostrarMensaje1(mensaje1) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Fondo semitransparente
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#fff"; // Color del texto
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText(mensaje1, canvas.width / 2, canvas.height / 2);
}



function mostrarMensaje2(mensaje2) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Fondo semitransparente
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#fff"; // Color del texto
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText(mensaje2, canvas.width / 2, canvas.height / 2);
}

///////////////////////////////////////////PANTALLA DE CARGA

function showLoadingScreen(message, duration) {
    loadingScreen = true; // Activa el estado de pantalla de carga
    loadingMessage = message; // Establece el mensaje de carga

    setTimeout(() => {
        loadingScreen = false; // Desactiva la pantalla de carga después de la duración
        loadingMessage = ""; // Limpia el mensaje
    }, duration);
}


/////////////////////////////////////////// TECLADO

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


/////////////////////////ACTUALIZAR JUEGO

function updateGame() {
    if (loadingScreen) {
        // Pantalla completamente negra
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Texto del mensaje
        ctx.fillStyle = "white";
        ctx.font = "50px Arial";
        ctx.textAlign = "center";
        ctx.fillText(loadingMessage, canvas.width / 2, canvas.height / 2);

        // El juego sigue corriendo en el fondo
        gameLoopId = requestAnimationFrame(updateGame);
        return; // Evita dibujar el resto del juego mientras está la pantalla negra
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (currentLevel === 1) {
        drawMap(ctx, level1Map);
    } else if (currentLevel === 2) {
        drawMap(ctx, level2Map);
    }

    movePlayer(); // Aplica movimiento con restricciones
    player.draw(ctx);

    // Dibuja monedas y enemigos
    coins.forEach((coin) => coin.draw(ctx));
    enemies.forEach((enemy) => {
        enemy.move();
        enemy.draw(ctx);
    });

    checkCoinCollection();
    checkCollisions();
    checkCompletion(); // Verifica si el nivel ha sido completado

    gameLoopId = requestAnimationFrame(updateGame); // Guarda el ID del bucle
}



// Inicia el juego con el nivel 1
loadLevel1();
