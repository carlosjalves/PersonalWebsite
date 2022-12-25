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

    if(window.screen.width <= 820 && mouseX === 0){
        let p = createP('Tap on screen');
        p.style('font-size', '12px');
        p.style('opacity', 0.2);
        p.position(windowWidth/2, windowHeight/2);
        p.style('transform', 'translate(-50%,-50%)')
    }
}

function draw() {
    if(mouseX !== 0 && mouseY !== 0)
    image(img,mouseX,mouseY,80,80);
}

function mousePressed() {
    removeElements(); // this will remove the p element
}