let lights = [];
let img;
let counter = 10;

function preload() {
  img = loadImage("texture.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lights.push(new Light(width/2, height/2));
}

function draw() {
  clear();
  background(0);
  blendMode(ADD);

  

  // check how long the animation has been running
  checkTime();

  // move light
  if (counter > 1) {
    for (let light of lights) {
      light.emit(1);
      light.show();
      light.update();
    }
  }
 
}

function checkTime() {
  // use frame count modulo of 60 (1 second)
  // and counter to track time
  if (frameCount % 60 == 0 && counter > 0) {
    // console.log(counter);
    counter--;
  }
}
