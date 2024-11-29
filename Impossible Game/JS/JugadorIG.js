class Rojo {
    constructor(_posX, _posY, _direccionDisparo, _vidas, _anchoMapa, _altoMapa) {
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _vidas;
        this.velocidad = 25;
        this.anchoMapa = _anchoMapa;
        this.altoMapa = _altoMapa;
    }

moveLeft() {
    const nextX = this.posX - this.velocidad;
    const col = Math.floor((nextX) / 50); // Verifica la columna al borde izquierdo
    const row = Math.floor((this.posY + 12) / 50); // Usa el centro del jugador para mayor precisión
    if (nextX >= 0 && level1Map[row][col] !== 4) {
        this.posX = nextX;
    }
}

moveRight() {
    const nextX = this.posX + this.velocidad;
    const col = Math.floor((nextX + 24) / 50); // Verifica la columna al borde derecho
    const row = Math.floor((this.posY + 12) / 50); // Usa el centro del jugador para mayor precisión
    if (nextX + 25 <= this.anchoMapa && level1Map[row][col] !== 4) {
        this.posX = nextX;
    }
}

moveUp() {
    const nextY = this.posY - this.velocidad;
    const col = Math.floor((this.posX + 12) / 50); // Usa el centro del jugador para mayor precisión
    const row = Math.floor(nextY / 50); // Verifica la fila al borde superior
    if (nextY >= 0 && level1Map[row][col] !== 4) {
        this.posY = nextY;
    }
}

moveDown() {
    const nextY = this.posY + this.velocidad;
    const col = Math.floor((this.posX + 12) / 50); // Usa el centro del jugador para mayor precisión
    const row = Math.floor((nextY + 24) / 50); // Verifica la fila al borde inferior
    if (nextY + 25 <= this.altoMapa && level1Map[row][col] !== 4) {
        this.posY = nextY;
    }
}

    draw(ctx) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.posX, this.posY, 25, 25);
    }
}
