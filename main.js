let keysBeingPressed =[];
let theGame;
class Game{
  constructor(){
    this.golfBallTwo = new GolfBall(100, 470);
    this.golfBallHolder = [];
    this.obstacle = new Obstacle();
    this.hole = new Hole();
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.lives = 5;
  
  //physics engine
  setInterval(()=>{
    this.ctx.clearRect(0, 0, 200, 500);
    this.drawEverything();

  // this.golfBallTwo.moveGolfBallForward(); 
 
  setTimeout(()=>{
    this.golfBallTwo.moveGolfBallForward()
  },3000);
},100)
  }
  drawEverything(){
    this.golfBallTwo.drawGolfBall();
    this.obstacle.drawObstacle();
    this.hole.spawnHole();
    this.extraLives(10);
    this.extraLives(25);
    this.extraLives(40);
    this.extraLives(55);
    return this;
  }
  extraLives(x){
    this.x = x;
    this.y = 480;
    this.width = 6;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();


// this.golfBallHolder2 = [
//   this.extraLives(55),
//   this.extraLives(25),
//   this.extraLives(40),
//   this.extraLives(10)
// ];
// for(let i = 0; i < this.golfBallHolder2.length; i++){
//   this.golfBallHolder.push(this.golfBallHolder2[i])
  
  

// }
// return this.golfBallHolder;
// }
  

}
}

class GolfBall{
  constructor(x, y){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = x;
    this.y = y;
    this.width = 6;
    this.move();
    //goint to try to call moveForward inside move
    // this.moveGolfBallForward();
    // this.moveGolfBallForward();
    // this.updateBall();
  }
  drawGolfBall(){
   
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
  }



  // updateBall(){
  //   this.y += 1;
  //   return this;
  // }
  moveGolfBallForward(){

    // setTimeout(()=>{
      // moves golfball up the y axis
      // setTimeout(()=>{
      this.y -= 5;

    // },2000);
      return this
    // },1000)
}
// trying to set time out so the golfball moves automatically
  move(){
    this.canMove(this.x, this.y);
    //console not recognizing commands  
    if(this.commands = ("ArrowUp")){
      // setTimeout(()=>{
        this.moveGolfBallForward();
        console.log('hey');    
      // },2000)
      
      }
      return this;
      }
      

//checking if objects can move or not
  
  canMove(futureX, futureY){
    let result = true;
    if(futureX < 0 || futureX > 200 || futureY < 0 || futureY > 500){
      result = false;
    }
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
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
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
  drawObstacle(){
    this.ctx.beginPath();
    // this.ctx.scale(this.width, this.height);
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    return this;
  }
}
document.getElementById('start-button').onclick = function(){
  theGame = new Game();
}
document.onkeydown = function(e){
  let commands = ['ArrowLeft', 'ArrowRight', 'ArrowUp']
  if(commands.includes(e.key)){
    e.preventDefault();
    keysBeingPressed.push(e.key);
  }
  if(!keysBeingPressed.includes(e.key)){
    keysBeingPressed.push(e.key);
    console.log(e.which);
  }
   
}



document.onkeyup = function(e){
  let theIndex = keysBeingPressed.indexOf(e.key);
  console.log(theIndex)
  if(theIndex != -1){
    keysBeingPressed.splice(theIndex,1)
    console.log(keysBeingPressed);
  }
}



  // let newGolfBall = new GolfBall(100, 470);
    // let newObstacle = new Obstacle();
    // let newGolfBall2 = new GolfBall(10, 490);
    // let newGolfBall3 = new GolfBall(25, 490);
    // let newGolfBall4 = new GolfBall(40, 490);
    // let newGolfBall5 = new GolfBall(55, 490);
    // let newHole = new Hole();
    // let newObstacle = new Obstacle();

    // newHole.spawnHole();
    // newObstacle.spawnObstacle();
    // newGolfBall.drawGolfBall();
    // newGolfBall2.drawGolfBall();
    // newGolfBall3.drawGolfBall();
    // newGolfBall4.drawGolfBall();
    // newGolfBall5.drawGolfBall();
    // newGolfBall.moveGolfBallForward();
    // // newHole.spawnHole();
    // newObstacle.spawnObstacle();


  // moveGolfBall(){
  //   console.log("the golf ball is moving")
  // }





