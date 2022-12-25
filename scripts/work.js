let canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1')

    if(window.screen.width <= 820){
        strokeWeight(5);
    }else{
        strokeWeight(10);
    }
}

function draw() {
    stroke(0);

    if(mouseX !== 0 && mouseY !== 0)
    line(mouseX, mouseY, pmouseX, pmouseY);
}