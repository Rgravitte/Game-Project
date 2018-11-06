let keysBeingPressed = [];
let theGame;


class Game{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');;
    this.golfball = [];
    this.hole = [];

    // this.lives = 5;
    // might try to implement obstocles on harder levels
    // this.obstacles = [];
  
// setInterval(()=>{

  // this.ctx.clearRect(0, 0, 200, 500);

    // this.golfball.move();

  // this.drawEverything();
// ?


  // this.collision();
  
// },1000)

// }
// },1000)
//   }
drawEverything(){
  this.golfball.draw();
  this.hole.draw();
  // this.obstacles.forEach((obstacle)=>{
  //   obstacle.draw();
  // })
}
}
class Hole{
  constructor(){
    this.c = document.getElementById('game-board');
    this.ctx = c.getContext('2d');
    this.x = Math.floor(Math.random()*160);
    this.y = 10;
    this.width = 50;
    this.height = 50;
    this.arc = (0*Math.PI, 1.5*Math.PI);
  }
draw(){
  this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.whidth, this.height, this.arc);
    this.ctx.fill();
}

}





document.onkeydown = function(e){
  let commands = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  if(commands.includes(e.key)){
    e.preventDefault();
  }
  if(!keysBeingPressed.includes(e.key)){
    keysBeingPressed.push(e.key);
  }
   
}

document.onkeyup = function(e){
  let theIndex = keysBeingPressed.indexOf(e.key)
  if(theIndex != -1){
    keysBeingPressed.splice(theIndex,1)
  }
}



class GolfBall{
  constructor(){
  this.c = document.getElementById('game-board').getContext('2d');
  this.x = 150;
  this.y = 300;
  this.width = 30;
  this.height = 30;
  this.arc = (0*Math.PI, 1.5*Math.PI);
  this.ctx.fillStyle =" white";
  }
  draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.whidth, this.height, this.arc);
    this.ctx.fill();
  }

  move(){
    //  this.canMove(this.x, this.y);
      if(keysBeingPressed.includes("ArrowLeft")){
        // if(this.canMove(this.x-10, this.y)){
        this.x -= 3; 
        // }
      }
       if(keysBeingPressed.includes("ArrowRight")){
        this.x += 4; 
        }
      }
     
      
  
      // if(keysBeingPressed.includes("ArrowUp")){
        // if(this.canMove(this.x, this.y-10)){
      //     console.log("hey");
      //     this.y -= 3;
      //   // }
        
      // }  
      // if(keysBeingPressed.includes("ArrowDown")){
      //   console.log('hey');
        // if(this.canMove(this.x, this.y+10)){
        // this.y += 3;
        // }
      };
      document.getElementById("start-button").onclick = function() {
        startGame();
         
      };
      
      function startGame() {
        newGame = new Game();
        golfBallTwo = new GolfBall();
        newGame.golfball.push[golfBallTwo];
        
      }
      

    

     
    // }
  

//     canMove(futureX, futureY){
//       let result = true;
//       if(futureX < 0 || futureX > 550 || futureY < 0 || futureY > 700 ){
//         result = false;
//       } 
//       return result;
// }
  // }
  // let golfballtwo = new GolfBall
  // function startGame() {
  //   golfballtwo.draw() 
  // }
  


