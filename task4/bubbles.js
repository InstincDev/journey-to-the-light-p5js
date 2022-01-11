class Ball {
  constructor(pos, mass, r, i,color) {
    this.pos = pos;
    this.r = r;
    this.vel = p5.Vector.random2D();
    this.vel.mult(6);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.angle = 0;
    this.angleV = 0.02;
    this.angleA = 0;
    // use iterator num to select pg2 array index
    this.i = i;
    this.lifetime = 255;
    this.color = color
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  finished() {
    return this.lifetime < 0;
  }

  remove() {
    for (let i = bubblesGen.length - 1; i >= 0; i--) {
      // control the lifetime of the general bubbles
      this.lifetime -= random(0.09,0.1);
      if (bubblesGen[i].finished()) {
        bubblesGen.splice(i, 1);
      }
    }
  }

  move() {
    // apply the acceleration the the velocity
    this.vel.add(this.acc);

    // limit the velocity
    // this.vel.limit(0.5);

    // apply velocity to the pos
    this.pos.add(this.vel);
    //  set angle acc to acc of pos x
    this.angleA = this.acc.x / 40;

    // velocity to acceleration
    this.angleV += this.angleA;
    // angle to velocity
    this.angle += this.angleV;

    // reset acceleration after every frame
    this.acc.set(0, 0);
  }

  display() {
    imageMode(CENTER);
    image(pg2[this.i], this.pos.x, this.pos.y, this.r, this.r);
    fill(this.color);
    // noStroke();
    // ellipse(this.pos.x, this.pos.y, this.r/4)
  }
}
