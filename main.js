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
    // this.obstacleHolder;
    this.hole = new Hole();
    this.pinHolder;
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.lives = 5;
    // this.games = 10;
 
    setInterval(()=>{
      console.log("this is the golfball pause ############# ", this.golfBallTwo.pause)
      this.ctx.clearRect(0, 0, 200, 500);
      this.pinHolder.madePuttCollision();
      this.golfBallTwo.drawGolfBall();
      this.obstacle.drawObstacle();
      this.pinHolder.spawnHole();

    },100)
  }

  functionThatHoldsDrawings(){
    
      // this.golfBallHolder = this.golfBallTwo;
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
    this.pause = true;
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
    // clearInterval(int);
if(this.pause === true){
    // if(false){
    //   return;
    // }
    int = setInterval(()=>{
              // console.log(">>>>>>  moving forward <<<<<")
        if(this.canMove(this.x, this.y - 5)){
          this.y -= 5;
        } else {
          // console.log('=-=-=-=-=-=-=-=-=-')
      
        clearInterval(int);
          return false;
      }
    },50);
  } else {
    clearInterval(int);
    return;
  }
    
    // } else {
    //   console.log("nothing is happening .........")
    //   return;
    // }
  }

  canMove(futureX, futureY){

    let result = true;
    if(futureX < 0 || futureX > 200 || futureY < 0 || futureY > 500){
      result = false;
    }

    // console.log(futureY, theGame.obstacle.y, theGame.obstacle.y + theGame.obstacle.height)
    // console.log(this.width, theGame.obstacle.x, theGame.obstacle.x + theGame.obstacle.width)


    console.log(futureX, this.x, theGame.obstacle.x + theGame.obstacle.width)

   
    // console.log(" >>>>>>>>>>>  this is the info of the ball position  <<<<<<<<<< ", futureX, futureY);
    // console.log("the obstacle info %%%%%%%% ", theGame.obstacle.x, theGame.obstacle.y)
    // console.log("the game obstacle with the width :::::::::::::::: ", theGame.obstacle.x + theGame.obstacle.width, theGame.obstacle.y + theGame.obstacle.height)

    if(futureX < theGame.obstacle.x + theGame.obstacle.width && futureX+this.width > theGame.obstacle.x && futureY < theGame.obstacle.y+theGame.obstacle.height && futureY+this.width > theGame.obstacle.y ){
      theGame.lives -= 1;
      console.log('.................. ', theGame.lives);
      console.log("what happens to the pause  ^^^^^^^ ", theGame.golfBallTwo.pause);
 
      // console.log('.////////////////', result)
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
    this.width = 12;}
  spawnHole(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
    return this;
  }

    madePuttCollision(){
      // console.log();  
      // console.log('**********************', theGame.pinHolder.y, theGame.golfBallTwo.y);
      // console.log('#################', theGame.pinHolder.x + theGame.pinHolder.width, theGame.golfBallTwo.x);
    if(theGame.golfBallTwo.x < theGame.pinHolder.x + theGame.pinHolder.width && theGame.golfBallTwo.x + theGame.golfBallTwo.width > theGame.pinHolder.x && theGame.golfBallTwo.y <= theGame.pinHolder.y){
     console.log('you made it');
      setTimeout(() => {
        alert('nice job!');
      }, 10);
      theGame.golfBallTwo.pause = false;
      theGame.golfBallTwo.y = 470;
      theGame.golfBallTwo.x = 100;
      console.log("the ball should pause ", theGame.golfBallTwo.pause);
      return;
      // theGame.pinholder = this.spawnHole();
      // theGame.obstacle = new Obstacle();

      // console.log('----------', theGame.obstacleHolder);
      // console.log('==========', theGame.golfBallTwo);
      // console.log('@@@@@@@@@@@@ ', theGame.golfBallTwo.pause);
    }
    if(theGame.golfBallTwo.y < 1) {
      theGame.lives -=1;
      console.log('fjesklahgfkuhjerskfghjklrsig', theGame.lives)
        setTimeout(() => {
          alert("Sorry you missed!!!");
        }, 10);
        // this.pause = true;
        theGame.golfBallTwo.pause = false;
        theGame.golfBallTwo.x = 100;
        theGame.golfBallTwo.y = 470;
        console.log("is the ball pausing <<<<<<<<<< ", theGame.golfBallTwo.pause);
        return;
       
      // theGame.golfBallTwo.y = 470;
      // theGame.golfBallTwo.x = 100;
      // theGame.pinholder = this.spawnHole();
      // theGame.obstacle = new Obstacle();
      // return false;

      // console.log('----------', theGame.obstacleHolder);
      // console.log('==========', theGame.golfBallTwo);
      // console.log('@@@@@@@@@@@@@ ', theGame.golfBallTwo.pause);
      // return;
    }
   
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

  clearInterval(int);
  
  theGame = new Game();
  theGame.functionThatHoldsDrawings();
  console.log("the game info ........", theGame);
  console.log("ball pause info >>>>> ", theGame.golfBallTwo.pause);
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
    theGame.golfBallTwo.pause = true;
  setTimeout(()=>{
    theGame.golfBallTwo.moveGolfBallForward();
    
     },2000)
     commands.splice(2, 1);
    
  }
}