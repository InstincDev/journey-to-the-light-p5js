
class Travel{
    constructor(){
        this.locs = [createVector((87/125)*width, (73/100)*height),
            createVector((53/500)*width, (33/100)*height),
            createVector((9/50)*width, (31/50)*height),
            createVector((453/500)*width, (17/50)*height)]
        
        this.speed = 1;
    }

    move(){
        fill('red');
        stroke('red')
        strokeWeight(3)
        let newArr = this.locs.slice(0,1) 
        // console.log(newArr)
        line(newArr.x,newArr.y,this.locs[0].x,this.locs[0].y)
      this.locs[0].x += this.speed;
        
    }

    next(){
        return point = this.locs[0];
        }
}