import {Position, Dot} from './plot.js'

const plot = document.getElementById('plot');
var ctx = plot.getContext('2d');


let startPos = new Position(20, 20);


function buildDotMatrix(rows, cols, radius, xSpacing, ySpacing) {
    let dots = [];

    for (let y = 0; y < cols; y++) {
        let row = [];
    
        for (let x = 0; x < rows; x++) {
            let dot = new Dot(ctx, radius, new Position(startPos.x + (x * xSpacing), startPos.y + (y * ySpacing)))
            row.push(dot);
        }
        dots.push(row);
    }
    return dots;

}

function drawDots(dots) {
    dots.forEach(rows => {
        rows.forEach(dot => {
            dot.draw();
        })
    })
}


let dots = buildDotMatrix(10, 10, 4, 20, 20)

drawDots(dots);





// let dots = [];

// for (let i = 0; i < 10; i++) {
//     let dot = new Dot(ctx, new Position(20 + (i * 20), 20))
//     dots.push(dot)
// }

// for (let i = 0; i < 10; i++) {
//     let dot = new Dot(ctx, new Position(20 + (i * 20), 40))
//     dots.push(dot)
// }

// for (let i = 0; i < 10; i++) {
//     let dot = new Dot(ctx, new Position(20 + (i * 20), 60))
//     dots.push(dot)
// }

// for (let i = 0; i < 10; i++) {
//     let dot = new Dot(ctx, new Position(20 + (i * 20), 80))
//     dots.push(dot)
// }

// for (let i = 0; i < 10; i++) {
//     let dot = new Dot(ctx, new Position(20 + (i * 20), 100))
//     dots.push(dot)
// }

// function animate() {
//     ctx.clearRect(0,0,600,600);
//     dots.forEach(dot => dot.animate());
//     window.requestAnimationFrame(animate)
// }



// dots.forEach(dot => dot.draw())

// var i = 49; 
// setInterval(() => {
//     if (i > 13) {
//         let dot = dots[i];
//         console.log(dot.currentPos)
//         dots[i].animateTo(new Position(dot.currentPos.x, dot.currentPos.y + 200), 400);
//         i--
//     }
// }, 50)


// animate();


// ctx.stroke();




