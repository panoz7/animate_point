export class Position {

    constructor(x,y) {
        this.x = x; 
        this.y = y;
    }

    distanceTo(point) {
        const deltaX = point.x - this.x;
        const deltaY = point.y - this.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    }
}

export class Vector {

    constructor(startPos,endPos) {
        this.startPos = startPos;
        this.endPos = endPos;

        this.deltaX = endPos.x - startPos.x;
        this.deltaY = endPos.y - startPos.y;
        
        this.length = startPos.distanceTo(endPos)

    }

    getPointByDistance(distance) {
        const ratio = distance / this.length;
        return new Position(this.startPos.x + this.deltaX * ratio, this.startPos.y + this.deltaY * ratio);
    }

}

export class Dot {
    constructor(ctx, radius, startPos) {
        this.ctx = ctx;
        this.radius = radius;
        this.currentPos = startPos;
    }

    animateTo(endPos, velocity) {
        this.animating = true;
        this.animationStartTime = new Date();
        this.endPos = endPos;
        this.velocity = velocity;
        this.startPos = this.currentPos;
        this.vector = new Vector(this.startPos, this.endPos);
    }

    draw() {
        this.ctx.fillStyle = "#333";
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(this.currentPos.x, this.currentPos.y, this.radius, this.radius, 0, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    animate() {
        if (this.animating) {
            // Get the elapsed animation time
            const currentTime = new Date();
            const elapsedTime = currentTime.getTime() - this.animationStartTime.getTime();

            // Get the distance by multiplying the velocity by the elapsed time
            const distance = elapsedTime / 1000 * this.velocity;

            let newPos = this.vector.getPointByDistance(distance);    

            if (newPos.x > this.endPos.x || newPos.y > this.endPos.y) {
                this.animating = false;
                newPos = this.endPos;
                // console.log("DONE")
            }

            this.currentPos = newPos;

            

            // console.log(newPos);
        }
        this.draw();

    }
}
