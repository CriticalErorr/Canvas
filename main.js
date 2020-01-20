//create canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//start position my spaceship
let x = canvas.height / 2 - 30;
let y = canvas.width - 50;
let fire = [];
let keyDown = {};
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
        this.ctx.rect(x + 20, startCanonBall, 20, 20);
        this.ctx.strokeStyle = "gold";
        this.ctx.fillStyle = "gold";
        this.ctx.fill();
        this.ctx.stroke();
    }
}


// event by pressing key
// document.onkeydown = checkKey;
document.addEventListener('keydown', (event) => {
    // function detect what presst


    // event = event || window.event;
    // l key
    if (event.keyCode == '37') {
        keyDown['LEFT'] = true;
       
    }
    // r key
    else if (event.keyCode == '39') {
        keyDown['RIGHT'] = true;
        
    }
    // space
    else if (event.keyCode == '32') {
        keyDown['SPACE'] = true;
        fire.push(new Fire_Ball);
        console.log(fire);
    }
});

document.addEventListener('keyup', (eventup) => {
    // l key
    if (eventup.keyCode == '37') {
        delete keyDown['LEFT'];
        
    }
    // r key
    else if (eventup.keyCode == '39') {
        delete keyDown['RIGHT'];
        
    }
    // space
    else if (eventup.keyCode == '32') {
        delete keyDown['SPACE'];
       

    }

});

//draw function
function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ////draw spaceship////
    // for (let i = 0 ; i < fire.length ; i++){
    //     return fire[i];
    // }
    new Fire_Ball(x, y);
    new Space_Ship(x, y);
    if ('RIGHT' in keyDown && x < canvas.width - 90) {
        xDirection = xDirection + 10;
    }
    else if ('LEFT' in keyDown && x > 30) {
        xDirection = xDirection - 10;
    }
    else if ('SPACE' in keyDown) {
        for (let i = 0 ; i <fire.length ; i++){
            return fire[i];
        }
        yDirectionShooting = +5;
    }
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





