class Light{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.particles = [];
    }

    emit(num){
        // push particles into particle array
        for(let i=0; i<num; i++){
            this.particles.push(new Particle(this.pos.x, this.pos.y));
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


    show(){
        for(let particle of this.particles){
            particle.show();
        }
    }
}