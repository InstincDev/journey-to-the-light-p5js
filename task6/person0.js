class Person0 {
    constructor(locs, color) {
      this.locs = locs;
      this.color = color;
    }
  
    display() {
      
  
      // create star at home location
      strokeWeight(2)
      stroke("paleturquoise")
      fill(this.color)
      for (let i = 0; i < this.locs.length; i++) {  
          //create star lines
          beginShape();
          for (let i = 0; i < this.locs.length; i++) {
            vertex(this.locs[i].x, this.locs[i].y);
          }
          endShape(CLOSE);
          
        
      
    }
  }
}
  