//create canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//start position my spaceship
let x = canvas.height / 2 - 30;
let y = canvas.width - 50;

// fire direction move control
let startCanonBall = canvas.height - 70;
let yDirectionShooting = 0;
// space ship direction move control
let xDirection = canvas.width / 2 - 30;

class Space_Ship {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.ctx.beginPath();
        this.spaceship = this.ctx.rect(x, y, 60, 30);
        this.ctx.strokeStyle = "green";
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.beginPath();
        //// draw canon ////
        this.canon = ctx.rect(x + 20, y - 20, 20, 20);
        this.ctx.strokeStyle = "deeppink";
        this.ctx.fillStyle = "deeppink";
        this.ctx.fill();
        this.ctx.stroke();
        ////////////////////
    }
}

class Fire_Ball {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.ctx.beginPath();
        this.canonBall = this.ctx.rect(x + 20, startCanonBall, 20, 20);
        this.ctx.strokeStyle = "gold";
        this.ctx.fillStyle = "gold";
        this.ctx.fill();
        this.ctx.stroke();
    }
}


// event by pressing key
document.onkeydown = checkKey;

// function detect what presst
function checkKey(event) {

    event = event || window.event;
    // l key
    if (event.keyCode == '37' && x >= 30) {
        xDirection = xDirection - 10;
    }
    // r key
    else if (event.keyCode == '39' && x <= canvas.width - 90) {
        xDirection = xDirection + 10;
    }
    // space
    else if (event.keyCode == '32') {
        yDirectionShooting = +5;
        console.log(window.event);
    }

}

//draw function
function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ////draw spaceship////
    new Fire_Ball(x, y);
    new Space_Ship(x, y);

    x = xDirection
    // restar fire
    if (startCanonBall < 10) {
        startCanonBall = canvas.height - 70;
        yDirectionShooting = 0;
    }
    // fire direction up
    startCanonBall -= yDirectionShooting;

}
draw();






