// Use createGraphics() to create a 2D graphics buffer or offscreen canvas
// this allows smooth image() rendering with tint()

let paths;

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
  // colors = [red,orange, yellow, green, blue, indigo, violet]
  paths = [
    new Travel(
      [
        createVector((87 / 125) * width, (72.5 / 100) * height),
        createVector((53 / 500) * width, (33 / 100) * height),
        createVector((9 / 50) * width, (31.54 / 50) * height),
        createVector((452.5 / 500) * width, (17 / 50) * height),
        createVector((36.7 / 50) * width, (3 / 4) * height),
      ],
      "red"
    ),
    new Travel(
      [
        createVector((7 / 50) * width, (7 / 100) * height),
        createVector((9 / 50) * width, (31 / 50) * height),
        createVector((453 / 500) * width, (17.2 / 50) * height),
        createVector((36.9 / 50) * width, (3 / 4) * height),
      ],
      "orange"
    ),
    new Travel(
      [
        createVector((10 / 100) * width, (41.4 / 100) * height),
        createVector((36.6 / 50) * width, (3 / 4) * height),
      ],
      "yellow"
    ),
    new Travel(
      [
        createVector((16.5 / 25) * width, (79 / 100) * height),
        createVector((36.7 / 50) * width, (3 / 4) * height),
      ],
      " green"
    ),
    new Travel(
      [
        createVector((44.2 / 50) * width, (37.4 / 100) * height),
        createVector((14 / 100) * width, (57 / 100) * height),
        createVector((453 / 500) * width, (3 / 10) * height),
        createVector((37.1 / 50) * width, (3 / 4) * height),
      ],
      "blue"
    ),
    new Travel(
      [
        createVector((9 / 50) * width, (31.3 / 50) * height),
        createVector((454.5 / 500) * width, (17 / 50) * height),
        createVector((37.2 / 50) * width, (3 / 4) * height),
      ],
      "purple"
    ),
    new Travel(
      [
        createVector((452 / 500) * width, (3 / 10) * height),
        createVector((36.5 / 50) * width, (3 / 4) * height),
      ],
      "mediumorchid"
    ),
  ];
}

function draw() {
  checkTime();

  if (counter > 0) {
    background("aqua");
    tint(255, 150);
    image(mapImg, -10, 5, width, height);

    for (let path of paths) {
      path.move();
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
