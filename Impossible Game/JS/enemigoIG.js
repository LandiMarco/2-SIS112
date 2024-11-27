class Enemigo {
    constructor(_x, _y, _radius, _speed, _direction, _canvasHeight) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
        this.speed = _speed;
        this.direction = _direction;
        this.canvasHeight = _canvasHeight;
    }

    draw(ctx) {
        ctx.fillStyle = "#0000ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    move() {
        this.y += this.speed * this.direction;
        if (this.y + this.radius > this.canvasHeight || this.y - this.radius < 0) {
            this.direction *= -1;
        }
    }
}




/*
export const obstacles = [
    { x: 200, y: 100, radius: 15, speed: 3, direction: 1, initialY: 100, initialDirection: 1 },
    { x: 400, y: 300, radius: 15, speed: 3, direction: -1, initialY: 300, initialDirection: -1 },
    { x: 600, y: 200, radius: 15, speed: 3, direction: 1, initialY: 200, initialDirection: 1 }
];



export function moveObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.y += obstacle.speed * obstacle.direction;
        if (obstacle.y + obstacle.radius > canvas.height || obstacle.y - obstacle.radius < 0) {
            obstacle.direction *= -1;
        }
    });
}
*/