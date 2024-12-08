class Rojo {
    constructor(_posX, _posY, _direccionDisparo, _vidas, _anchoMapa, _altoMapa) {
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _vidas;
        this.velocidad = 2; // Velocidad del jugador
        this.dx = 0; // Movimiento en eje X
        this.dy = 0; // Movimiento en eje Y
        this.anchoMapa = _anchoMapa;
        this.altoMapa = _altoMapa;
    }

    draw(ctx) {
        const bordeExtra = 3; // 12% más grueso
        const bordeTotal = 25 + bordeExtra * 2; // Tamaño del borde total

        // Dibuja el borde negro
        ctx.fillStyle = "#000000"; // Color del borde
        ctx.fillRect(this.posX - bordeExtra, this.posY - bordeExtra, bordeTotal, bordeTotal);

        // Dibuja el jugador rojo
        ctx.fillStyle = "#ff0000"; // Color del jugador
        ctx.fillRect(this.posX, this.posY, 25, 25); // Rectángulo del jugador
    }

    move() {
        this.posX += this.dx; // Actualiza posición X
        this.posY += this.dy; // Actualiza posición Y

        // Limitar el movimiento dentro de los bordes del mapa
        if (this.posX < 0) this.posX = 0;
        if (this.posX + 25 > this.anchoMapa) this.posX = this.anchoMapa - 25;
        if (this.posY < 0) this.posY = 0;
        if (this.posY + 25 > this.altoMapa) this.posY = this.altoMapa - 25;
    }

    setDirection(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    stop() {
        this.dx = 0;
        this.dy = 0;
    }
}
