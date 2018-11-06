
class Game{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');

  }

  //physics engine
  testCollision(){

  }
  makeShot(){

  }
  drawEverything(){

  }
  
}
  




class GolfBall{
  constructor(x, y){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = x;
    this.y = y;
    this.width = 6;

  }
  drawGolfBall(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    return this;
  }
  moveGolfBallForward(){
    setInterval(()=>{
      this.drawGolfBall();
      this.y -= 1;
      this.ctx.clearRect(0, 0, 200, 500);
      this.drawGolfBall();
    },2);
  }

}


class Hole{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.ceil(Math.random()*170 + 15);
    this.y = 20;
    this.width = 12;
  }
  spawnHole(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 0, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'rgb(0, 0, 0)';
    this.ctx.fill();
    return this;
  }
}
class Obstacle{
      constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.floor(Math.random()*100 + 50);
    console.log(this.x);
    this.y = Math.ceil(Math.random()*200 +100);
    console.log(this.y);
    this.width = Math.floor(Math.random()*3); 
    console.log(this.width);
    this.height = Math.floor(Math.random()*2);
    console.log(this.height);
    this.size = Math.floor(Math.random()*30 + 15);
    console.log(this.size);
  }
  spawnObstacle(){
    this.ctx.beginPath();
    // this.ctx.scale(this.width, this.height);
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
  
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    return this;

  }
}
    // let newGolfBall = new GolfBall(100, 470);

    // let newGolfBall2 = new GolfBall(10, 490);
    // let newGolfBall3 = new GolfBall(25, 490);
    // let newGolfBall4 = new GolfBall(40, 490);
    // let newGolfBall5 = new GolfBall(55, 490);
    let newHole = new Hole();
    let newObstacle = new Obstacle();
    document.getElementById('start-button').onclick = function(){
      newGolfBall.drawGolfBall();
      newGolfBall.drawGolfBall();
      newHole.spawnHole();
      newGolfBall.moveGolfBallForward();
    newGolfBall.drawGolfBall();
    newGolfBall2.drawGolfBall();
    newGolfBall3.drawGolfBall();
    newGolfBall4.drawGolfBall();
    newGolfBall5.drawGolfBall();
    newHole.spawnHole();
    newObstacle.spawnObstacle();
    }


  // moveGolfBall(){
  //   console.log("the golf ball is moving")
  // }