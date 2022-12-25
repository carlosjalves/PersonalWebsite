let canvas;
let img;

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
    imageMode(CENTER);
}

function draw() {

    image(img,mouseX,mouseY,80,80);

}
