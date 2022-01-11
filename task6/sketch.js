// Use createGraphics() to create a 2D graphics buffer or offscreen canvas
// this allows smooth image() rendering with tint()


let paths;
let mapImg;
let counter = 120;

let pg;
let mapPg;

function preload() {
  mapImg = loadImage("blankmap.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mapPg = createGraphics(width, height);
  paths = [
    new Person1(
      [
        createVector((87 / 125) * width, (72.5 / 100) * height),
        createVector((53 / 500) * width, (33 / 100) * height),
        createVector((9 / 50) * width, (31.54 / 50) * height),
        createVector((452.5 / 500) * width, (17 / 50) * height),
        createVector((36.7 / 50) * width, (3 / 4) * height),
      ],
      "red"
    ),
    new Person2(
      [
        createVector((7.6 / 50) * width, (7.5 / 100) * height),
        createVector((9 / 50) * width, (31 / 50) * height),
        createVector((453 / 500) * width, (17.2 / 50) * height),
        createVector((36.9 / 50) * width, (3 / 4) * height),
      ],
      "orange"
    ),
    new Person3(
      [
        createVector((10 / 100) * width, (41.4 / 100) * height),
        createVector((36.6 / 50) * width, (3 / 4) * height),
      ],
      "yellow"
    ),
    new Person4(
      [
        createVector((16.5 / 25) * width, (79 / 100) * height),
        createVector((36.7 / 50) * width, (3 / 4) * height),
      ],
      " green"
    ),
    new Person5(
      [
        createVector((44.2 / 50) * width, (37.4 / 100) * height),
        createVector((14 / 100) * width, (57 / 100) * height),
        createVector((453 / 500) * width, (3 / 10) * height),
        createVector((37.1 / 50) * width, (3 / 4) * height),
      ],
      "blue"
    ),
    new Person6(
      [
        createVector((9 / 50) * width, (31.3 / 50) * height),
        createVector((454.5 / 500) * width, (17 / 50) * height),
        createVector((37.2 / 50) * width, (3 / 4) * height),
      ],
      "purple"
    ),
    new Person7(
      [
        createVector((452 / 500) * width, (3 / 10) * height),
        createVector((36.5 / 50) * width, (3 / 4) * height),
      ],
      "mediumorchid"
    ),
    new Person0(
      // star shape
      [
        //  Right point
        createVector((374.5/500) * width, (374/500)*height),
        //  top right inner point
        createVector((37/50) * width, (92.8/125)*height),
        //  top point
        createVector((367.5/500) * width, (364.5/500)*height),
        //  top left inner point
        createVector((731/1000) * width, (92.8/125)*height),
        //  left point
        createVector((722/1000) * width, (374/500)*height),
        //  bottom left inner point
        createVector((729.5/1000) * width, (189/250)*height),
        //  bottom left point
        createVector((725/1000) * width, (385/500)*height),
        //  bottom inner point
        createVector((367.5/500) * width, (191/250)*height),
        //  bottom right point
        createVector((373/500) * width, (385/500)*height),
        //  bottom right inner point
        createVector((37.1/50) * width, (189/250)*height),
      ],
      "lightcyan"
    )
  ];
}


function draw() {
  background("white");
  // clear()

  image(mapImg, -10, 5, width, height);
  checkTime();
 if(counter > 0){
  
   for(let i = 0; i < paths.length; i++){
    paths[i].display();
  }
    
 }
//  fill("black")
//  text("("+ mouseX +"," + mouseY + ")" , mouseX + 15, mouseY)
}

function checkTime() {
  // use frame count modulo of 60 (1 second)
  // and counter to track time
  if (frameCount % 60 == 0 && counter > 0) {
    counter--;
  }
}
