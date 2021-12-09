class Ball {
  constructor(pos,mass, i) {
    this.pos = pos;
    this.r = random(10, 100);
    this.colorR = random(255);
    this.colorG = random(255);
    this.colorB = random(255);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0,0);
    this.mass = mass;
    this.angle = 0;
    this.angleV = 0.02;
    this.angleA = 0;
    // use iterator num to select pg2 array index
    this.i=i
  }

  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f)
  }

  move() {

    // apply the acceleration the the velocity
    this.vel.add(this.acc);
    
    // limit the velocity
    // this.vel.limit(0.5);
    
    // apply velocity to the pos
    this.pos.add(this.vel);
  //  set angle acc to acc of pos x 
    this.angleA = this.acc.x/50;


    // velocity to acceleration
    this.angleV += this.angleA;
    // angle to velocity
    this.angle += this.angleV;

     // reset acceleration after every frame
    this.acc.set(0,0);
  }


  display() {
    imageMode(CENTER);
    image(pg2[this.i], this.pos.x, this.pos.y, this.r, this.r);
  }
}
