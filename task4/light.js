class Lights extends p5.Vector {
  constructor(x, y, m) {
    super(x, y);
    this.pos = createVector(x, y);
    this.xSpeed = -10;
    this.ySpeed = 5;
    this.angle = 0;
    this.mass = m;
    this.particles = [];
    this.r = 50;
    this.vel = p5.Vector.random2D();
    // create random burst of particles
    this.vel.mult(0.3);
    this.acc = createVector(0, 0);
    this.r = 50;
    this.lifetime = 255;
  }

  attract(bubble) {
    // the attractors pos - the objets pos
    let force = p5.Vector.sub(this.pos, bubble.pos);
    //  magnitude of the distance squared
    // and then constrained
    let distanceSq = constrain(force.magSq(), 125, 2500);

    // gravitational constant
    let G = 85;
    // strength of the gravitational force
    let strength = (G * (this.mass * bubble.mass)) / distanceSq;
    // set force to the strength of the gravitational force
    force.setMag(strength);
    // apply force to mover
    bubble.applyForce(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
    // length of particle trail
    // smaller num longer trail
    this.lifetime -= counter -2;
    this.r++;
  }

  show() {
    imageMode(CENTER);
    image(pg, this.pos.x, this.pos.y, this.r, this.r);
  }
}
