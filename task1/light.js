class Light extends p5.Vector {
  constructor(x, y) {
    super(x, y);
    this.pos = createVector(x, y);
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.angle = 0;
    this.particles = [];
    this.wall = 460;
    this.r = 400;
    this.theta =0;
  }

  emit(num) {
    // push particles into particle array
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.pos.x, this.pos.y));
    }
  }

  applyForce(force) {
    // apply the forces to the particles
    for (let particle of this.particles) {
      particle.applyForce(force);
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      // control the lifetime of the particle
      if (this.particles[i].finished()) {
        this.particles.splice(i, 1);
      }
    }
    //
  }

  move() {
    this.pos.x += this.xSpeed += 1.3;
    this.pos.y += this.ySpeed += 0.5;
    // 	wall conditions
    if (this.pos.x <= -this.wall || this.pos.x >= width + this.wall) {
      this.xSpeed *= -1;
    }

    // 	top and bottom conditions
    if (this.pos.y >= height + this.wall || this.pos.y <= -this.wall) {
      this.ySpeed *= -1;
    }
  }

  show() {
    image(img, this.pos.x, this.pos.y, this.r, this.r);
    for (let particle of this.particles) {
      particle.show();
    }
  }


  show2() {
    let diam = 100 + sin(this.theta)* 500/2;
    imageMode(CENTER);
    image(img, this.pos.x, this.pos.y, diam, diam);
    this.theta += 0.01;
  }
}
