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
       stroke(this.color);
        strokeWeight(3);
        
        // beginShape();
        // vertex(this.locs[0].x,this.locs[0].y);
        // vertex(this.locs[1].x, this.locs[1].y);
        // vertex(this.locs[2].x, this.locs[2].y);
        // vertex(this.locs[3].x, this.locs[3].y);
        // vertex(this.locs[4].x, this.locs[4].y);
        // endShape();
    
    for (let i = 0; i < this.locs.length; i++) {
      
        let startX = this.locs[i].x;
        let startY = this.locs[i].y;
      noFill();
        // set line start and end points
        beginShape();
        for (let i = 0; i < this.locs.length; i++) {
          vertex(this.locs[i].x, this.locs[i].y);    
        } 
        endShape()
      
        fill("white")
        noStroke();
        ellipse(startX, startY, 7);
      
      

    }
 
  }

  set(){
    // set location for shape vertex
    
  }

}
