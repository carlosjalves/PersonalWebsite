let canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1')
    strokeWeight(10);
}

function draw() {
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
}