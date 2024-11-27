class Rojo {
    constructor(_posX, _posY, _direccionDisparo, _vidas, _anchoMapa, _altoMapa) {
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _vidas;
        this.velocidad = 50;
        this.anchoMapa = _anchoMapa;
        this.altoMapa = _altoMapa;
    }

    moveLeft() {
        if (this.posX - this.velocidad >= 0) {
            this.posX -= this.velocidad;
        }
    }

    moveRight() {
        if (this.posX + this.velocidad <= this.anchoMapa - 50) {
            this.posX += this.velocidad;
        }
    }

    moveUp() {
        if (this.posY - this.velocidad >= 0) {
            this.posY -= this.velocidad;
        }
    }

    moveDown() {
        if (this.posY + this.velocidad <= this.altoMapa - 50) {
            this.posY += this.velocidad;
        }
    }

    draw(ctx) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.posX, this.posY, 50, 50);
    }
}
