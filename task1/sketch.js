let lights = [];
let img;
let counter = 10;

function preload() {
  img = loadImage("texture.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lights.push(new Light(random(200), random(200)));
}

function draw() {
  clear();
  background(0);
  blendMode(ADD);

  let force = createVector(0, 0);
  let wind = createVector(0, 0);

  // check how long the animation has been running
  checkTime();

  // move light
  if (counter > 1) {
    for (let light of lights) {
      light.emit(2);
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
      light.emit(1);
      light.applyForce(force);
      light.applyForce(wind);
      light.show();
      light.update();
      // light.move();
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
