class Lights {
    constructor(x,y,m){
        this.pos = createVector(x,y);
        this.xSpeed = -10;
		this.ySpeed = 5;
        this.angle = 0;
        this.mass = m;
        this.particles = [];
    }

    emit(num){
        // push particles into particle array
        for(let i=0; i<num; i++){
            this.particles.push(new Particle(this.pos.x, this.pos.y));
            
        }
    }

    attract(bubble){
        // the attractors pos - the objets pos
        let force = p5.Vector.sub(this.pos, bubble.pos);
        //  magnitude of the distance squared
        // and then constrained 
        let distanceSq = constrain(force.magSq(), 125,2500);

        // gravitational constant
        let G = 25;
        // strength of the gravitational force
        let strength = G * (this.mass * bubble.mass) / distanceSq; 
        // set force to the strength of the gravitational force
        force.setMag(strength);
        // apply force to mover
        bubble.applyForce(force);
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

    show(){
        for(let particle of this.particles){
            particle.show();
        }
    }
}