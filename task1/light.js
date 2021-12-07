class Light{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.xSpeed = 35;
		this.ySpeed = 25;
        this.angle = 0;
        this.particles = [];
        this.wall = 350
        // this.color = color;
    }

    emit(num){
        // push particles into particle array
        for(let i=0; i<num; i++){
            this.particles.push(new Particle(this.pos.x, this.pos.y));
        }
    }

    applyForce(force){
        // apply the forces to the particles
        for(let particle of this.particles){
            particle.applyForce(force);
        }
    }

    update(){
        for (let particle of this.particles) {
            particle.update();
          }

        for(let i = this.particles.length - 1; i >=0; i--){
            // control the lifetime of the particle
            if(this.particles[i].finished()){
                this.particles.splice(i,1)
            }
        }
    }

    move(){
        this.pos.x += this.xSpeed;
        this.pos.y += this.ySpeed;
    
        // 	wall conditions
        if (this.pos.x <= -this.wall  || this.pos.x  >= width + this.wall) {
          this.xSpeed *= -1;
        }
    
        // 	top and bottom conditions
        if (this.pos.y  >= height + this.wall || this.pos.y <= -this.wall) {
            this.ySpeed *= -1;
        }
    }

    show(){
        for(let particle of this.particles){
            particle.show();
        }
    }
}