var col = {
    r: 255,
    g: 255,
    b: 255
}

function setup() {

    var canvas = createCanvas(260,400);
    canvas.parent('sketch');
    background(50);

}

function draw() {

    //background(51);

    //fill(0,255,255);
    //noStroke();

    //ellipse(mouseX,mouseY,15,10);


}

function mousePressed(){
    //background(51);

    fill(col.r,col.g,col.b);
    noStroke();

    ellipse(mouseX,mouseY,10,10,50);
}

function mouseDragged(){
    //background(51);

    fill(col.r,col.g,col.b);
    noStroke();

    ellipse(mouseX,mouseY,10,10,50);
}


function keyPressed(){
    if (keyCode ===  82) {
        background(51);
    } 
}



