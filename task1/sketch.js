let lights = [];
let img;
let counter = 5;

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
 checkTime();

  if(counter > 1){
    for (let light of lights) {
      light.emit(1);
      light.applyForce(force);
      light.applyForce(wind);
      light.show();
      light.update();
      light.move();
    }
  } else{
    // lights.push(new Light(200, 200));
      for (let light of lights) {
        light.pos = createVector(width/2,height/2);
        light.emit(1);
        light.applyForce(force);
        light.applyForce(wind);
        light.show();
        light.update();
        // light.move();
      }
    }

  
}

function checkTime(){
  if(frameCount % 60 == 0 && counter > 0){
    console.log(counter)
  counter --;
  }
}
