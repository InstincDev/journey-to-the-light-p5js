class Particle extends p5.Vector {
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    // create random burst of particles
    this.vel.mult(1.5);
    this.acc = createVector(0, 0);
    this.r = 5;
    this.lifetime = 255;
    this.color = color;
  }

  finished() {
    return this.lifetime < 0;
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
    // length of particle trail
    // smaller num longer trail
    this.lifetime -= counter;
    this.r += 1.5;
  }

  show() {
    imageMode(CENTER);
    image(img, this.x, this.y, this.r, this.r);
  }
}
