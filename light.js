
// ball object and functions
export default class Ball {
	constructor() {
		this.x = 100;
		this.y = 100;
		this.size = 50;
		this.xSpeed = -10;
		this.ySpeed = 4;
		this.color = 'rgba(255,255,255,0.2)'
	}

  // 	show ball
  display(p5) {
    p5.noStroke();
    p5.fill('white');
    p5.ellipse(this.x, this.y, this.size/1.5, this.size/1.5);
    p5.fill(this.color);
    p5.ellipse(this.x, this.y, this.size, this.size);
  }

  // move ball
  move(p5) {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // 	wall conditions
    if (this.x <= -this.size *2  || this.x  >= p5.width + this.size*2 ) {
      this.xSpeed *= -1;
    }


    // 	top and bottom conditions
    if (this.y  >= p5.height + this.size *2 || this.y <= -this.size *2) {
        this.ySpeed *= -1;
    }
  }
}

