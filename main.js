let int;
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
    this.golfBallHolder;
    this.obstacle = new Obstacle();
    this.hole = new Hole();
    this.pinHolder;
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.lives = 5;
    this.pause = true;
    setInterval(()=>{
      this.ctx.clearRect(0, 0, 200, 500);
      this.golfBallTwo.drawGolfBall();
      this.obstacle.drawObstacle();
      this.pinHolder.spawnHole();
      this.pinHolder.madePuttCollision();
    },80)
  }

  functionThatHoldsDrawings(){
      this.obstacleHolder = new Obstacle();
      this.pinHolder = new Hole();
    }
  }

class GolfBall{
  constructor(x, y){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = x;
    this.y = y;
    this.width = 6;
  }
    
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
    this.ctx.fill();
    return this;
  }
  moveGolfBallForward(){
if(this.pause === true){
    int = setInterval(()=>{
        if(this.canMove(this.x, this.y - 5)){
          this.y -= 5;
        } else {
        clearInterval(int);
          return false;
      }
    },40);
  } else {
    clearInterval(int);
    return;
  }
  }

  canMove(futureX, futureY){

    let result = true;
    if(futureX < 0 || futureX > 200 || futureY < 0 || futureY > 500){
      result = false;
    }
    console.log(futureX, this.x, theGame.obstacle.x + theGame.obstacle.width)
    if(futureX < theGame.obstacle.x + theGame.obstacle.width && futureX+this.width > theGame.obstacle.x && futureY < theGame.obstacle.y+theGame.obstacle.height && futureY+this.width > theGame.obstacle.y ){
      theGame.lives -= 1;
      alert('You have ' + theGame.lives + ' lives left');
      console.log('.................. ', theGame.lives);
      console.log("what happens to the pause  ^^^^^^^ ", theGame.golfBallTwo.pause);

      alert('that was a lake');
      theGame.golfBallTwo.x = 100;
      theGame.golfBallTwo.y = 470;
      result = false;
  }
  console.log("lets check out the pause now ------------- ", theGame.golfBallTwo.pause);
  return result;
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
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
    return this;
  }

    madePuttCollision(){
    if(theGame.golfBallTwo.x < theGame.pinHolder.x + theGame.pinHolder.width && theGame.golfBallTwo.x + theGame.golfBallTwo.width > theGame.pinHolder.x && theGame.golfBallTwo.y <= theGame.pinHolder.y){
     console.log('you made it');
      alert(theGame.lives);
      setTimeout(() => {
        alert('nice job!');
      }, 10);
      theGame.golfBallTwo.pause = false;
      theGame.golfBallTwo.y = 470;
      theGame.golfBallTwo.x = 100;
      console.log("the ball should pause ", theGame.pause);
      return;
    }
    if(theGame.golfBallTwo.y < 1) {
      theGame.lives -=1;
      console.log('fjesklahgfkuhjerskfghjklrsig', theGame.lives)
        setTimeout(() => {
          alert("Sorry you missed!!!");
        }, 10);
        theGame.golfBallTwo.pause = false;
        theGame.golfBallTwo.x = 100;
        theGame.golfBallTwo.y = 470;
        console.log("is the ball pausing <<<<<<<<<< ", theGame.golfBallTwo.pause);
        return;
    }
    }
  }
class Obstacle{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.floor(Math.random()*100 + 50);
    this.y = Math.ceil(Math.random()*200 +100);
    this.width = Math.floor(Math.random()*30 + 35);
    this.height = Math.floor(Math.random()*40 + 35);
  }
  drawObstacle(){
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    return this;}
}
document.getElementById('start-button').onclick = function(){

  clearInterval(int);
  
  theGame = new Game();
  theGame.functionThatHoldsDrawings();
  console.log("the game info ........", theGame);
  console.log("ball pause info >>>>> ", theGame.golfBallTwo.pause);
}
document.onkeydown = function(e){
  let commands = ['ArrowLeft', 'ArrowRight', 'ArrowUp'];
  if(commands.includes(e.key)){
    e.preventDefault();
    keysBeingPressed.push(e.key);}
  if(!keysBeingPressed.includes(e.key)){
    keysBeingPressed.splice(e.key, 0);}
  if(e.which === 37) {
    
    theGame.golfBallTwo.moveleft();}
  
  if(e.which === 39) {
    theGame.golfBallTwo.moveRight();
    }
  
  if(e.which === 38){
    theGame.golfBallTwo.pause = true;
  setTimeout(()=>{
    theGame.golfBallTwo.moveGolfBallForward();
    
     },2000)
     commands.splice(2, 1);
    
  }
}