// Use createGraphics() to create a 2D graphics buffer or offscreen canvas
// this allows smooth image() rendering with tint()


let bubbles = [];
let light;
let img;
let img2;
let counter = 12;
let pg;
// array of createGraphics() canvases, images, and tints
let pg2=[];

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
  for (let i = 0; i < 25; i++) {
    // create canvas for ball particle
    pg2[i] = createGraphics(width, height);
    // set randomized colors
    pg2[i].tint(random(255), random(255), random(255));
    // set image to pg2 canvas
    pg2[i].image(img, 0, 0, width, height);
    // push ball particle and iterator num to bubble array
    bubbles.push(
      new Ball(createVector(random(width), random(height)), random(20, 50),i)
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

    for (let bubble of bubbles) {
      bubble.move();
      bubble.display();
      light.attract(bubble);
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
