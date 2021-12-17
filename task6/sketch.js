// Use createGraphics() to create a 2D graphics buffer or offscreen canvas
// this allows smooth image() rendering with tint()

// main set
let bubbles7 = [];
// colors = [red,orange, yellow, green, blue, indigo, violet]
let persons = [
  "red",
  "orange",
  "yellow",
  " green",
  "blue",
  "indigo",
  "mediumpurple",
];

let mapImg;
let counter = 10;
let halfCount = counter / 2;
let pg;
let mapPg;
// array of createGraphics() canvases, images, and tints
let pg2 = [];
let mover;
function preload() {
  mapImg = loadImage("map.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mapPg = createGraphics(width, height);
  mover = new Travel(
    [
      createVector((87 / 125) * width, (73 / 100) * height),
      createVector((87 / 125) * width, (73 / 100) * height),
      createVector((53 / 500) * width, (33 / 100) * height),
      createVector((53 / 500) * width, (33 / 100) * height),
      createVector((9 / 50) * width, (31 / 50) * height),
      createVector((9 / 50) * width, (31 / 50) * height),
      createVector((453 / 500) * width, (17 / 50) * height),
      createVector((453 / 500) * width, (17 / 50) * height),
      createVector((37 / 50) * width, (3 / 4) * height),
      createVector((37 / 50) * width, (3 / 4) * height),
    ],
    "red"
  );
}

function draw() {
  // clear();
  background("aqua");
  tint(255, 150);
  image(mapImg, -10, 5, width, height);

  noStroke();
  fill("white");
  // mover.move();

  checkTime();
  text(floor(mouseX) + "," + floor(mouseY), mouseX + 10, mouseY);
}

function checkTime() {
  // use frame count modulo of 60 (1 second)
  // and counter to track time
  if (frameCount % 60 == 0 && counter > 0) {
    counter--;
  }
}
