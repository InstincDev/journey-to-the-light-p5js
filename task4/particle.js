class Particle extends p5.Vector {
  constructor(x, y, color) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    // create random burst of particles
    this.vel.mult(1.5);
    this.acc = createVector(0, 0);
    this.r = 42;
    this.lifetime = 255;
    this.color = color;
  }

  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
    // length of particle trail
    // smaller num longer trail
    this.lifetime -= 7;
  }

  show() {
    
    // fill(color,0,0)
    imageMode(CENTER);
    this.color;
    // tint(0, 0, 255);
    image(img, this.x, this.y, this.r, this.r);
    //ellipse(this.x, this.y, this.r * 2);
  }
}
