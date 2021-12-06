let lights = [];
let img;

function preload() {
  img = loadImage("texture.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lights.push(new Light(200, 200));
}

function draw() {
  clear();
  background(0);
  blendMode(ADD);

  let force = createVector(0, 0);
  let wind = createVector(0, 0);

  for (let light of lights) {
    light.emit(1);
    light.applyForce(force);
    light.applyForce(wind);
    light.show();
    light.update();
    light.move();
  }
}
