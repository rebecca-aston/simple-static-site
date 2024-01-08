/*

These two events are the desktop and touch device equivalents:
https://p5js.org/reference/#/p5/touchMoved
https://p5js.org/reference/#/p5/mouseDragged

//Start of an interaction
https://p5js.org/reference/#/p5/touchStarted
https://p5js.org/reference/#/p5/mousePressed

//End of an interaction
https://p5js.org/reference/#/p5/touchEnded
https://p5js.org/reference/#/p5/mouseReleased

HOWEVER, we are using these events on the canvas a p5.Element in this sketch:
https://p5js.org/reference/#/p5.Element 
They all have the same names for events on an element, except mouseDragged is:
https://p5js.org/reference/#/p5.Element/mouseMoved

*/


let diameter;
let canvas;
let backgroundRed = 0;
let circleBlue = 255;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //if you set variables in setup, you need to update in windowResized
  diameter = width / 6;

  //provide touch device support by providing a callback to desktop & touch events 
  canvas.touchMoved(moved);
  canvas.mouseMoved(moved);

  canvas.touchStarted(started);
  canvas.mousePressed(started);

  canvas.touchEnded(ended);
  canvas.mouseReleased(ended);
}

function draw() {
  background(backgroundRed, 0, 0);
  fill(0,0,circleBlue);
  circle(mouseX, mouseY, diameter);
}

function moved(){
  circleBlue = map(mouseX,0,width,100,255);
  console.log("moved");
}

function started(){
  backgroundRed = 255;
}

function ended(){
  backgroundRed = 0;
}

//event listener function runs every time browser window resized
function windowResized() {
  //resize our canvas to the width and height of our browser window
  resizeCanvas(windowWidth, windowHeight);

  //update our variables
  diameter = width / 6;
}

function keyPressed() {
  //toggle fullscreen on or off
  if (key == 'f') {

    //get current full screen state https://p5js.org/reference/#/p5/fullscreen
    let fs = fullscreen();

    //switch it to the opposite of current value
    console.log("Full screen getting set to: " + !fs);
    fullscreen(!fs);
  }

}