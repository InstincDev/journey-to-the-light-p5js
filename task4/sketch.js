// Use createGraphics() to create a 2D graphics buffer or offscreen canvas
// this allows smooth image() rendering with tint()

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
  img = loadImage("texture.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create canvas for light particle emmitter
  pg = createGraphics(width, height);
  // set image to pg canvas
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
    pg2[i].image(img, 0, 0, width, height);
    // push ball particle and iterator num to bubble array
    bubbles7.push(
      new Ball(
        createVector(random(width / 4, width / 2), random(height / 2, height)),
        10,
        80,
        i
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
    pg2[i].image(img, 0, 0, width, height);
    // push ball particle and iterator num to bubble array
    bubblesGen.push(
      new Ball(
        createVector(random(width), random(height)),
        random(20, 50),
        random(40, 70),
        i
      )
    );
  }
}

function draw() {
  clear();
  background(0);
  // blendMode(ADD);

  // check how long the animation has been running
  checkTime();

  // run animation
  if (counter > 0) {
    light.emit(1.5);
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
}

function checkTime() {
  // use frame count modulo of 60 (1 second)
  // and counter to track time
  if (frameCount % 60 == 0 && counter > 0) {
    counter--;
  }
}
