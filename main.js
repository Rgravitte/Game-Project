let keysBeingPressed =[];
let theGame;
let theGame2;
let anotherBall;
let hole2;
let anotherObstacle;
class Game{
  constructor(){
    this.x = 100;
    this.y = 470;
    this.golfBallTwo = new GolfBall(this.x, this.y);
    this.golfBallHolder = [];
    this.obstacle = new Obstacle();
    this.obstacleHolder = [];
    this.hole = new Hole();
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.lives = 5;

    this.ctx.save();
    setInterval(()=>{

      this.ctx.clearRect(0, 0, 200, 500);
      
      this.hole.spawnHole();
      
      this.golfBallTwo.drawGolfBall();
      
      this.obstacle.drawObstacle();

      this.hole.madePuttCollision();

    },100)
  }

}
class GolfBall{
  constructor(x, y){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = x;
    this.y = y;
    this.width = 6;}
    
    moveleft() {
      if(this.y < 468){
      if(this.canMove(this.x - 8, this.y)){   
       this.x -= 8;
     }
     else{
       this.x += 30;
}
}
  }
  moveRight(){
    if(this.y < 468){
    if(this.canMove(this.x + 8, this.y)){
    this.x += 8;
  }
   else{
    this.x -=30;
    }
  }
}
  drawGolfBall(){
    true;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();}
  moveGolfBallForward(){
    if(this.canMove(this.x, this.y - 5)){
      if(this.y >= 0){
        true;
      this.y -= 5;
      }
    }else{
    false;
    }
  } 
  move(){
    // this.canMove(this.x, this.y);
    let int = setInterval(()=>{
      if(this.canMove(this.x, this.y - 5)){
        this.moveGolfBallForward();
      }else{
        clearInterval(int);
      }
    },50);
    
    }
  canMove(futureX, futureY){
    let result = true;
    if(futureX < 0 || futureX > 200 || futureY < 0 || futureY > 500){
      result = false;
    }
    if(futureX < theGame.obstacle.x + theGame.obstacle.width && futureX+this.width > theGame.obstacle.x && futureY < theGame.obstacle.y+theGame.obstacle.width && futureY+this.width > theGame.obstacle.y ){
      result = false;
      theGame.lives - 1;
      result = false;
      alert('that was a lake');
     
  }
  return result;
  }
}
class Hole{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.ceil(Math.random()*170 + 15);
    this.y = 20;
    this.width = 12;}
  spawnHole(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
    return this;}

    madePuttCollision(){
     
    if(theGame.golfBallTwo.x < this.x + this.width && this.x  + this.width > theGame.golfBallTwo.x && theGame.golfBallTwo.y <= this.y){
  
 
      
    
      this.ctx.clearRect(0, 0, 200, 500);
      theGame2 = new Game();
      theGame2.anotherBall = new GolfBall(100, 470);
      theGame2.anotherBall.drawGolfBall();
      hole2 = new Hole();
      anotherObstacle = new Obstacle();
      
    }else{
      return 0;
    }
    console.log('you mad it!')
    }
  }
    // console.log(theGame.golfBallTwo.x);
    // console.log(this.x);
    // console.log(this.y);
    // console.log(theGame.golfBallTwo.y);
    // console.log('almost');
  


  // end of the Hole object
class Obstacle{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.floor(Math.random()*100 + 50);
    this.y = Math.ceil(Math.random()*200 +100);
    this.width = Math.floor(Math.random()*30 + 15);
    this.height = Math.floor(Math.random()*40 + 15);
  }
  drawObstacle(){
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    return this;}
}
document.getElementById('start-button').onclick = function(){
  theGame = new Game();

}
document.onkeydown = function(e){
  let commands = ['ArrowLeft', 'ArrowRight', 'ArrowUp'];
  //keeps track of all ekeys that are accepted as valid commands
  if(commands.includes(e.key)){
    e.preventDefault();
    keysBeingPressed.push(e.key);}
    // all keys not included in array are spliced
  if(!keysBeingPressed.includes(e.key)){
    keysBeingPressed.splice(e.key, 0);}
  // if statements calling functions for each command
  if(e.which === 37) {
    
    theGame.golfBallTwo.moveleft();}
  
  if(e.which === 39) {
    theGame.golfBallTwo.moveRight();
    }
  
  if(e.which === 38){
  setTimeout(()=>{
    theGame.golfBallTwo.move();
     },2000)
     commands.splice(2, 1);
    
  }
}