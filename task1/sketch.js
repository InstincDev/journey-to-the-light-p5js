// Use createGraphics() to create a 2D graphics buffer or offscreen canvas
// this allows smooth image() rendering with tint()

let canvas;
let testCount = 650; // this is 3 seconds

var capturer = new CCapture({
  format: "webm",
  quality: 100,
});


let lights = [];
let img;
let counter = 10;

function preload() {
  img = loadImage("sun.png");
}

function setup() {
  let p5Canvas = createCanvas(windowWidth, windowHeight);
  canvas = p5Canvas.canvas;
  
  capturer.start();


  lights.push(new Light(-450, random(200)));
}

function draw() {
  clear();
  background(0);
  blendMode(ADD);

  let force = createVector(.5, 1.5);
  let wind = createVector(2, 0.5);

  // check how long the animation has been running
  checkTime();

  // run animation
  if (counter > 1) {
    for (let light of lights) {
      light.emit(7);
      light.applyForce(force);
      light.applyForce(wind);
      light.show();
      light.update();
      light.move();
    }
  }
  // stop light and move to center of screen
  else {
    for (let light of lights) {
      light.pos = createVector(width / 2, height / 2);
      light.show2();
    }
  }

if(frameCount <testCount){
    capturer.capture(canvas);
  }else if(frameCount === testCount){
    capturer.stop();
    capturer.save();
  }
}

function render() {
  requestAnimationFrame(render);
  // rendering stuff ...
  capturer.capture(canvas);
}

render()

function checkTime() {
  // use frame count modulo of 60 (1 second)
  // and counter to track time
  if (frameCount % 60 == 0 && counter > 0) {
    // console.log(counter);
    counter--;
  }
}
