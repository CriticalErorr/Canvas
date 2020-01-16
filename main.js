//create canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//start position my spaceship
let x = canvas.height / 2 - 30 ;
let y = canvas.width - 50;

// space ship direction move control
let xDirection = canvas.width /2 - 30;
// event by pressing key
document.onkeydown = checkKey;

// function detect what presst
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        xDirection = xDirection -10;
    }
    else if (e.keyCode == '39') {
        xDirection = xDirection + 10;
    }
    else if (e.keyCode == '32') {
       // space press
    }

}

// fire direction move control
let yDirectionShooting = 1;

//draw function
function draw(){
    requestAnimationFrame(draw);
    ctx.clearRect(0,0,canvas.width,canvas.height);
// draw spaceship
ctx.beginPath();
let spaceship = ctx.rect(x, y, 60,30);
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();

// draw canon
ctx.beginPath();
let canon = ctx.rect(x+20, y-20, 20,20);
ctx.strokeStyle = "deeppink";
ctx.fillStyle = "deeppink";
ctx.fill();
ctx.stroke();

if (x > (canvas.width - 90) || x < 30){
    xDirection = -xDirection
}
x = xDirection

}
draw();


