//let y = 50.0;
let speed = 1.0;
let radius = 15.0;
let direction = 1;
let prevX=0,prevY=0;
let canvas;
let img;
let num = 500;
let x = [num];
let y = [num];

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function preload(){
    img=loadImage('data/face.png');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1')
    strokeWeight(20);
    ellipseMode(RADIUS);
    imageMode(CENTER);
}

function draw() {
    //background(255);
    // put drawing code here
    //fill(0, 12);
    //rect(100, 100, 48, 48);
    stroke(255,0,0);
    //line(mouseX, mouseY, prevX, prevY);
    //prevX=mouseX;
    //prevY=mouseY;

/*    for (let i = num-1; i > 0; i--) {
        x[i] = x[i-1];
        y[i] = y[i-1];
    }*/

    /*for (let i = 0; i < num-1; i++) {
        x[i] = x[num-1];
        y[i] = y[num-1];
    }*/

    // Add the new values to the beginning of the array
    x[0] = mouseX;
    y[0] = mouseY;
    // Draw the circles
    for (let i = 0; i < num; i++) {
        //ellipse(x[i], y[i], t/2, t/2);
        image(img,x[i],y[i],60,60);


    }
}
