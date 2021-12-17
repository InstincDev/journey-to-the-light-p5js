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
  
  mapImg = loadImage("map.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // create canvas for light particle emmitter
  

   
  mapPg = createGraphics(width, height);
  // set image to pg canvas

  // 
   
  

  // child bubbles

  // for (let i = 0; i < 1; i++) {
  //   // create canvas for ball particle
    
  //   bubbles7.push(
  //    
  //   );
  // }
  mover =new Travel();
}




function draw() {
// clear();
background("aqua")
 tint(255,227);
 image(mapImg,-5,5, width, height);
  
  noStroke();
 fill("white") 
 ellipse((87/125)*width, (73/100)*height, 10)
 ellipse((53/500)*width, (33/100)*height, 10)
 ellipse((9/50)*width, (31/50)*height, 10)
 ellipse((453/500)*width, (17/50)*height, 10)
 ellipse((37/50)*width, (3/4)*height, 10)


text(floor(mouseX) + "," + floor(mouseY), mouseX + 10, mouseY)
  checkTime();
  mover.move();

}

function checkTime() {
  // use frame count modulo of 60 (1 second)
  // and counter to track time
  if (frameCount % 60 == 0 && counter > 0) {
    counter--;
  }
}
