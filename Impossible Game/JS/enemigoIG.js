class Enemigo {
    constructor(_x, _y, _radius, _speed, _direction, _canvasHeight) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius * 0.5;
        this.speed = _speed;
        this.direction = _direction;
        this.canvasHeight = _canvasHeight;
        this.bordeColor = "#000000"; // Color del borde (negro)
        this.bordeAncho = 2; // Ancho del borde
    }

    draw(ctx) {
        // Dibujar el relleno del enemigo
        ctx.fillStyle = "#0000ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Dibujar el borde del enemigo
        ctx.lineWidth = this.bordeAncho;
        ctx.strokeStyle = this.bordeColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }

    move() {
        const nextY = this.y + this.speed * this.direction;
        const col = Math.floor(this.x / 50); // Columna actual
        const row = Math.floor(nextY / 50); // Conversión a fila en el mapa
    
        if (
            nextY + this.radius <= this.canvasHeight &&
            nextY - this.radius >= 0 &&
            level1Map[row][col] !== 4
        ) {
            this.y = nextY;
        } else {
            this.direction *= -1; // Cambia de dirección si encuentra un 4 o un límite
        }
    }
}
