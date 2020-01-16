//create canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//start position my spaceship
let x = canvas.height / 2 - 30 ;
let y = canvas.width - 50;

// space ship direction move control
let xDirection = 1;

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

if (x > (canvas.width - 60) || x < 0){
    xDirection = -xDirection
}
x += xDirection*4

}
draw();


