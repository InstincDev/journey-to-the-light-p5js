// imports for other js files
import Ball from './light.js';

let ball;

new p5(function(p5){
  
  p5.setup = function() {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);


    ball = new Ball();
    p5.smooth();
  }

  
  p5.draw = function() {
    p5.background(0);
    ball.display(p5);
    ball.move(p5);
    
  }


});





