// Use createGraphics() to create a 2D graphics buffer or offscreen canvas
// this allows smooth image() rendering with tint()

let canvas;
let testCount = 600; // this is 3 seconds

var capturer = new CCapture({
  format: "webm",
  quality: 100,
});

// general population
let bubblesGen = [];
// main set
let bubbles7 = [];
// colors = [red,orange, yellow, green, blue, indigo, violet]
let persons = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "mediumorchid",
];
let light;
let img;
let img2;
let counter = 10;
let halfCount = counter / 2;
let pg;
// array of createGraphics() canvases, images, and tints
let pg2 = [];

function preload() {
  // center light
  img = loadImage("sun.png");
  // revolving lights
  img2 = loadImage("sun.png");
}

function setup() {
  let p5Canvas = createCanvas(windowWidth, windowHeight);
  canvas = p5Canvas.canvas;
  // capturer.start();

  // create canvas for light particle emmitter
  pg = createGraphics(width, height);
  // set image to pg canvas
  // pg.tint(64, 225, 208);
  pg.tint(255, 255, 255);
  pg.image(img, 0, 0, width, height);
  // create light emmitter
  light = new Lights(width / 2, height / 2, 10);

  // create separate canvases for each bubble
  // so each bubble can have a random color

  // child bubbles

  for (let i = 0; i < 7; i++) {
    // create canvas for ball particle
    pg2[i] = createGraphics(width, height);
    // set randomized colors
    pg2[i].tint(persons[i]);
    // set image to pg2 canvas
    pg2[i].image(img2, 0, 0, width, height);
    // push ball particle and iterator num to bubble array
    bubbles7.push(
      new Ball(
        createVector(random(width / 4, width / 2), random(height / 2, height)),
        10,
        90,
        i,
        persons[i]
      )
    );
  }
  // general bubbles
  for (let i = 8; i < 20; i++) {
    // create canvas for ball particle
    pg2[i] = createGraphics(width, height);
    // set randomized colors
    pg2[i].tint(random(200), random(200), random(200));
    // set image to pg2 canvas
    pg2[i].image(img2, 0, 0, width, height);
    // push ball particle and iterator num to bubble array
    bubblesGen.push(
      new Ball(
        createVector(random(width), random(height)),
        random(4, 10),
        random(50, 80),
        i,
        random(255)
      )
    );
  }
}

function draw() {
  // clear();
  background(0);
  // blendMode(ADD);

  // check how long the animation has been running
  checkTime();

  // run animation
  if (counter > 0) {
    // light.emit(2);
    light.show();
    light.update();

    for (let bubble of bubbles7) {
      bubble.move();
      bubble.display();
      light.attract(bubble);
    }
    for (let bubble of bubblesGen) {
      bubble.move();
      bubble.display();
      light.attract(bubble);
      bubble.remove();
    }
  }

  // if(frameCount <testCount){
  //   capturer.capture(canvas);
  // }else if(frameCount === testCount){
  //   capturer.stop();
  //   capturer.save();
  // }
}

function render() {
  requestAnimationFrame(render);
  // rendering stuff ...
  capturer.capture(canvas);
}

// render()

function checkTime() {
  // use frame count modulo of 60 (1 second)
  // and counter to track time
  if (frameCount % 60 == 0 && counter > 0) {
    counter--;
  }
}
