class Person3 {
  constructor(locs, color) {
    this.locs = locs;
    this.color = color;
  }

  display() {
    stroke(this.color);

    // iterate through array of coords
    for (let i = 0; i < this.locs.length; i++) {
      let startX = this.locs[i].x;
      let startY = this.locs[i].y;
      strokeWeight(3);
      noFill();
      
        //create journey lines
        beginShape();
        for (let i = 0; i < this.locs.length; i++) {
          vertex(this.locs[i].x, this.locs[i].y);
        }
        endShape();
        // create destination points
        fill(this.color);
        noStroke();
        ellipse(startX, startY, 7);
      }
    
  }
}
