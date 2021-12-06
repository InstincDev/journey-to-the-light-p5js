class Light{
    constructor(){
        this.pos = createVector(200,200);
        this.xSpeed = -10;
		this.ySpeed = 5;
        this.angle = 0;
        this.particles = [];
    }

    emit(num){
        // push particles into particle array
        for(let i=0; i<num; i++){
            this.particles.push(new Particle(this.pos.x, this.pos.y, tint(0,255,255)));
            this.particles.push(new Particle(this.pos.x, this.pos.y, tint(0,0,255)));
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

    //    noStroke()
    //     fill('white')
    //     this.r = map(sin(this.angle), -1,1,13,17)
    //     circle(this.pos.x,this.pos.y,this.r*2);
    //     this.angle += 0.4;
    }

    move(){
        this.pos.x += this.xSpeed;
        this.pos.y += this.ySpeed;
    
        // 	wall conditions
        if (this.pos.x <= 0  || this.pos.x  >= width) {
          this.xSpeed *= -1;
        }
    
        // 	top and bottom conditions
        if (this.pos.y  >= height || this.pos.y <= 0) {
            this.ySpeed *= -1;
        }
    }

    show(){
        for(let particle of this.particles){
            particle.show();
        }
    }
}