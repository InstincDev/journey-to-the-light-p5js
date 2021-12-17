class Travel {
  constructor(locs, color) {
    // create 2 sets of each coord, use the first set for (startX, startY),
    // use the second set for (endX, endY). Mutate the second set.
    this.locs = locs;
    this.color = color
    this.speed = 1;
  }

  move() {
      
    // iterate through array of coords
    for (let i = 0; i < this.locs.length; i ++) {
      
      let startX = this.locs[i].x;
      let startY = this.locs[i].y;
      let endX = this.locs[i+1].x;
      let endY = this.locs[i+1].y;
      
      // set line start and end points
       
      stroke(this.color);
      strokeWeight(3);
      line(startX, startY, endX, endY);
      
      fill("white")
      noStroke();
      ellipse(startX, startY, 10);

    }
 
  }

}
